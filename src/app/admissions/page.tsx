import AnimatedWave from "@/components/Wave";
import {
  SparklesIcon,
  UserGroupIcon,
  CalendarIcon,
  DocumentTextIcon,
  CreditCardIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Begin your child's journey towards a future of innovation and excellence at TechTots International School. Explore our admissions process, age eligibility, and tuition details.",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-20 min-h-96 h-full overflow-hidden bg-[url('/images/campus.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-flex bg-white/30 items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/40">
              <SparklesIcon className="size-4 text-white" />
              <span className="text-white">Now Enrolling for September 2025</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white font-heading md:text-5xl">
              Enroll Your Child at <span>TechTots</span>
            </h1>
            <p className="text-xl text-white/90">
              Begin your child's journey towards a future of innovation and
              excellence
            </p>
          </div>
        </div>
      </section>
      {/* <AnimatedWave className="fill-secondary w-full" /> */}

      {/* Application Steps Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading">
              Application Process
            </h2>
            <p className="text-gray-600">
              Follow these simple steps to secure your child's place at TechTots
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: DocumentTextIcon,
                title: "Step 1",
                description: "Fill Online Application Form",
              },
              {
                icon: CreditCardIcon,
                title: "Step 2",
                description: "Pay Assessment Fee",
              },
              {
                icon: UserGroupIcon,
                title: "Step 3",
                description: "Attend Parent & Child Tour",
              },
              {
                icon: SparklesIcon,
                title: "Step 4",
                description: "Secure Placement",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="overflow-hidden hover:scale-105 transition-all duration-500"
              >
                <AnimatedWave className="fill-slate-200 w-full rotate-180 translate-y-1 h-10" />
                <div className="p-6 backdrop-blur-sm bg-slate-200">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-center text-black">
                    {step.title}
                  </h3>
                  <p className="text-center text-gray-800">
                    {step.description}
                  </p>
                </div>
                <AnimatedWave className="fill-slate-200 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Eligibility Section */}
      <AnimatedWave className="fill-secondary w-full rotate-180" />
      <section className="relative py-20 bg-secondary to-background">
        <div className="container">
          <div className="max-w-5xl mx-auto pseudo-rotate rounded-xl">
            <div
              className="p-12 transition-all border rounded-lg 
            bg-white border-accent/20 shadow-2xl space-y-10"
            >
              <h2 className="text-2xl font-bold text-center text-gray-900">
                Age Eligibility
              </h2>
              <div className="grid gap-6 md:grid-cols-4">
                {[
                  {
                    program: "Crèche",
                    ageRange: "6 months - 2 years",
                    icon: UserGroupIcon,
                  },
                  {
                    program: "Early Year Preparatory",
                    ageRange: "2 - 3 years",
                    icon: CalendarIcon,
                  },
                  {
                    program: "Cambridge Early Year",
                    ageRange: "3-6 years",
                    icon: ClockIcon,
                  },
                  {
                    program: "Cambridge Primary",
                    ageRange: "6+ years",
                    icon: ClockIcon,
                  },
                ].map((program, index) => (
                  <div
                    key={index}
                    className="p-5 text-center transition-transform rounded-lg 
                  border backdrop-blur-sm hover:scale-105 space-y-5"
                  >
                    <div className="flex items-center justify-center size-12 mx-auto rounded-full bg-primary/10">
                      <program.icon className="size-6 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {program.program}
                    </h3>
                    <p className="text-gray-500">{program.ageRange}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Section */}
      <section className="relative py-20 overflow-hidden bg-slate-100 hidden">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 transition-transform border rounded-lg bg-white border-accent/20">
              <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">
                Tuition & Fees
              </h2>
              <p className="mb-8 text-center text-gray-600">
                Our tuition reflects the premium nature of the learning
                experience and the extensive resources available to every child.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { program: "Crèche", fee: "Contact for Details" },
                  { program: "Nursery", fee: "Contact for Details" },
                  { program: "KG", fee: "Contact for Details" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 text-center transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105"
                  >
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {item.program}
                    </h3>
                    <p className="text-primary">{item.fee}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Payment plans available. Early Bird discounts for first 20
                  enrollments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading">
              Ready to Begin Your Journey?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Take the first step towards your child's future at TechTots
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/application"
                className="px-8 py-4 text-lg font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary/90"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="px-8 py-4 text-lg font-medium transition-colors rounded-lg border border-primary text-primary hover:bg-primary/10"
              >
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
