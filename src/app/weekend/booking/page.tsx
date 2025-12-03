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
            <CardTitle className="text-4xl font-extrabold text-primary" style={{ color: "#27455c" }}>
              WonderLab Weekend Registration
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              At TechTots WonderLab, every weekend is a world of discovery, creativity, and joy. We believe your child deserves the chance to explore new skills, make friends, and build confidence in a safe, inspiring space. From STEM adventures to arts, sports, and nature play, there’s something magical for every curious mind. Our passionate facilitators are ready to guide your ward through unforgettable learning experiences.We would be delighted to welcome your child — book their weekend session today and let the wonder begin!
            </p>
            <span className="font-semibold text-blue-700" style={{ color: "#123", marginTop:"2px" }}>
              Choose a pass, pick activities and (optionally) add a specialised programme.
            </span>

          </CardHeader>


          <iframe
            src="https://app.schoolrobot.net/tech-tots/"
            className="w-full h-[100%] min-h-[1500px] md:min-h-[1800px] lg:min-h-[2000px] border-none rounded-b-xl"
            onLoad={() => {
              const loader = document.getElementById("iframeLoader1");
              if (loader) loader.style.display = "none";
            }}
          />

        </Card>
      )}
    </main>
  );
}








