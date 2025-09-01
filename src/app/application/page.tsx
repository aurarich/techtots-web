import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function AdmissionFormPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 flex items-center justify-center py-12 px-4">
            <Card className="w-full max-w-5xl shadow-lg bg-white/90 backdrop-blur-xl">
                <CardHeader className="text-center space-y-5">
                    <CardTitle className="text-3xl font-extrabold text-primary text-center">
                        TechTots International School – Admission Form
                    </CardTitle>
                    <p className="text-lg text-gray-700 leading-relaxed bg-white p-6">
                        We’re{" "}
                        <span className="font-bold text-blue-700">
               excited that you’re considering TechTots{" "}
              </span>
                        as the place for your child’s learning journey.
                        Our admission process is simple and supportive from start to finish. Please complete the form
                        with your child’s details and parent/guardian information.We look forward to partnering with
                        you to provide a {" "}
                        <span className="font-semibold text-blue-700">
               nurturing, innovative, and inspiring environment {" "}
              </span>
                        where your child can thrive.
                    </p>
                </CardHeader>

                <CardContent className="space-y-10">
                    {/* Child Information */}
                    <section>
                        <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">
                            1. Child’s Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Full Name" />
                            <Input placeholder="Date of Birth (dd/mm/yyyy)" />
                            <Input placeholder="Age" />
                            <div>
                                <Label>Gender</Label>
                                <div className="flex gap-6 mt-2">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="gender" value="male" /> Male
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="gender" value="female" /> Female
                                    </label>
                                </div>
                            </div>
                            <Input placeholder="Nationality" className="md:col-span-2" />
                            <div className="md:col-span-2">
                                <Label>Class Applying For</Label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2 text-sm">
                                    {[
                                        "Little Seeds (6–12m)",
                                        "Sprouts (1–2y)",
                                        "Explorers (2–3y)",
                                        "Adventurers (3–4y)",
                                        "Discoverers (4–5y)",
                                        "Innovators (5–6y)",
                                        "Pioneers (6–7y)",
                                        "Trailblazers (7–8y)",
                                    ].map((cls) => (
                                        <label key={cls} className="flex items-center gap-2">
                                            <input type="checkbox" name="classApplying" /> {cls}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Parent/Guardian Information */}
                    <section>
                        <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">
                            2. Parent / Guardian Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>Father / Guardian 1 – Name</Label>
                                <Input />
                                <Label>Occupation</Label>
                                <Input />
                                <Label>Phone</Label>
                                <Input />
                                <Label>Email</Label>
                                <Input />
                                <Label>Address</Label>
                                <Textarea rows={2} />
                            </div>
                            <div className="space-y-2">
                                <Label>Mother / Guardian 2 – Name</Label>
                                <Input />
                                <Label>Occupation</Label>
                                <Input />
                                <Label>Phone</Label>
                                <Input />
                                <Label>Email</Label>
                                <Input />
                                <Label>Address</Label>
                                <Textarea rows={2} />
                            </div>
                        </div>
                    </section>

                    {/* Emergency Contact */}
                    <section>
                        <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">
                            3. Emergency Contact (other than parents)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Input placeholder="Name" />
                            <Input placeholder="Relationship" />
                            <Input placeholder="Phone" />
                        </div>
                    </section>

                    {/* Medical Information */}
                    <section>
                        <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">
                            4. Medical Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Child’s Doctor" />
                            <Input placeholder="Doctor’s Phone" />
                            <Textarea placeholder="Allergies / Medical Conditions" rows={2} />
                            <Textarea placeholder="Medications (if any)" rows={2} />
                            <Textarea
                                placeholder="Special Needs / Additional Support"
                                rows={2}
                                className="md:col-span-2"
                            />
                        </div>
                    </section>

                    {/* Consent & Agreements */}
                    <section>
                        <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">
                            5. Consent & Agreements
                        </h2>
                        <div className="space-y-3">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" /> I consent to my child participating in
                                all school activities, trips, and enrichment programs.
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" /> I grant permission for my child’s
                                photographs/videos to be used for school publications and social
                                media.
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" /> I understand and agree to abide by the
                                school’s rules and policies.
                            </label>
                            <div className="flex gap-4 mt-4">
                                <Input placeholder="Signature of Parent/Guardian" />
                                <Input placeholder="Date (dd/mm/yyyy)" />
                            </div>
                        </div>
                    </section>

                    {/* Office Use Only */}
                    <section className="bg-gray-50 p-4 rounded-xl shadow-inner">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            For Office Use Only
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Admission No." />
                            <Input placeholder="Date of Admission" />
                            <Input placeholder="Class Admitted To" />
                            <Input placeholder="Admission Officer’s Signature" />
                        </div>
                    </section>

                    {/* Submit */}
                    <div className="flex justify-center">
                        <Button className="px-8 py-3 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary/90">
                            Submit Admission Form
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </main>
    );
}
