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

      {/* Show success message when successful or show request form */}
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
              Your tour request has been submitted successfully. We look forward to welcoming you and your child to TechTots! Our admissions team will contact you shortly to confirm the details of your visit.
            </p>
            <div className="mt-6 text-center">
              <Button
              type="button"
              disabled={isLoading}
              onClick={()=>setIsSuccess(false)}
              className="w-full md:w-2/3 lg:w-1/2 mx-auto btn btn-primary text-lg font-semibold p-6 px-12 text-white disabled:bg-slate-500"
            >
              Submit Request
            </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="relative w-full max-w-4xl z-10 shadow-xl bg-white/90 backdrop-blur-xl py-5 space-y-8">
        <CardHeader className="text-center space-y-5">
          <CardTitle className="text-4xl font-extrabold text-primary">
            Schedule a Tour
          </CardTitle>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            We'd love to welcome you and your family for a personalized tour of
            our campus. Please complete this form and our admissions team will
            contact you to confirm your visit.
          </p>
        </CardHeader>

        <CardContent className="space-y-8" aria-disabled={isLoading}>
          {/* Parent/Guardian Info */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-sky-500">
              Parent/Guardian Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input {...register('parentName')} />
                {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>}
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input type="tel" {...register('parentPhone')} />
                {errors.parentPhone && <p className="text-red-500 text-xs mt-1">{errors.parentPhone.message}</p>}
              </div>
              <div>
                <Label>Email Address</Label>
                <Input type="email" {...register('parentEmail')} />
                {errors.parentEmail && <p className="text-red-500 text-xs mt-1">{errors.parentEmail.message}</p>}
              </div>
              <div className="md:col-span-2">
                <Label>Preferred Method of Contact</Label>
                <RadioGroup
                  className="flex flex-wrap gap-6 mt-2"
                  onValueChange={(val) => setValue("preferredContactMode", val as FormData["preferredContactMode"])}
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="phone" id="contact-phone" />
                    <Label htmlFor="contact-phone">Phone Call</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="whatsapp" id="contact-whatsapp" />
                    <Label htmlFor="contact-whatsapp">WhatsApp</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="email" id="contact-email" />
                    <Label htmlFor="contact-email">Email</Label>
                  </div>
                </RadioGroup>
                {errors.preferredContactMode && (
                    <p className="text-red-500 text-xs mt-1">{errors.preferredContactMode.message}</p>
                  )}
              </div>
            </div>
          </section>

          {/* Student Info */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-sky-500">
              Prospective Student Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Child’s Full Name</Label>
                <Input {...register('childName')} />
                {errors.childName && <p className="text-red-500 text-xs mt-1">{errors.childName.message}</p>}
              </div>
              <div>
                <Label>Child’s Date of Birth</Label>
                <Input type="date" {...register('childDOB')} max={minDate} />
                {errors.childDOB && <p className="text-red-500 text-xs mt-1">{errors.childDOB.message}</p>}
              </div>
            </div>
            <div>
              <Label>Program Level Interested In</Label>
              <RadioGroup
                className="flex flex-col gap-2 mt-2"
                onValueChange={(val) => setValue("preferredProgram", val as FormData["preferredProgram"])}
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="Creche" id="level-creche" />
                  <Label htmlFor="level-creche">Crèche (6–18 months)</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="Early Years Preparatory"
                    id="level-prep"
                  />
                  <Label htmlFor="level-prep">
                    Early Years Preparatory (18 months–3 years)
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="Cambridge Early Years" id="level-ey" />
                  <Label htmlFor="level-ey">
                    Cambridge Early Years (3–5 years)
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="Cambridge Primary"
                    id="level-primary"
                  />
                  <Label htmlFor="level-primary">
                    Cambridge Primary (5–6 years)
                  </Label>
                </div>
              </RadioGroup>
              {errors.preferredProgram && <p className="text-red-500 text-xs mt-1">{errors.preferredProgram.message}</p>}
            </div>
          </section>

          {/* Preferred Tour Date & Time */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-sky-500">
              Preferred Tour Date & Time
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>1st Choice Date</Label>
                <Input type="date" min={minDate} {...register('firstPreferredDate')} />
                {errors.firstPreferredDate && <p className="text-red-500 text-xs mt-1">{errors.firstPreferredDate.message}</p>}
              </div>
              <div>
                <Label>Preferred Time</Label>
                <Input type="time" min={minTime} {...register('firstPreferredTime')} />
                {errors.firstPreferredTime && <p className="text-red-500 text-xs mt-1">{errors.firstPreferredTime.message}</p>}
              </div>
              <div>
                <Label>2nd Choice Date</Label>
                <Input type="date" min={minDate} {...register('secondPreferredDate')} className="w-full" />
                {errors.secondPreferredDate && <p className="text-red-500 text-xs mt-1">{errors.secondPreferredDate.message}</p>}
              </div>
              <div>
                <Label>Preferred Time</Label>
                <Input type="time" {...register('secondPreferredTime')} />
                {errors.secondPreferredTime && <p className="text-red-500 text-xs mt-1">{errors.secondPreferredTime.message}</p>}
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-sky-500">
              Additional Information
            </h2>
            <Label>How did you hear about TechTots International School?</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Social Media", "Referral", "Website", "Drive By", "Other"].map(
                (source) => (
                  <div className="flex items-center gap-2" key={source}>
                    <Checkbox
                      id={source}
                      name="referralSource"
                      value={source}
                    />
                    <Label htmlFor={source}>{source}</Label>
                    {source === "Other" && (
                      <Input
                        placeholder="Please specify"
                        className="w-1/2"
                        name="referralOther"
                      />
                    )}
                  </div>
                )
              )}
            </div>
            <div>
              <Label>Questions or topics you’d like us to address</Label>
              <Textarea {...register('additionalNotes')} rows={3} maxLength={500} />
              {errors.additionalNotes && <p className="text-red-500 text-xs mt-1">{errors.additionalNotes.message}</p>}
            </div>
          </section>

          {/* Declaration */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-sky-500">Declaration</h2>
            <p className="text-gray-600">
              I understand that submitting this form is a request for
              scheduling, and that my tour date/time will be confirmed by the
              admissions office.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Parent/Guardian Signature</Label>
                <Input {...register('consentSignature')} />
                {errors.consentSignature && <p className="text-red-500 text-xs mt-1">{errors.consentSignature.message}</p>}
              </div>
              <div>
                <Label>Date</Label>
                <Input type="date" {...register('consentDate')} />
                {errors.consentDate && <p className="text-red-500 text-xs mt-1">{errors.consentDate.message}</p>}
              </div>
            </div>
          </section>

          <div className="w-full flex items-center">
            <Button
              type="button"
              disabled={isLoading}
              onClick={handleSubmit(handleFormSubmit)}
              className="w-full md:w-2/3 lg:w-1/2 mx-auto btn btn-primary text-lg font-semibold p-6 px-12 text-white disabled:bg-slate-500"
            >
              Submit Request
            </Button>
          </div>
        </CardContent>
      </Card>
      ) }
    </main>
  );
}
