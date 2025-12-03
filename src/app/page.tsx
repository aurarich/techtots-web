import Link from "next/link";
import {
  CpuChipIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  SparklesIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import ParentTestimonialSection from "./landing/parents";
import WhyChooseUsSection from "./landing/why-choose-us";
import OurProgrammes from "./landing/our-programs";
import TechInnovationSection from "./landing/tech_innovation";
import AnimatedWave from "@/components/Wave";
import LandingHeroSection from "./landing/hero";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <LandingHeroSection variant="side" />
      

      {/* Testimonials Section */}
      {/* <ParentTestimonialSection /> */}

      {/* Features Section */}
      <WhyChooseUsSection />

      {/* Programs Section */}
      <OurProgrammes />

      {/* Technology Section */}
      <TechInnovationSection />

      {/* Our Campus Section */}

       <div className="bg-white rotate-180 relative">
        <AnimatedWave
          className="w-full"
          style={{ fill: "url(#waveGradient)" }}
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d3e4ea" />   {/* very light tint */}
              <stop offset="50%" stopColor="#a2c3d1" />  {/* light shade */}
              <stop offset="100%" stopColor="#7ca7bc" /> {/* base color */}
            </linearGradient>
          </defs>
        </svg>
      </div>
       <section className="relative overflow-hidden section bg-[url('https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg')] bg-top bg-cover bg-fixed bg-no-repeat pt-10">
        {/* <div className="absolute w-full top-0 h-full bg-gradient-to-b from-[#d3e4ea] via-[#a2c3d1] to-[#7ca7bc] z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#F5F5DC]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#0EA5E9]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" /> */}
      <div className="absolute w-full top-0 h-full bg-gradient-to-b from-[#d3e4ea]/95 via-[#a2c3d1]/95 to-[#7ca7bc]/50 z-10"></div>


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
                    "Crèche Nap Zones",
                    "Well Equipped First Aid",
                    "Secure Environment",
                  ],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="p-6 transition-all group border rounded-lg bg-white backdrop-blur-sm border-accent/20 hover:bg-primary hover:text-white space-y-5"
                >
                  <h3 className="text-xl transition-all font-bold text-center text-gray-900 group-hover:text-white">
                    {category.title}
                  </h3>
                  <ul className="space-y-3 col-span-1">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <SparklesIcon className="w-4 h-4 text-primary group-hover:text-white/80 transition-all" />
                        <span className="text-left transition-all">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/get-started/schedule-tour"
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
          <div className="max-w-5xl mx-auto text-center">
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
                  className="relative p-6 transition-transform border rounded-lg bg-gray-200 backdrop-blur-ssm border-accent/20 hover:scale-105 btn space-y-5"
                >
                  {/* <img className src="" alt="" /> */}
                  <h3 className="text-lg font-semibold text-center text-black leading-[1.2]">
                    {partner.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
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
                href="/application"
                className="px-8 py-4 text-lg btn btn-primary"
              >
                Apply Now
              </Link>
              <Link
                href="/get-started/schedule-tour"
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
