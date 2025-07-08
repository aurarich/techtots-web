import HeaderTag from '@/components/ui/header-tag'
import { ArrowRightIcon, ChevronDownIcon, CpuChipIcon, GlobeAltIcon, PaintBrushIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const LandingHeroSection = () => {
  return (
    <section className="relative flex flex-col max-md:gap-8 items-center justify-center max-md:py-5 py-20 pt-40 lg:pb-5 xl:h-5/6 overflow-hidden bg-[url('https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg')] bg-cover bg-scroll bg-no-repeat">
      <div className="absolute w-full top-0 h-full bg-primary/50 z-10"></div>
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute rounded-full top-1/4 left-10 w-72 h-72 bg-primary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute rounded-full top-1/3 right-10 w-72 h-72 bg-secondary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute rounded-full -bottom-8 left-20 w-72 h-72 bg-accent/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          {/* New floating elements */}
          <div className="absolute w-16 h-16 top-1/4 2xl:top-[10%] right-1/4 animate-float">
            <CpuChipIcon className="w-full h-full text-primary/20" />
          </div>
          <div className="absolute w-12 h-12 bottom-1/4 left-1/4 animate-float animation-delay-2000">
            <PaintBrushIcon className="w-full h-full text-secondary/30" />
          </div>
          <div className="absolute top-1/2 right-1/3 w-14 h-14 animate-float animation-delay-4000">
            <GlobeAltIcon className="w-full h-full text-accent/30" />
          </div>
        </div>

        <div className="container relative z-50 my-auto space-y-12">
          <div className="col-span-full lg:col-span-2 max-w-6xl mx-auto space-y-20 text-center">
            {/* Top Section */}
            <div className="space-y-9">
              {/* Enhanced Badge */}
              <HeaderTag title="Now Enrolling for September 2025" className='text-white' />

              {/* Enhanced Heading */}
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white font-heading md:text-6xl lg:text-7xl">
                Africa's Most Forward-Thinking
                <span className="block mt-2 gradient-text">
                  Early Childhood Institution
                </span>
              </h1>

              {/* Enhanced Description */}
              <p className="max-w-2xl mx-auto text-lg text-gray-200 md:text-2xl">
                Where innovation meets education. Ghana's pioneering institution
                combining Cambridge Curriculum and Reggio Emilia principles with
                AI-powered learning.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/admissions"
                className="max-sm:px-4 max-md:py-3 px-8 py-4 text-base sm:text-lg group btn btn-primary"
              >
                <span className="flex items-center gap-2">
                  Apply Now
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/tour"
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
          <div className="col-span-full lg:col-span-1">
            
          </div>
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
  )
}

export default LandingHeroSection