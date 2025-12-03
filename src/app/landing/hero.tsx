import HeaderTag from "@/components/ui/header-tag";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CpuChipIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import img from "next/image";
import heroStyle from "./hero.module.css";

type HeroType = "default" | "overlay" | "side";
interface HeroProps {
  variant?: HeroType;
}

const LandingHeroSection: React.FC<HeroProps> = ({ variant = "default" }) => {
  switch (variant) {
    case "default":
      return (
        <section
          id="hero"
          aria-label="hero-section"
          className="flex flex-col max-md:gap-8 items-center justify-center max-md:py-5 py-20 lg:pb-5 xl:h-5/6 overflow-hidden"
        >
          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
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
                <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-gray-900 font-heading md:text-6xl lg:text-7xl">
                  Africa's Most Forward-Thinking
                  <span className="block mt-2 gradient-text">
                    Early Childhood Institution & Primary Institution
                  </span>
                </h1>

                {/* Enhanced Description */}
                <p className="max-w-2xl mx-auto text-xl text-gray-600 md:text-2xl">
                  Where innovation meets education. Ghana's pioneering
                  institution combining Cambridge Curriculum and Reggio Emilia
                  principles with AI-powered learning.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Link
                  href="/application"
                  className="px-8 py-4 text-lg group btn btn-primary"
                >
                  <span className="flex items-center gap-2">
                    Apply Now
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  href="/get-started/schedule-tour"
                  className="px-8 py-4 text-lg group btn btn-secondary"
                >
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
              { label: "Success Rate", value: "98%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105"
              >
                <div className="mb-2 text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      );
    case "overlay":
      return (
        <section
          id="hero"
          aria-label="hero-section"
          className="flex flex-col max-md:gap-8 items-center justify-center max-md:py-5 py-20 lg:pb-5 xl:h-5/6 overflow-hidden"
        >

          <img
            src="/images/kids-with-computer.png"
            alt="Hero"
            className="object-cover"
            fetchPriority="high"
          />
          <div className="absolute w-full top-0 h-full bg-black/60 z-10" ></div>

          {/* Enhanced Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute w-16 h-16 top-1/4 2xl:top-[10%] right-1/4 animate-float">
              <CpuChipIcon className="w-full h-full text-beige" />
            </div>
            <div className="absolute w-12 h-12 bottom-1/4 left-1/4 animate-float animation-delay-2000">
              <PaintBrushIcon className="w-full h-full text-white" />
            </div>
            <div className="absolute top-1/2 right-1/3 w-14 h-14 animate-float animation-delay-4000">
              <GlobeAltIcon className="w-full h-full text-beige" />
            </div>
          </div>

          <div className="container relative z-50 my-auto space-y-12">
            <div className="col-span-full lg:col-span-2 max-w-6xl mx-auto space-y-20 text-center">
              {/* Top Section */}
              <div className="space-y-9">
                {/* Enhanced Badge */}
                <HeaderTag
                  title="Now Enrolling for September 2025"
                  className="text-white"
                />

                {/* Enhanced Heading */}
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white font-heading md:text-6xl lg:text-7xl">
                  {/* Africa's Most Forward-Thinking */}
                  <span className="block mt-2 gradient-text">
                    Early Childhood Institution
                  </span>
                </h1>

                {/* Enhanced Description */}
                <p className="max-w-2xl mx-auto text-lg text-gray-200 md:text-2xl">
                  Where innovation meets education. Ghana's pioneering
                  institution combining Cambridge Curriculum and Reggio Emilia
                  principles with AI-powered learning.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <Link
                  href="/application"
                  className="max-sm:px-4 max-md:py-3 px-8 py-4 text-base sm:text-lg group btn btn-primary"
                >
                  <span className="flex items-center gap-2">
                    Apply Now
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  href="/get-started/schedule-tour"
                  className="max-sm:px-4 max-md:py-3 px-8 py-4 text-base sm:text-lg group btn btn-secondary"
                >
                  <span className="flex items-center gap-2">
                    Schedule a Tour
                    <ChevronDownIcon className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                  </span>
                </Link>
              </div>

              {/* Stats Section */}
            </div>
            <div className="col-span-full lg:col-span-1"></div>
          </div>

          <div className="grid max-w-3xl grid-cols-4 gap-5 mt-auto mb-10 md:grid-cols-4 z-20">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Students", value: "500+" },
              { label: "Teachers", value: "50+" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transition-transform hover:scale-105"
              >
                <div className="mb-1 text-base md:text-xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      );

    case "side":
      return (
        <section
          id="hero"
          aria-label="hero-section"
          className="relative w-full h-full xl:h-[calc(100vh-180px)] flex flex-col items-center gap-10 md:items-start overflow-hidden bg-white py-12 xl:py-20"
        >
          <div className="flex items-center gap-2 px-4 py-2 mx-auto text-sm font-medium transition-colors rounded-full bg-primary/10 text-primary hover:bg-primary/20 w-fit">
            <SparklesIcon className="w-4 h-4" />
            <span>Now Enrolling for January 2026</span>
          </div>

          <div className="relative container my-auto mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10">
            {/* Left Content */}
            <div className="w-full flex flex-col justify-center gap-8 max-w-2xl lg:max-w-3xl text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight md:leading-[1.2] text-gray-900 font-heading">
                Africa's Most <span className="font-bolds">Forward-Thinking</span>
                <span className="block mt-2 gradient-text">
                  Early Childhood & Primary Institution
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 lg:max-w-xl">
                Where innovation meets education. Ghana's pioneering institution
                combining Cambridge Curriculum and Reggio Emilia principles with
                AI-powered learning.
              </p>

              <div className="container gap-8 mt-auto mb-20 grid-cols-4 hidden">
                {[
                  { label: "Years Experience", value: "10+" },
                  { label: "Students", value: "500+" },
                  { label: "Teachers", value: "50+" },
                  { label: "Success Rate", value: "98%" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center transition-all rounded-lg"
                  >
                    <div className="text-base md:text-xl font-bold text-primary text-center">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 text-center">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Partners / Affiliation Logos */}
              <div className="w-full mt-10 flex justify-center custom-wrapper" style={{ marginTop: "-20px", width: "100%" }}>
                <div className="flex items-center justify-center gap-6 sm:gap-10" style={{ width: "90%" }}>

                  <img
                    src="/images/britishcouncil.png"
                    alt="British Council"
                    className="
                    h-12 sm:h-16 w-auto
                    object-contain
                    mr-auto
                    filter grayscale brightness-200
                    transition-all duration-300
                    hover:grayscale-0 hover:brightness-100
                  "

                    style={{ float: "left" }}
                  />

                  <img
                    src="/images/cambridge.png"
                    alt="Cambridge"
                    className="
                    h-12 sm:h-16 w-auto
                        object-contain
                        mr-auto
                    filter grayscale brightness-200
                    transition-all duration-300
                    hover:grayscale-0 hover:brightness-100
                  "
                  />

                </div>


              </div>


              <div className="flex flex-wrap gap-4 w-full">
                <Link
                  href="/application"
                  className="w-full md:flex-1 px-8 py-4 text-lg group btn btn-primary flex justify-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>

                <Link
                  href="/get-started/schedule-tour"
                  className="w-full md:flex-1 px-8 py-4 text-lg group btn btn-secondary flex justify-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Schedule a Tour
                    <ChevronDownIcon className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                  </span>
                </Link>
              </div>




            </div>

            {/* Right img */}
            <div className="hidden w-full lg:flex justify-end items-center relative">
              <svg
                className="absolute -z-10 -top-1/2 left-0 w-[130%] opacity-20 text-blue-300"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M39.4,-62.6C51.7,-54.9,62.4,-43.6,66.1,-30.6C69.8,-17.5,66.4,-2.7,62.2,10.8C58,24.3,52.9,36.6,44.5,47.6C36,58.6,24.2,68.3,9.9,71.3C-4.4,74.3,-21.3,70.5,-33.1,61.1C-44.9,51.7,-51.6,36.6,-58.3,21.9C-64.9,7.1,-71.4,-7.3,-67.3,-19.6C-63.2,-31.8,-48.5,-42,-34.4,-50.1C-20.2,-58.3,-10.1,-64.4,2.5,-68.3C15.2,-72.3,30.4,-74.3,39.4,-62.6Z"
                  transform="translate(100 100)"
                />
              </svg>
              <div className="relative w-full max-w-sm aspect-[1.5] float justify-self-end flex flex-col items-center justify-center bg-[#e9f3ff] rounded-3xl">
                <div className="rounded-3xl shadow-xl border-4 border-white overflow-hidden">
                  <img
                    src={"/images/techtots-kids.png"}
                    alt="kids in IT lab"
                    fetchPriority="high"
                    className="rounded-3xl aspect-square object-center object-contain scale-[1.15]"

                  />
                </div>

                {/* Floating icons */}
                <div className="absolute -top-10 -left-10 animate-float">
                  <CpuChipIcon className="w-10 h-10 text-primary/70" />
                </div>
                <div className="absolute -bottom-8 -right-8 animate-float animation-delay-2000">
                  <PaintBrushIcon className="w-8 h-8 text-secondary" />
                </div>
                <div className="absolute -bottom-8 -left-10 animate-float animation-delay-4000">
                  <GlobeAltIcon className="w-9 h-9 text-accent" />
                </div>
              </div>
            </div>
          </div>

          <div className="container hidden mx-auto lg:max-w-2xl gap-8 mt-auto mb-20 grid-cols-4">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Students", value: "500+" },
              { label: "Teachers", value: "50+" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transition-all rounded-lg bg-white/50 backdrop-blur-sm hover:scale-105"
              >
                <div className="text-base md:text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      );
  }
};

export default LandingHeroSection;
