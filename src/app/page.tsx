import Link from "next/link";
import {
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import WhyChooseUsSection from "./landing/why-choose-us";
import OurProgrammes from "./landing/our-programs";
import TechInnovationSection from "./landing/tech_innovation";
import AnimatedWave from "@/components/Wave";
import LandingHeroSection from "./landing/hero";

function SummerSchoolFab() {
  return (
    <Link
      href="/summer-school"
      aria-label="Open Summer School page"
      className="group fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-orange-400/40 blur-xl animate-pulse" />

        <div className="relative flex items-center gap-3 rounded-full bg-gradient-to-r from-[#113b5c] via-[#1c5b8f] to-[#4da8da] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:px-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <SparklesIcon className="h-5 w-5" />
          </div>

          <div className="hidden sm:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
              Limited Slots
            </p>
            <p className="text-sm font-bold leading-none">
              Summer School 2026
            </p>
          </div>

          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        <span className="absolute -right-1 -top-2 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75 animate-ping" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-yellow-400" />
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  const campusCategories = [
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
        "Crèche Nap Zones",
        "Well Equipped First Aid",
        "Secure Environment",
      ],
    },
  ];

  const partnershipAreas = [
    {
      title: "Edtech",
      description: "Technology solutions for early childhood education",
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
  ];

  return (
    <>
      <LandingHeroSection variant="side" />
      <SummerSchoolFab />

      <WhyChooseUsSection />
      <OurProgrammes />
      <TechInnovationSection />

      <div className="relative rotate-180 bg-white">
        <AnimatedWave
          className="w-full"
          style={{ fill: "url(#waveGradient)" }}
        />
        <svg width="0" height="0" aria-hidden="true">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d3e4ea" />
              <stop offset="50%" stopColor="#a2c3d1" />
              <stop offset="100%" stopColor="#7ca7bc" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <section className="relative overflow-hidden bg-[url('https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg')] bg-cover bg-top bg-fixed bg-no-repeat pt-10">
        <div className="absolute top-0 z-10 h-full w-full bg-gradient-to-b from-[#d3e4ea]/95 via-[#a2c3d1]/95 to-[#7ca7bc]/50" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-blob rounded-full bg-[#F5F5DC]/20 blur-3xl mix-blend-multiply filter" />
          <div className="animation-delay-2000 absolute right-1/4 top-1/3 h-64 w-64 animate-blob rounded-full bg-[#0EA5E9]/20 blur-3xl mix-blend-multiply filter" />
        </div>

        <div className="container relative z-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 font-heading md:text-4xl">
              Our Campus
            </h2>

            <p className="mb-12 text-xl text-gray-600">
              Located in the heart of Pokuase&apos;s rapidly developing suburb,
              our purpose-built campus is designed for optimal learning and
              development.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {campusCategories.map((category) => (
                <div
                  key={category.title}
                  className="group space-y-5 rounded-lg border border-accent/20 bg-white p-6 backdrop-blur-sm transition-all hover:bg-primary hover:text-white"
                >
                  <h3 className="text-center text-xl font-bold text-gray-900 transition-all group-hover:text-white">
                    {category.title}
                  </h3>

                  <ul className="space-y-3">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <SparklesIcon className="h-4 w-4 text-primary transition-all group-hover:text-white/80" />
                        <span className="text-left transition-all">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/get-started/schedule-tour"
                className="btn btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white transition-all"
              >
                Schedule a Tour
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white section">
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 font-heading md:text-4xl">
              Partner With Us
            </h2>

            <p className="mb-12 text-xl text-gray-600">
              We&apos;re open to partnerships in various areas to enhance our
              educational offerings.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {partnershipAreas.map((partner) => (
                <div
                  key={partner.title}
                  className="btn relative space-y-5 rounded-lg border border-accent/20 bg-gray-200 p-6 backdrop-blur-ssm transition-transform hover:scale-105"
                >
                  <h3 className="text-center text-lg font-semibold leading-[1.2] text-black">
                    {partner.title}
                  </h3>
                  <p className="text-sm text-gray-700">{partner.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="btn btn-primary inline-flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-medium text-white"
              >
                Get in Touch
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <AnimatedWave className="w-screen rotate-180 fill-beige" />
      </div>

      <section className="relative overflow-hidden bg-beige pt-10 section">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-white font-heading md:text-5xl">
              Join Our Community
            </h2>

            <p className="mb-8 text-xl text-white">
              Take the first step towards your child&apos;s future in
              technology and innovation.
            </p>

            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link href="/application" className="btn btn-primary px-8 py-4 text-lg">
                Apply Now
              </Link>

              <Link
                href="/get-started/schedule-tour"
                className="btn btn-secondary px-8 py-4 text-lg"
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