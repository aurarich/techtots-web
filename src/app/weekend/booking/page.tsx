"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookingService } from "@/services";
import { CircleCheckBig } from "lucide-react";

const schema = z.object({
  parentName: z.string().min(1, "Parent name is required"),
  parentEmail: z.string().email("Invalid email").min(1, "Parent email is required"),
  parentPhone: z.string().min(1, "Parent phone is required"),
  childName: z.string().min(1, "Child name is required"),

  childAge: z.number().int().min(0).optional(),
  childSpecialNote: z.string().optional(),

  bookingDate: z.string().nonempty("Booking date is required"),
  bookingTime: z.string().nonempty("Booking time is required"),
  numberOfChildren: z.number().int().min(1, "At least one child is required"),
  lunch: z.boolean().optional(),
  earlyDropOff: z.boolean().optional(),
  additionalNotes: z.string().optional(),
  referralSource: z.string().optional(),
  paymentMethod: z.string().min(1, "Payment method is required"),

  // NEW
  selectedItems: z.array(z.string()).optional(),
  totalAmount: z.number().optional(),
});

type BookingFormData = z.infer<typeof schema>;

const PACKAGES = [
  { id: "daypass", label: "Day Pass (per 4-hour session)", price: 100 },
  { id: "term12", label: "Term Pass (12 sessions)", price: 1100 },
  { id: "term24", label: "Term Pass (24 sessions)", price: 2000 },
];

const SPECIALISED = [
  { id: "robotics", label: "Robotics, AI & Coding (12 sessions)", price: 2500 },
  { id: "music", label: "Music (Piano, 12 sessions)", price: 1800 },
  { id: "taekwondo", label: "Taekwondo (12 sessions)", price: 1700 },
  { id: "library", label: "Library & Literacy Club (1 year)", price: 1000 },
];

export default function WeekendBookingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(schema),
  });
  const paymentMethod = watch("paymentMethod");

  const dateRef = useRef<HTMLInputElement | null>(null);
  const [sessionDay, setSessionDay] = useState<null | "sat" | "sun">(null);

  useEffect(() => {
    const el = dateRef.current;
    if (!el) return;
    const today = new Date();
    const min = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const max = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 90);
    el.min = min.toISOString().slice(0, 10);
    el.max = max.toISOString().slice(0, 10);
  }, []);

  // recalc total
  useEffect(() => {
    const allOptions = [...PACKAGES, ...SPECIALISED];
    const total = allOptions
        .filter((opt) => selectedItems.includes(opt.id))
        .reduce((sum, opt) => sum + opt.price, 0);
    setTotalAmount(total);
    setValue("totalAmount", total);
    setValue("selectedItems", selectedItems);
  }, [selectedItems, setValue]);

  const isWeekend = (value: string) => {
    if (!value) return false;
    const d = new Date(value).getDay();
    return d === 6 || d === 0; // Sat or Sun
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) return;
    if (!isWeekend(value)) {
      toast.error("Please select a Saturday or Sunday only.");
      e.target.value = "";
      setSessionDay(null);
      return;
    }
    const day = new Date(value).getDay();
    setValue("bookingDate", value, { shouldValidate: true, shouldTouch: true });
    setSessionDay(day === 6 ? "sat" : "sun");
  };

  const toggleSelection = (id: string) => {
    setSelectedItems((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const submitForm = async (data: BookingFormData) => {
    setIsLoading(true);
    try {
      await BookingService.bookWonderLab({
        ...data,
        selectedItems,
        totalAmount,
      });
      toast.success("Booking successful! We'll be in touch soon.");
      setIsSuccess(true);
      reset();
      setSelectedItems([]);
      setTotalAmount(0);
      setSessionDay(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 flex items-center justify-center py-16 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

        {isSuccess ? (
            <Card className="w-full max-w-3xl p-8 bg-white/90 backdrop-blur-md shadow-lg rounded-xl border border-gray-200">
              <CardHeader>
                <CircleCheckBig className="mx-auto size-20 mb-4 text-green-600" />
                <CardTitle className="text-2xl font-bold text-center text-gray-900">
                  Thank You!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-700">
                  Your weekend booking for Wonderlab Session has been submitted successfully. We look forward
                  to welcoming you and your child to TechTots! Our admissions team
                  will reach out to confirm the details of your booking.
                </p>
                <div className="mt-6 text-center">
                  <Button
                      type="button"
                      disabled={isLoading}
                      onClick={() => setIsSuccess(false)}
                      className="w-full md:w-2/3 lg:w-1/2 mx-auto btn btn-primary text-lg font-semibold p-6 px-12 text-white disabled:bg-slate-500"
                  >
                    Ok
                  </Button>
                </div>
              </CardContent>
            </Card>
        ) : (
            <Card className="relative w-full max-w-4xl z-10 shadow-xl bg-white/90 backdrop-blur-xl py-5 space-y-8">
              <CardHeader className="text-center space-y-5">
                <CardTitle className="text-4xl font-extrabold text-primary">
                  TechTots WonderLab – Weekend Booking
                </CardTitle>

                <p className="text-lg text-gray-700 leading-relaxed bg-white p-6">At  <span
                    className="font-bold text-blue-700">TechTots WonderLab</span>, every weekend is a world of
                  discovery, creativity, and joy. We believe your child deserves the chance to explore new skills, make
                  friends, and build confidence in a safe, inspiring space. From STEM adventures to arts, sports, and
                  nature play, there’s something magical for every curious mind. Our passionate facilitators are ready
                  to guide your ward through unforgettable learning experiences.<span
                      className="font-semibold text-blue-700">We would be delighted to welcome your child — book their weekend session today and let the wonder begin!</span>
                </p>
              </CardHeader>

              <CardContent className="space-y-8">
                <form
                    id="bookingForm"
                    aria-disabled={isLoading}
                    className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-8"
                >
                  {/* ---------------- Parent Info ---------------- */}
                  <section>
                    <h2 className="text-lg font-semibold text-[#0ea5e9]">Parent / Guardian Information</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8">
                      <div>
                        <label htmlFor="parentName" className="block text-sm text-gray-700 mb-1">Full Name</label>
                        <input id="parentName" type="text" required placeholder="e.g., Ama Mensah"
                               className="w-full rounded-md border border-gray-300 px-4 py-2" {...register("parentName")} />
                        {errors.parentName && <p className="text-red-500 text-xs">{errors.parentName.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="parentPhone" className="block text-sm text-gray-700 mb-1">Phone (WhatsApp)</label>
                        <input id="parentPhone" type="tel" required placeholder="e.g., +233 25 612 4133"
                               className="w-full rounded-md border border-gray-300 px-4 py-2" {...register("parentPhone")} />
                        {errors.parentPhone && <p className="text-red-500 text-xs">{errors.parentPhone.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="parentEmail" className="block text-sm text-gray-700 mb-1">Email</label>
                        <input id="parentEmail" type="email" required placeholder="e.g., techtots@vpwa.org"
                               className="w-full rounded-md border border-gray-300 px-4 py-2" {...register("parentEmail")} />
                        {errors.parentEmail && <p className="text-red-500 text-xs">{errors.parentEmail.message}</p>}
                      </div>

                      <div>
                        <label htmlFor="referralSource" className="block text-sm text-gray-700 mb-1">How did you hear about WonderLab?</label>
                        <Select onValueChange={(value) => setValue("referralSource", value, { shouldValidate: true })}>
                          <SelectTrigger className="w-full py-5"><SelectValue placeholder="Select..." /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Instagram">Instagram</SelectItem>
                            <SelectItem value="Facebook">Facebook</SelectItem>
                            <SelectItem value="TikTok">TikTok</SelectItem>
                            <SelectItem value="Friend or Family">Friend / Family</SelectItem>
                            <SelectItem value="Billboard">Billboard</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </section>

                  {/* ---------------- Child Info ---------------- */}
                  <section>
                    <h2 className="text-lg font-semibold text-[#0ea5e9]">Child Information</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="childName" className="block text-sm text-gray-700 mb-1">Child’s Full Name</label>
                        <input id="childName" type="text"
                               className="w-full rounded-md border border-gray-300 px-4 py-2" {...register("childName")} />
                      </div>

                      <div>
                        <label htmlFor="childAge" className="block text-sm text-gray-700 mb-1">Age</label>
                        <input id="childAge" type="number" min={2} max={12} required placeholder="e.g., 6"
                               className="w-full rounded-md border border-gray-300 px-4 py-2"
                               {...register("childAge", { valueAsNumber: true })} />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="childNotes" className="block text-sm text-gray-700 mb-1">Medical / Allergies / Special Notes</label>
                        <textarea id="childNotes" rows={3} placeholder="Optional"
                                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                                  {...register("childSpecialNote")} />
                      </div>
                    </div>
                  </section>

                  {/* ---------------- Booking Details ---------------- */}
                  <section>
                    <h2 className="text-lg font-semibold text-[#0ea5e9]">Booking Details</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8">
                      <div>
                        <label htmlFor="sessionDate" className="block text-sm text-gray-700 mb-2">Preferred Date</label>
                        <input ref={dateRef} onChange={handleDateChange} required id="sessionDate" type="date"
                               className="w-full rounded-md border border-gray-300 px-4 py-2" />
                      </div>

                      <div>
                        <span className="block text-sm text-gray-700 mb-2">Session</span>
                        <Select disabled={!sessionDay} onValueChange={(value) => setValue("bookingTime", value, { shouldValidate: true })}>
                          <SelectTrigger className="w-full py-5"><SelectValue placeholder="Session Time" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="09:00" disabled={sessionDay !== "sat"}>Morning — 09:00–01:00</SelectItem>
                            <SelectItem value="13:00">Afternoon — 01:00–05:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="numChildren" className="block text-sm text-gray-700 mb-1">Number of Children</label>
                        <input id="numChildren" type="number" min={1} max={3} defaultValue={1}
                               className="w-full rounded-md border border-gray-300 px-4 py-2"
                               {...register("numberOfChildren", { valueAsNumber: true })} />
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm text-gray-700 mb-1">Add-ons (optional)</span>
                        <div className="flex gap-5 text-sm">
                          <label className="inline-flex items-center gap-2"><input type="checkbox" {...register("lunch")} /> Lunch</label>
                          <label className="inline-flex items-center gap-2"><input type="checkbox" {...register("earlyDropOff")} /> Early Drop-off</label>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* ---------------- Packages + Specialised ---------------- */}
                  <section>
                    <h2 className="text-lg font-semibold text-[#0ea5e9]">Packages</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {PACKAGES.map((pkg) => (
                          <label key={pkg.id} className="flex items-center gap-3">
                            <input type="checkbox" checked={selectedItems.includes(pkg.id)} onChange={() => toggleSelection(pkg.id)} />
                            <span>{pkg.label} — GHC {pkg.price}</span>
                          </label>
                      ))}
                    </div>

                    <h2 className="text-lg font-semibold text-[#0ea5e9] mt-6">Specialised Programmes</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {SPECIALISED.map((sp) => (
                          <label key={sp.id} className="flex items-center gap-3">
                            <input type="checkbox" checked={selectedItems.includes(sp.id)} onChange={() => toggleSelection(sp.id)} />
                            <span>{sp.label} — GHC {sp.price}</span>
                          </label>
                      ))}
                    </div>
                    {/* ✅ Total + Summary OUTSIDE the map */}
                    {/*<div className="mt-6 text-xl font-semibold">Total: GHC {totalAmount}</div>*/}

                    {selectedItems.length > 0 && (
                        <div className="mt-3 p-4 bg-gray-50 rounded-lg border text-sm text-gray-700">
                          <p className="font-semibold mb-2">Selected Items:</p>
                          <ul className="list-disc list-inside space-y-1">
                            {selectedItems.map((id, idx) => {
                              const item = [...PACKAGES, ...SPECIALISED].find((opt) => opt.id === id);
                              return (
                                  <li key={idx}>
                                    {item?.label} — GHC {item?.price}
                                  </li>
                              );
                            })}
                          </ul>
                        </div>
                    )}


                    <div className="mt-6 text-lg font-semibold text-gray-800">
                      Total: GHC {totalAmount}
                    </div>
                  </section>

                  {/* ---------------- Payment & Consent ---------------- */}
                  <section>
                    <h2 className="text-lg font-semibold text-[#0ea5e9]">Payment & Consent</h2>
                    <div className="mt-4 grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-700 mb-1">Payment Method</label>
                        <Select onValueChange={(value) => setValue("paymentMethod", value, { shouldValidate: true })}>
                          <SelectTrigger className="w-full py-5"><SelectValue placeholder="Select..." /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="momo">Mobile Money</SelectItem>
                            <SelectItem value="card">Card</SelectItem>
                            <SelectItem value="arrival">Pay on Arrival</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="col-span-2">
                        <label htmlFor="notes" className="block text-sm text-gray-700 mb-1">Additional Notes (optional)</label>
                        <textarea id="notes" rows={3}
                                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                                  {...register("additionalNotes")} />
                      </div>

                      <div className="md:col-span-2">
                        <label className="inline-flex items-start gap-3">
                          <input id="consent" type="checkbox" required className="mt-1" />
                          <span className="text-sm text-gray-700">
                            I confirm that the information provided is accurate and I consent to TechTots International School contacting me regarding this booking. I agree to the WonderLab participation guidelines and safety rules.                      </span>
                        </label>
                      </div>
                    </div>
                  </section>

                  {/* ---------------- Submit ---------------- */}
                  <div className="flex flex-col xl:flex-row items-start gap-5">
                    <button
                        type="button"
                        disabled={isLoading}
                        onClick={handleSubmit(submitForm)}
                        className="inline-flex items-center gap-2 px-5 py-3 disabled:bg-gray-500 rounded-md text-white font-semibold bg-primary hover:bg-primary/90"
                    >
                      {paymentMethod === "arrival"
                          ? "Book Session"
                          : totalAmount > 0
                              ? "Pay to Complete Booking"
                              : "Book Session"}
                    </button>

                    <p className="text-xs text-gray-500 xl:basis-3/5">
                      We’ll confirm by email/WhatsApp within 24 hours. For queries:
                      +233 25 612 4133 • techtots@vpwa.org • @techtotsgh
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
        )}
      </main>
  );
}




