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
      <Card className="w-full max-w-4xl shadow-xl bg-white/90 backdrop-blur-xl border-none">
        <CardHeader className="text-center space-y-5">
          <CardTitle className="text-3xl font-extrabold text-primary text-center" style={{  color: "#27455c" }}>
            Admission Form
          </CardTitle>
          <p className="text-lg text-gray-700 leading-relaxed bg-white p-6">
            We’re{" "}
            <span className="font-bold text-blue-700" style={{  color: "#123" }}>
              excited that you’re considering TechTots{" "}
            </span>
            as the place for your child’s learning journey. Our admission
            process is simple and supportive from start to finish. Please
            complete the form with your child’s details and parent/guardian
            information. We look forward to partnering with you to provide a{" "}
            <span className="font-semibold text-blue-700" style={{  color: "#123" }}>
              nurturing, innovative, and inspiring environment{" "}
            </span>
            where your child can thrive.
          </p>
        </CardHeader>
        <CardContent className="p-0" style={{  marginTop: "-10px" }}>
          <iframe
            src="https://app.schoolrobot.net/tech-tots/admissions.php"
            className="w-full h-[100%] min-h-[1500px] md:min-h-[1800px] lg:min-h-[2400px] border-none rounded-b-xl"
          />
        </CardContent>
      </Card>
    </main>
  );

}