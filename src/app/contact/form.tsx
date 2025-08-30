"use client";

import { UtilityService } from "@/services";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const schema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.email("Invalid email address").nonempty("Email is required"),
  subject: z.string().min(5, "Subject must be at least 5 characters long"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = z.infer<typeof schema>;

const ContactFom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitForm = async (data: FormData) => {
    setIsLoading(true);
    try {
      const res = await UtilityService.makeComplaints(data);
      toast.success("Message sent successfully!");
      setIsSuccess(true);
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  return (
    <form className="space-y-6" aria-disabled={isLoading}>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            required
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          required
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          required
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          required
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        onClick={handleSubmit(submitForm)}
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3 text-white disabled:bg-gray-500 transition-colors rounded-lg bg-primary hover:bg-primary/90"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactFom;
