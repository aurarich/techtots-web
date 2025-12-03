"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdmissionService } from "@/services";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CircleCheckBig, Radio } from "lucide-react";
import { calculateAge } from "@/lib/utils";


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
  childFullName: z.string().min(2, "Full name is required"),
  childDOB: z.string().refine((v) => {
    const d = parseFlexibleDate(v);
    return !!d && d < new Date();
  }, "Date of Birth must be in the past"),
  childAge: z.number().optional(),
  gender: z.enum(["male", "female"], { error: "Gender is required" }),
  nationality: z.string().min(2, "Nationality is required"),
  programme: z.string().min(1, "Select at least one class"),

  // NEW: Child photo (optional, with type/size validation)
  childPhoto: z
    .any()
    .transform((files: FileList | undefined) =>
      files && files.length ? files[0] : undefined
    )
    .refine(
      (file) =>
        !file || ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Photo must be a JPG, PNG, or WEBP"
    )
    .refine(
      (file) => !file || file.size <= 3 * 1024 * 1024,
      "Photo must be 3MB or smaller"
    )
    .optional(),

  // 2) Father / Guardian 1
  fatherName: z.string().min(2, "Name is required"),
  fatherOccupation: z.string().optional(),
  fatherPhone: z.string().min(7, "Phone is required"),
  fatherEmail: z
    .email("Invalid email")
    .optional()
    .or(z.literal("").transform(() => undefined)),
  fatherAddress: z.string().min(5, "Address is required"),

  // 2) Mother / Guardian 2
  motherName: z.string().min(2, "Name is required"),
  motherOccupation: z.string().optional(),
  motherPhone: z.string().min(7, "Phone is required"),
  motherEmail: z
    .email("Invalid email")
    .optional()
    .or(z.literal("").transform(() => undefined)),
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
  consentDate: z.string().refine((v) => {
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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
    };
  }, [photoPreview]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
  });

  const handleFormSubmit = async (data: AdmissionFormValues) => {
    // Calculate the age from the DOB
    data.childAge = calculateAge(data.childDOB);

    try {
      setIsLoading(true);
      const res = await AdmissionService.apply(data);
      setIsSuccess(true);
      toast.success(
        "Application submitted successfully! We'll be in touch soon."
      );
      reset();
    } catch (error) {
      toast.error(
        "There was an error submitting your request. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-100 flex items-center justify-center py-12 px-4">
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
              Your application has been submitted successfully. Our admissions
              team will review your application and follow up with the next
              process.
            </p>
            <div className="mt-6 text-center">
              <Button
                type="button"
                disabled={isLoading}
                onClick={() => setIsSuccess(false)}
                className="w-full md:w-2/3 lg:w-1/2 mx-auto btn btn-primary text-lg font-semibold p-6 px-12 text-white disabled:bg-slate-500"
              >
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
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
              as the place for your child’s learning journey. Our admission
              process is simple and supportive from start to finish. Please
              complete the form with your child’s details and parent/guardian
              information. We look forward to partnering with you to provide a{" "}
              <span className="font-semibold text-blue-700">
                nurturing, innovative, and inspiring environment{" "}
              </span>
              where your child can thrive.
            </p>
          </CardHeader>

          <CardContent className="space-y-10">
            <form className="space-y-10">
              {/* Child Information */}
              <section>
                <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">
                  1. Child’s Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8">
                  <div>
                    <Input placeholder="Full Name" {...register("childFullName")} />
                    <FieldError message={errors.childFullName?.message} />
                  </div>

                  <div>
                    <Input
                      placeholder="Date of Birth (dd/mm/yyyy)"
                      type="date"
                      {...register("childDOB")}
                    />
                    <FieldError message={errors.childDOB?.message} />
                  </div>

                  <div>
                    <Input
                      placeholder="Nationality"
                      {...register("nationality")}
                    />
                    <FieldError message={errors.nationality?.message} />
                  </div>

                  <div className="my-auto space-y-1">
                    <div className="flex items-center gap-6">
                      <Label>Gender</Label>
                      <RadioGroup
                        onValueChange={(val) => setValue("gender", val as any, { shouldValidate: true, shouldTouch: true })}
                      >
                        <div className="flex items-center gap-5">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="male" id="gender-male" />
                            <Label htmlFor="gender-male">Male</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="female" id="gender-female" />
                            <Label htmlFor="gender-female">Female</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                    <FieldError message={errors.gender?.message} />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label>Programme</Label>
                    <RadioGroup
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2"
                      onValueChange={(val) => setValue("programme", val, { shouldValidate: true, shouldTouch: true })}
                    >
                      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2 text-sm"> */}
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
                        <div key={cls} className="flex items-center gap-2">
                          <RadioGroupItem value={cls} id={cls.split("(")[0]} />
                          <Label htmlFor={cls.split("(")[0]}>{cls}</Label>
                        </div>
                      ))}
                      {/* </div> */}
                    </RadioGroup>

                    <FieldError message={errors.programme?.message} />
                  </div>

                  {/* NEW: Child Photo upload + preview */}
                  <div className="md:col-span-2">
                    <Label className="block mb-2">
                      Child’s Photo (JPG/PNG/WEBP, max 3MB)
                    </Label>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("childPhoto")}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        // Let RHF keep the file via register; we only manage preview
                        if (file) {
                          if (photoPreview) URL.revokeObjectURL(photoPreview);
                          setPhotoPreview(URL.createObjectURL(file));
                        } else {
                          if (photoPreview) URL.revokeObjectURL(photoPreview);
                          setPhotoPreview(null);
                        }
                      }}
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    <FieldError
                      message={errors.childPhoto?.message as string | undefined}
                    />

                    {photoPreview && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 mb-2">Preview:</p>
                        <img
                          src={photoPreview}
                          alt="Child preview"
                          className="h-36 w-36 object-cover rounded-xl border border-gray-200 shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setValue("childPhoto", undefined as any);
                            if (photoPreview) URL.revokeObjectURL(photoPreview);
                            setPhotoPreview(null);
                          }}
                          className="mt-3 inline-flex items-center px-3 py-1.5 rounded-lg text-sm bg-gray-100 hover:bg-gray-200"
                        >
                          Remove photo
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Parent/Guardian Information */}
              <section>
                <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">
                  2. Parent / Guardian Information
                </h2>
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
                    <Input
                      placeholder="Relationship"
                      {...register("emergencyRelationship")}
                    />
                    <FieldError
                      message={errors.emergencyRelationship?.message}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Phone"
                      {...register("emergencyPhone")}
                    />
                    <FieldError message={errors.emergencyPhone?.message} />
                  </div>
                </div>
              </section>

              {/* Medical Information */}
              <section>
                <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">
                  4. Medical Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Child’s Doctor"
                    {...register("doctorName")}
                  />
                  <Input
                    placeholder="Doctor’s Phone"
                    {...register("doctorPhone")}
                  />
                  <Textarea
                    placeholder="Allergies / Medical Conditions"
                    rows={2}
                    {...register("allergies")}
                  />
                  <Textarea
                    placeholder="Medications (if any)"
                    rows={2}
                    {...register("medications")}
                  />
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
                <h2 className="text-lg font-semibold text-[#0ea5e9] mb-4">
                  5. Consent & Agreements
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...register("consentActivities")} />{" "}
                    I consent to my child participating in all school
                    activities, trips, and enrichment programs.
                  </label>
                  <FieldError message={errors.consentActivities?.message} />

                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...register("consentMedia")} /> I
                    grant permission for my child’s photographs/videos to be
                    used for school publications and social media.
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...register("consentPolicies")} /> I
                    understand and agree to abide by the school’s rules and
                    policies.
                  </label>
                  <FieldError message={errors.consentPolicies?.message} />

                  <div className="flex gap-4 mt-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Full name of Parent/Guardian as signature"
                        {...register("consentSignature")}
                      />
                      <FieldError message={errors.consentSignature?.message} />
                    </div>
                    <div className="flex-1">
                      <Input
                      type="date"
                        placeholder="Date (dd/mm/yyyy)"
                        {...register("consentDate")}
                      />
                      <FieldError message={errors.consentDate?.message} />
                    </div>
                  </div>
                </div>
              </section>

              {/* Submit */}
              <div className="flex justify-center">
                <Button
                  type="button"
                  disabled={isLoading}
                  onClick={handleSubmit(handleFormSubmit)}
                  className="w-full md:w-2/3 lg:w-1/2 mx-auto btn btn-primary text-lg font-semibold p-6 px-12 text-white disabled:bg-slate-500"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </main>
  );
}

