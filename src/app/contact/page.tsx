import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import ContactFom from "./form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "We'd love to hear from you. Reach out to us for any inquiries about admissions, tours, or general information.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute rounded-full top-1/4 left-10 w-72 h-72 bg-primary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute rounded-full top-1/3 right-10 w-72 h-72 bg-secondary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              <SparklesIcon className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 font-heading md:text-5xl">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Reach out to us for any inquiries about admissions, tours, or general information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPinIcon,
                title: "Location",
                content: "GG 232-3777, GRIDCO Avenue, Nr ACP Estate, Pokuase"
              },
              {
                icon: PhoneIcon,
                title: "Phone",
                content: "+233 256124133"
              },
              {
                icon: EnvelopeIcon,
                title: "Email",
                content: "admission@techtots.edu.gh"
              },
              {
                icon: ClockIcon,
                title: "Hours",
                content: "Mon-Fri: 7:30 AM - 5:30 PM"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-center text-gray-900">{item.title}</h3>
                <p className="text-center text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="p-8 transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20">
              <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">Send us a Message</h2>
              <ContactFom />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 