import Link from "next/link";
import {
  AcademicCapIcon,
  CpuChipIcon,
  GlobeAltIcon,
  BeakerIcon,
  PaintBrushIcon,
  UserGroupIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  SparklesIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import LandingHeroSection from "./landing/hero";
import ParentTestimonialSection from "./landing/parents";
import WhyChooseUsSection from "./landing/why-choose-us";
import OurProgrammes from "./landing/our-programs";
import TechInnovationSection from "./landing/tech_innovation";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <LandingHeroSection />

      {/* Testimonials Section */}
      <ParentTestimonialSection />

      {/* Features Section */}
      <WhyChooseUsSection />

      {/* Programs Section */}
      <OurProgrammes />

      {/* Technology Section */}
      <TechInnovationSection />

      {/* Our Campus Section */}
      <section className="relative overflow-hidden section bg-gradient-to-b from-[#F5F5DC]/30 to-[#0EA5E9]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#F5F5DC]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#0EA5E9]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F5F5DC]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#0EA5E9]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 font-heading md:text-4xl">
              Our Campus
            </h2>
            <p className="mb-12 text-xl text-gray-600">
              Located in the heart of Pokuase's rapidly developing suburb, our
              purpose-built campus is designed for optimal learning and
              development
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Learning Spaces",
                  features: [
                    "Bright, Spacious Classrooms",
                    "Digital Learning Hubs",
                    "Reading & Storytelling Corners",
                  ],
                },
                {
                  title: "Play & Recreation",
                  features: [
                    "Outdoor Nature Playground",
                    "Music & Movement Studio",
                    "Sensory Play Areas",
                  ],
                },
                {
                  title: "Care Facilities",
                  features: [
                    "Crèche Nap Rooms",
                    "Health Bay",
                    "Secure Environment",
                  ],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="p-6 transition-transform border rounded-lg bg-white backdrop-blur-sm border-accent/20 hover:scale-105"
                >
                  <h3 className="mb-4 text-xl font-bold text-center text-gray-900">
                    {category.title}
                  </h3>
                  <ul className="space-y-3 col-span-1">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <SparklesIcon className="w-4 h-4 text-primary" />
                        <span className="text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/tour"
                className="btn transition-all inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white rounded-lg btn-primary"
              >
                Schedule a Tour
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="relative overflow-hidden section bg-gradient-to-b from-[#0EA5E9]/10 to-[#F5F5DC]/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#0EA5E9]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#F5F5DC]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#0EA5E9]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#F5F5DC]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 font-heading md:text-4xl">
              Partner With Us
            </h2>
            <p className="mb-12 text-xl text-gray-600">
              We're open to partnerships in various areas to enhance our
              educational offerings
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Edtech",
                  description:
                    "Technology solutions for early childhood education",
                },
                {
                  title: "Educational Publishing",
                  description: "Curriculum materials and learning resources",
                },
                {
                  title: "Corporate CSR",
                  description: "Corporate social responsibility programs",
                },
                {
                  title: "Internships",
                  description: "Internship and volunteering opportunities",
                },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="p-6 transition-transform border rounded-lg bg-white backdrop-blur-ssm border-accent/20 hover:scale-105"
                >
                  <h3 className="mb-2 text-xl font-bold text-center text-gray-900">
                    {partner.title}
                  </h3>
                  <p className="text-center text-gray-600">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white rounded-lg btn btn-primary"
              >
                Get in Touch
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden section bg-gradient-to-br from-[#0EA5E9]/20 to-[#F5F5DC]/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0EA5E9]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5F5DC]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Join Our Community
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Take the first step towards your child's future in technology and
              innovation.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link
                href="/admissions"
                className="px-8 py-4 text-lg btn btn-primary"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 text-lg btn btn-secondary"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
