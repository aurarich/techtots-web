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
import AnimatedWave from "@/components/Wave";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      {/* <LandingHeroSection /> */}
      <section className="flex flex-col max-md:gap-8 items-center justify-center max-md:py-5 py-20 pt-40 lg:pb-5 xl:h-5/6 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute rounded-full top-1/4 left-10 w-72 h-72 bg-primary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute rounded-full top-1/3 right-10 w-72 h-72 bg-secondary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute rounded-full -bottom-8 left-20 w-72 h-72 bg-accent/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            {/* New floating elements */}
            <div className="absolute w-16 h-16 top-1/4 2xl:top-[15%] right-1/4 animate-float">
              <CpuChipIcon className="w-full h-full text-primary/20" />
            </div>
            <div className="absolute w-12 h-12 bottom-1/4 left-1/4 animate-float animation-delay-2000">
              <PaintBrushIcon className="w-full h-full text-secondary/30" />
            </div>
            <div className="absolute top-1/2 right-1/3 w-14 h-14 animate-float animation-delay-4000">
              <GlobeAltIcon className="w-full h-full text-accent/30" />
            </div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto space-y-16 text-center">
              {/* Top Section */}
              <div className="space-y-6">
                {/* Enhanced Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                  <SparklesIcon className="w-4 h-4" />
                  <span>Now Enrolling for September 2025</span>
                </div>

                {/* Enhanced Heading */}
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 font-heading md:text-6xl lg:text-7xl">
                  Africa's Most Forward-Thinking
                  <span className="block mt-2 gradient-text">Early Childhood Institution</span>
                </h1>

                {/* Enhanced Description */}
                <p className="max-w-2xl mx-auto text-xl text-gray-600 md:text-2xl">
                  Where innovation meets education. Ghana's pioneering institution combining Cambridge Curriculum and Reggio Emilia principles with AI-powered learning.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Link href="/admissions" className="px-8 py-4 text-lg group btn btn-primary">
                  <span className="flex items-center gap-2">
                    Apply Now
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link href="/tour" className="px-8 py-4 text-lg group btn btn-secondary">
                  <span className="flex items-center gap-2">
                    Schedule a Tour
                    <ChevronDownIcon className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                  </span>
                </Link>
              </div>

              {/* Stats Section */}
            </div>
          </div>
              <div className="absolute bottom-0 grid max-w-3xl grid-cols-2 gap-8 mx-auto mt-auto mb-20 md:grid-cols-4">
                {[
                  { label: "Years Experience", value: "10+" },
                  { label: "Students", value: "500+" },
                  { label: "Teachers", value: "50+" },
                  { label: "Success Rate", value: "98%" }
                ].map((stat, index) => (
                  <div key={index} className="text-center transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105">
                    <div className="mb-2 text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
        </section>

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
      <section className="relative overflow-hidden section bg-white">

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
                  className="p-6 transition-transform border rounded-lg bg-primary backdrop-blur-ssm border-accent/20 hover:scale-105 btn space-y-6"
                >
                  <h3 className="text-lg font-semibold text-center text-white leading-[1.2]">
                    {partner.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
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
      <div className="bg-white">
        <AnimatedWave className="rotate-180 w-screen fill-beige" />
      </div>
      <section className="relative overflow-hidden section bg-beige pt-10">
              {/* <div className="absolute w-full top-0 h-full bg-gradient-to-b from-primary to-primary/40 z-10"></div> */}
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold text-white font-heading md:text-5xl">
              Join Our Community
            </h2>
            <p className="mb-8 text-xl text-white">
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
