"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// --- helpers: accept both "yyyy-mm-dd" and "dd/mm/yyyy"
function parseFlexibleDate(value: string) {
    if (!value) return null;
    // yyyy-mm-dd
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return new Date(value);
    // dd/mm/yyyy
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
        const [d, m, y] = value.split("/").map((x) => parseInt(x, 10));
        return new Date(y, m - 1, d);
    }
    // fallback
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
}

const admissionSchema = z.object({
    // 1) Child
    childName: z.string().min(2, "Full name is required"),
    childDOB: z
        .string()
        .refine((v) => {
            const d = parseFlexibleDate(v);
            return !!d && d < new Date();
        }, "Date of Birth must be in the past"),
    childAge: z
        .string()
        .min(1, "Age is required")
        .refine((v) => !Number.isNaN(Number(v)) && Number(v) >= 0, "Provide a valid age"),
    gender: z.enum(["male", "female"], { required_error: "Please select a gender" }),
    nationality: z.string().min(2, "Nationality is required"),
    classApplying: z
        .array(z.string())
        .min(1, "Select at least one class"),

    // 2) Father / Guardian 1
    fatherName: z.string().min(2, "Name is required"),
    fatherOccupation: z.string().optional(),
    fatherPhone: z.string().min(7, "Phone is required"),
    fatherEmail: z.string().email("Invalid email").optional().or(z.literal("").transform(() => undefined)),
    fatherAddress: z.string().min(5, "Address is required"),

    // 2) Mother / Guardian 2
    motherName: z.string().min(2, "Name is required"),
    motherOccupation: z.string().optional(),
    motherPhone: z.string().min(7, "Phone is required"),
    motherEmail: z.string().email("Invalid email").optional().or(z.literal("").transform(() => undefined)),
    motherAddress: z.string().min(5, "Address is required"),

    // 3) Emergency Contact
    emergencyName: z.string().min(2, "Name is required"),
    emergencyRelationship: z.string().min(2, "Relationship is required"),
    emergencyPhone: z.string().min(7, "Phone is required"),

    // 4) Medical
    doctorName: z.string().optional(),
    doctorPhone: z.string().optional(),
    allergies: z.string().optional(),
    medications: z.string().optional(),
    specialNeeds: z.string().optional(),

    // 5) Consents
    consentActivities: z.boolean().refine((v) => v, { message: "Required" }),
    consentMedia: z.boolean().optional(),
    consentPolicies: z.boolean().refine((v) => v, { message: "Required" }),
    consentSignature: z.string().min(2, "Signature is required"),
    consentDate: z
        .string()
        .refine((v) => {
            const d = parseFlexibleDate(v);
            return !!d && d <= new Date();
        }, "Date cannot be in the future"),

    // Office use (optional)
    admissionNo: z.string().optional(),
    dateOfAdmission: z.string().optional(),
    classAdmittedTo: z.string().optional(),
    officerSignature: z.string().optional(),
});

type AdmissionFormValues = z.infer<typeof admissionSchema>;

const FieldError = ({ message }: { message?: string }) =>
    message ? <p className="mt-1 text-sm text-red-600">{message}</p> : null;

export default function AdmissionFormPage() {
    const [submitting, setSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue,
        watch,
    } = useForm<AdmissionFormValues>({
        resolver: zodResolver(admissionSchema),
        defaultValues: {
            classApplying: [],
            consentActivities: false,
            consentMedia: false,
            consentPolicies: false,
        },
    });

    const onSubmit = async (data: AdmissionFormValues) => {
        try {
            setSubmitting(true);
            // TODO: send to your API endpoint
            // await fetch("/api/admissions", { method: "POST", body: JSON.stringify(data) });
            console.log("ADMISSION FORM SUBMITTED:", data);
            alert("Admission form submitted! We’ll contact you shortly.");
            reset();
        } catch (e) {
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    // checkbox helper for classApplying
    const selectedClasses = watch("classApplying") || [];
    const toggleClass = (value: string) => {
        const set = new Set(selectedClasses);
        set.has(value) ? set.delete(value) : set.add(value);
        setValue("classApplying", Array.from(set));
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 flex items-center justify-center py-12 px-4">
            <Card className="w-full max-w-5xl shadow-lg bg-white/90 backdrop-blur-xl">
                <CardHeader className="text-center space-y-5">
                    <CardTitle className="text-3xl font-extrabold text-primary text-center">
                        TechTots International School – Admission Form
                    </CardTitle>
                    <p className="text-lg text-gray-700 leading-relaxed bg-white p-6">
                        We’re{" "}
                        <span className="font-bold text-blue-700">excited that you’re considering TechTots{" "}</span>
                        as the place for your child’s learning journey. Our admission process is simple and supportive
                        from start to finish. Please complete the form with your child’s details and parent/guardian
                        information. We look forward to partnering with you to provide a{" "}
                        <span className="font-semibold text-blue-700">nurturing, innovative, and inspiring environment{" "}</span>
                        where your child can thrive.
                    </p>
                </CardHeader>

                <CardContent className="space-y-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                        {/* Child Information */}
                        <section>
                            <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">1. Child’s Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Input placeholder="Full Name" {...register("childName")} />
                                    <FieldError message={errors.childName?.message} />
                                </div>

                                <div>
                                    <Input placeholder="Date of Birth (dd/mm/yyyy)" {...register("childDOB")} />
                                    <FieldError message={errors.childDOB?.message} />
                                </div>

                                <div>
                                    <Input placeholder="Age" {...register("childAge")} />
                                    <FieldError message={errors.childAge?.message} />
                                </div>

                                <div>
                                    <Label>Gender</Label>
                                    <div className="flex gap-6 mt-2">
                                        <label className="flex items-center gap-2">
                                            <input type="radio" value="male" {...register("gender")} /> Male
                                        </label>
                                        <label className="flex items-center gap-2">
                                            <input type="radio" value="female" {...register("gender")} /> Female
                                        </label>
                                    </div>
                                    <FieldError message={errors.gender?.message} />
                                </div>

                                <div className="md:col-span-2">
                                    <Input placeholder="Nationality" {...register("nationality")} />
                                    <FieldError message={errors.nationality?.message} />
                                </div>

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
                                                <input
                                                    type="checkbox"
                                                    checked={selectedClasses.includes(cls)}
                                                    onChange={() => toggleClass(cls)}
                                                />
                                                {cls}
                                            </label>
                                        ))}
                                    </div>
                                    <FieldError message={errors.classApplying?.message} />
                                </div>
                            </div>
                        </section>

                        {/* Parent/Guardian Information */}
                        <section>
                            <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">2. Parent / Guardian Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Father / Guardian 1 */}
                                <div className="space-y-2">
                                    <Label>Father / Guardian 1 – Name</Label>
                                    <Input {...register("fatherName")} />
                                    <FieldError message={errors.fatherName?.message} />

                                    <Label>Occupation</Label>
                                    <Input {...register("fatherOccupation")} />

                                    <Label>Phone</Label>
                                    <Input {...register("fatherPhone")} />
                                    <FieldError message={errors.fatherPhone?.message} />

                                    <Label>Email</Label>
                                    <Input {...register("fatherEmail")} />
                                    <FieldError message={errors.fatherEmail?.message} />

                                    <Label>Address</Label>
                                    <Textarea rows={2} {...register("fatherAddress")} />
                                    <FieldError message={errors.fatherAddress?.message} />
                                </div>

                                {/* Mother / Guardian 2 */}
                                <div className="space-y-2">
                                    <Label>Mother / Guardian 2 – Name</Label>
                                    <Input {...register("motherName")} />
                                    <FieldError message={errors.motherName?.message} />

                                    <Label>Occupation</Label>
                                    <Input {...register("motherOccupation")} />

                                    <Label>Phone</Label>
                                    <Input {...register("motherPhone")} />
                                    <FieldError message={errors.motherPhone?.message} />

                                    <Label>Email</Label>
                                    <Input {...register("motherEmail")} />
                                    <FieldError message={errors.motherEmail?.message} />

                                    <Label>Address</Label>
                                    <Textarea rows={2} {...register("motherAddress")} />
                                    <FieldError message={errors.motherAddress?.message} />
                                </div>
                            </div>
                        </section>

                        {/* Emergency Contact */}
                        <section>
                            <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">
                                3. Emergency Contact (other than parents)
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <Input placeholder="Name" {...register("emergencyName")} />
                                    <FieldError message={errors.emergencyName?.message} />
                                </div>
                                <div>
                                    <Input placeholder="Relationship" {...register("emergencyRelationship")} />
                                    <FieldError message={errors.emergencyRelationship?.message} />
                                </div>
                                <div>
                                    <Input placeholder="Phone" {...register("emergencyPhone")} />
                                    <FieldError message={errors.emergencyPhone?.message} />
                                </div>
                            </div>
                        </section>

                        {/* Medical Information */}
                        <section>
                            <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">4. Medical Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input placeholder="Child’s Doctor" {...register("doctorName")} />
                                <Input placeholder="Doctor’s Phone" {...register("doctorPhone")} />
                                <Textarea placeholder="Allergies / Medical Conditions" rows={2} {...register("allergies")} />
                                <Textarea placeholder="Medications (if any)" rows={2} {...register("medications")} />
                                <Textarea
                                    placeholder="Special Needs / Additional Support"
                                    rows={2}
                                    className="md:col-span-2"
                                    {...register("specialNeeds")}
                                />
                            </div>
                        </section>

                        {/* Consent & Agreements */}
                        <section>
                            <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">5. Consent & Agreements</h2>
                            <div className="space-y-3">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" {...register("consentActivities")} /> I consent to my child participating in
                                    all school activities, trips, and enrichment programs.
                                </label>
                                <FieldError message={errors.consentActivities?.message} />

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" {...register("consentMedia")} /> I grant permission for my child’s
                                    photographs/videos to be used for school publications and social media.
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="checkbox" {...register("consentPolicies")} /> I understand and agree to abide by the
                                    school’s rules and policies.
                                </label>
                                <FieldError message={errors.consentPolicies?.message} />

                                <div className="flex gap-4 mt-4">
                                    <div className="flex-1">
                                        <Input placeholder="Signature of Parent/Guardian" {...register("consentSignature")} />
                                        <FieldError message={errors.consentSignature?.message} />
                                    </div>
                                    <div className="flex-1">
                                        <Input placeholder="Date (dd/mm/yyyy)" {...register("consentDate")} />
                                        <FieldError message={errors.consentDate?.message} />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Office Use Only */}
                        <section className="bg-gray-50 p-4 rounded-xl shadow-inner">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">For Office Use Only</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input placeholder="Admission No." {...register("admissionNo")} />
                                <Input placeholder="Date of Admission" {...register("dateOfAdmission")} />
                                <Input placeholder="Class Admitted To" {...register("classAdmittedTo")} />
                                <Input placeholder="Admission Officer’s Signature" {...register("officerSignature")} />
                            </div>
                        </section>

                        {/* Submit */}
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                disabled={submitting}
                                className="px-8 py-3 bg-primary text-white text-lg font-semibold rounded-xl hover:bg-primary/90 disabled:opacity-60"
                            >
                                {submitting ? "Submitting..." : "Submit Admission Form"}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}
