"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function ScheduleTourPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

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

        <CardContent className="space-y-8">
          {/* Parent/Guardian Info */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-sky-500">
              Parent/Guardian Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input required name="parentName" />
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input type="tel" required name="phone" />
              </div>
              <div>
                <Label>Email Address</Label>
                <Input type="email" required name="email" />
              </div>
              <div className="md:col-span-2">
                <Label>Preferred Method of Contact</Label>
                <RadioGroup
                  className="flex flex-wrap gap-6 mt-2"
                  name="contactMethod"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="Phone Call" id="contact-phone" />
                    <Label htmlFor="contact-phone">Phone Call</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="WhatsApp" id="contact-whatsapp" />
                    <Label htmlFor="contact-whatsapp">WhatsApp</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="Email" id="contact-email" />
                    <Label htmlFor="contact-email">Email</Label>
                  </div>
                </RadioGroup>
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
                <Input required name="childName" />
              </div>
              <div>
                <Label>Child’s Date of Birth</Label>
                <Input type="date" required name="childDob" />
              </div>
            </div>
            <div>
              <Label>Program Level Interested In</Label>
              <RadioGroup
                className="flex flex-col gap-2 mt-2"
                name="programLevel"
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
                <Input type="date" required name="tourDate1" />
              </div>
              <div>
                <Label>Preferred Time</Label>
                <Input type="time" required name="tourTime1" />
              </div>
              <div>
                <Label>2nd Choice Date</Label>
                <Input type="date" name="tourDate2" />
              </div>
              <div>
                <Label>Preferred Time</Label>
                <Input type="time" name="tourTime2" />
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
              <Textarea name="questions" rows={3} />
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
                <Input required name="signature" />
              </div>
              <div>
                <Label>Date</Label>
                <Input type="date" required name="declarationDate" />
              </div>
            </div>
          </section>

          <div className="w-full flex items-center">
            <Button
              type="button"
              className="w-full md:w-2/3 lg:w-1/2 mx-auto btn btn-primary text-lg font-semibold p-6 px-12 text-white"
            >
              Submit Request
            </Button>
          </div>

        </CardContent>
      </Card>
    </main>
  );
}
