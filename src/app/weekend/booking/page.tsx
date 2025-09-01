"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
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
  parentEmail: z.email("Invalid email").min(1, "Parent email is required"),
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
  paymentMethod: z.string("Payment method is required"),
});

type BookingFormData = z.infer<typeof schema>;

export default function WeekendBookingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(schema),
  });
  // Refs for DOM fields we need to tweak imperatively
  const dateRef = useRef<HTMLInputElement | null>(null);

  // Session enable/disable state (driven by chosen date)
  const [sessionDay, setSessionDay] = useState<null | "sat" | "sun">(null);

  // Init min/max on date and set weekend-only guard
  useEffect(() => {
    const el = dateRef.current;
    if (!el) return;

    // Limit to tomorrow → 90 days ahead
    const today = new Date();
    const min = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    const max = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 90
    );
    el.min = min.toISOString().slice(0, 10);
    el.max = max.toISOString().slice(0, 10);
  }, []);

  const isWeekend = (value: string) => {
    if (!value) return false;
    const d = new Date(value).getDay();
    return d === 6 || d === 0; // Sat=6, Sun=0
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) return;
    if (!isWeekend(value)) {
      // Show error toast, clear invalid date
      toast.error("Please select a Saturday or Sunday only.");
      e.target.value = "";
      setSessionDay(null);
      return;
    }
    // Valid weekend: choose which session options to enable
    const day = new Date(value).getDay();
    setValue("bookingDate", value, { shouldValidate: true, shouldTouch: true });
    if (day === 6) {
      setSessionDay("sat");
    } else if (day === 0) {
      setSessionDay("sun");
    } else {
      setSessionDay(null);
    }
  };

  const submitForm = async (data: BookingFormData) => {
    setIsLoading(true);
    try {
      await BookingService.bookWonderLab(data);
      toast.success("Booking successful! We'll be in touch soon.");
      setIsSuccess(true);
      reset();
      setSessionDay(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Helpers to style/disable session radios
  const disabledOnSun = (value: string) =>
    sessionDay === "sun" && (value === "sat-am" || value === "sat-pm");
  const disabledOnSat = (value: string) =>
    sessionDay === "sat" && value === "sun-pm";
  const disabledIfNoDay = sessionDay === null;

  const radioDisabled = (value: string) =>
    disabledIfNoDay || disabledOnSun(value) || disabledOnSat(value);

  const radioLabelDim = (value: string) =>
    radioDisabled(value) ? "opacity-50 cursor-not-allowed" : "";

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Decorative background shapes */}
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
            <p className="text-lg text-gray-700 leading-relaxed bg-white p-6">
              At{" "}
              <span className="font-bold text-blue-700">
                TechTots WonderLab
              </span>
              , every weekend is a world of discovery, creativity, and joy. We
              believe your child deserves the chance to explore new skills, make
              friends, and build confidence in a safe, inspiring space. From
              STEM adventures to arts, sports, and nature play, there’s
              something magical for every curious mind. Our passionate
              facilitators are ready to guide your ward through unforgettable
              learning experiences.
              <span className="font-semibold text-blue-700">
                We would be delighted to welcome your child — book their weekend
                session today and let the wonder begin!
              </span>
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            <form
              id="bookingForm"
              aria-disabled={isLoading}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-8"
            >
              {/* Parent / Guardian Details */}
              <section>
                <h2 className="text-lg font-semibold text-[#0ea5e9]">
                  Parent / Guardian Information
                </h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8">
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500"
                    >
                      Full Name
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      required
                      placeholder="e.g., Ama Mensah"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      {...register("parentName")}
                    />
                    {errors.parentName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.parentName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="parentPhone"
                      className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500"
                    >
                      Phone (WhatsApp)
                    </label>
                    <input
                      id="parentPhone"
                      type="tel"
                      inputMode="tel"
                      required
                      placeholder="e.g., +233 25 612 4133"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      {...register("parentPhone")}
                    />
                    {errors.parentPhone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.parentPhone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="parentEmail"
                      className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500"
                    >
                      Email
                    </label>
                    <input
                      id="parentEmail"
                      type="email"
                      required
                      placeholder="e.g., techtots@vpwa.org"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      {...register("parentEmail")}
                    />
                    {errors.parentEmail && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.parentEmail.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="referralSource"
                      className="block text-sm text-gray-700 mb-1"
                    >
                      How did you hear about WonderLab?
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setValue("referralSource", value, {
                          shouldTouch: true,
                          shouldValidate: true,
                        })
                      }
                    >
                      <SelectTrigger className="w-full py-5">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value={"Instagram"}>Instagram</SelectItem>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="TikTok">TikTok</SelectItem>
                        <SelectItem value="Friend or Family">
                          Friend / Family
                        </SelectItem>
                        <SelectItem value="Billboard">Billboard</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.referralSource && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.referralSource.message}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Child Details */}
              <section>
                <h2 className="text-lg font-semibold text-[#0ea5e9]">
                  Child Information
                </h2>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="childName"
                      className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500"
                    >
                      Child’s Full Name
                    </label>
                    <input
                      id="childName"
                      type="text"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      {...register("childName")}
                    />
                    {errors.childName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.childName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="childAge"
                      className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500"
                    >
                      Age
                    </label>
                    <input
                      id="childAge"
                      type="number"
                      min={2}
                      max={12}
                      required
                      placeholder="e.g., 6"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      {...register("childAge", { valueAsNumber: true })}
                    />
                    {errors.childAge && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.childAge.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="childNotes"
                      className="block text-sm text-gray-700 mb-1"
                    >
                      Medical / Allergies / Special Notes
                    </label>
                    <textarea
                      id="childNotes"
                      rows={3}
                      placeholder="Optional"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      {...register("childSpecialNote")}
                    />
                    {errors.childSpecialNote && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.childSpecialNote.message}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Booking Details */}
              <section>
                <header>
                  <h2 className="text-lg font-semibold text-[#0ea5e9]">
                    Booking Details
                  </h2>
                  <span className="text-xs text-gray-500 block">
                    <strong>Note:</strong> Wonderlab session are only available
                    on weekend. Sunday session is ONLY in the afternoon.
                  </span>
                </header>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8">
                  <div>
                    <label
                      htmlFor="sessionDate"
                      className="block text-sm text-gray-700 mb-2 after:content-['*'] after:ml-1 after:text-red-500"
                    >
                      Preferred Date
                    </label>
                    <input
                      ref={dateRef}
                      onChange={handleDateChange}
                      required
                      id="sessionDate"
                      type="date"
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    {errors.bookingDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.bookingDate.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <span className="block text-sm text-gray-700 mb-2 after:content-['*'] after:ml-1 after:text-red-500">
                      Session
                    </span>

                    <Select
                      disabled={!sessionDay}
                      onValueChange={(value) =>
                        setValue("bookingTime", value, {
                          shouldValidate: true,
                          shouldTouch: true,
                        })
                      }
                    >
                      <SelectTrigger className="w-full bg-white py-5">
                        <SelectValue placeholder="Session Time" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem
                          value="09:00"
                          disabled={sessionDay != "sat"}
                        >
                          Morning — 09:00 AM – 01:00 PM
                        </SelectItem>
                        <SelectItem value="13:00">
                          Afternoon — 01:00 PM – 05:00 PM
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.bookingTime && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.bookingTime.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="numChildren"
                      className="block text-sm text-gray-700 mb-1"
                    >
                      Number of Children
                    </label>
                    <input
                      id="numChildren"
                      type="number"
                      min={1}
                      max={3}
                      defaultValue={1}
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      {...register("numberOfChildren", { valueAsNumber: true })}
                    />
                    {errors.numberOfChildren && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.numberOfChildren.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm text-gray-700 mb-1">
                      Add-ons (optional)
                    </span>
                    <div className="flex gap-5 text-sm my-auto">
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-primary"
                          {...register("lunch")}
                        />{" "}
                        Lunch
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="accent-primary"
                          {...register("earlyDropOff")}
                        />{" "}
                        Early Drop-off (from 08:30)
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment & Consent */}
              <section>
                <h2 className="text-lg font-semibold text-[#0ea5e9]">
                  Payment & Consent
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-5 xl:gap-8">
                  <div className="col-span-1">
                    <label className="block text-sm text-gray-700 mb-1 after:content-['*'] after:ml-1 after:text-red-500">
                      Payment Method
                    </label>
                    <Select
                      onValueChange={(value) =>
                        setValue("paymentMethod", value, {
                          shouldValidate: true,
                          shouldTouch: true,
                        })
                      }
                    >
                      <SelectTrigger className="w-full bg-white py-5">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="momo">Mobile Money</SelectItem>
                        <SelectItem value="card">Card</SelectItem>
                        <SelectItem value="arrival">Pay on Arrival</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.paymentMethod && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.paymentMethod.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="notes"
                      className="block text-sm text-gray-700 mb-1"
                    >
                      Additional Notes (optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      {...register("additionalNotes")}
                    />
                    {errors.additionalNotes && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.additionalNotes.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="inline-flex items-start gap-3">
                      <input
                        id="consent"
                        type="checkbox"
                        required
                        className="mt-1 accent-primary"
                      />
                      <span className="text-sm text-gray-700">
                        I confirm that the information provided is accurate and
                        I consent to TechTots International School contacting me
                        regarding this booking. I agree to the WonderLab
                        participation guidelines and safety rules.
                      </span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Submit */}
              <div className="flex flex-col xl:flex-row items-start md:items-center gap-5">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={handleSubmit(submitForm)}
                  className="inline-flex items-center gap-2 px-5 py-3 disabled:bg-gray-500 rounded-md text-white font-semibold bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Book Session
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
