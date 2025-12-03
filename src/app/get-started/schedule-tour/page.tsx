"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Metadata } from "next";
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TourService from "@/services/TourService";
import { toast } from "sonner";
import { fi } from "date-fns/locale";
import { CircleCheckBig } from "lucide-react";

const schema = z.object({
  parentName: z.string().min(2, "Name must be at least 2 characters long"),
  parentEmail: z.email("Invalid email address").optional(),
  parentPhone: z.string().min(7, "Phone number must be at least 7 digits long"),
  preferredContactMode: z.enum(["phone", "whatsapp", "email"]),
  childName: z.string().min(2, "Child's name must be at least 2 characters long"),
  childDOB: z.string().refine((date) => {
    const parsedDate = new Date(date);
    const today = new Date();
    return parsedDate < today;
  }, "Date of Birth must be a valid date in the past"),
  preferredProgram: z.enum(["Creche", "Early Years Preparatory", "Cambridge Early Years", "Cambridge Primary"]),
  firstPreferredDate: z.string().refine((date) => {
    const parsedDate = new Date(date);
    const today = new Date();
    return parsedDate >= today;
  }, "First preferred date must be today or in the future"),
  firstPreferredTime: z.string().min(1, "Please specify the preferred time"),
  secondPreferredDate: z.string().refine((date) => {
    const parsedDate = new Date(date);
    const today = new Date();
    return parsedDate >= today;
  }, "Second preferred date must be today or in the future"),
  secondPreferredTime: z.string().min(1, "Please specify the preferred time"),
  additionalNotes: z.string().max(500).optional(),
  consentSignature: z.string().min(2, "Signature must be at least 2 characters long"),
  consentDate: z.string().refine((date) => {
    const parsedDate = new Date(date);
    const today = new Date();
    return parsedDate <= today;
  }, "Consent date cannot be in the future"),
})
  .refine((data) => {
    const first = new Date(`${data.firstPreferredDate}T${data.firstPreferredTime}`);
    const second = new Date(`${data.secondPreferredDate}T${data.secondPreferredTime}`);
    return second > first;
  }, {
    message: "Second preferred date and time must be later than the first",
    path: ["secondPreferredDate"],
  })
  .refine((data) => data.consentSignature === data.parentName, {
    message: "Consent signature must match parent name",
    path: ["consentSignature"],
  });

const metadata: Metadata = {
  title: "Schedule a Tour",
  description:
    "We'd love to welcome you and your family for a personalized tour of our campus. Please complete this form and our admissions team will contact you to confirm your visit.",
};

type FormData = z.infer<typeof schema>;

export default function ScheduleTourPage() {
  const minDate = new Date().toISOString().split("T")[0];
  const minTime = new Date().toISOString().split("T")[1].slice(0,5);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const res = await TourService.createRequest(data)
      setIsSuccess(true);
      toast.success("Tour request submitted successfully! We'll be in touch soon.");
      reset();
    } catch (error) {
      toast.error("There was an error submitting your request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

     
        <Card className="relative w-full max-w-4xl z-10 shadow-xl bg-white/90 backdrop-blur-xl py-5 space-y-8">
        <CardHeader className="text-center space-y-5">
          <CardTitle className="text-4xl font-extrabold text-primary" style={{  color: "#27455c" }}>
            Schedule a Tour
          </CardTitle>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            We'd love to welcome you and your family for a personalized tour of
            our campus. Please complete this form and our admissions team will
            contact you to confirm your visit.
          </p>
        </CardHeader>

         <iframe style={{  marginTop: "-20px" }}
      src="https://app.schoolrobot.net/tech-tots/tour.php"
      className="w-full h-[100%] min-h-[1500px] md:min-h-[1800px] lg:min-h-[1300px] border-none rounded-b-xl"
    />
      </Card>
    
    </main>
  );
}
