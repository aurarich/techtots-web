import AnimatedWave from '@/components/Wave';
import { BookOpenIcon, BuildingOfficeIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'

const OurProgrammes = () => {
  return (
    <>
    <section className="relative overflow-hidden section bg-white">

        <div className="container relative z-10">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Our Programs
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Tailored educational pathways for every stage of early
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                icon: BookOpenIcon,
                title: "Crèche (6-18 months)",
                description:
                  "Sensory play, safe care, and emotional bonding in a nurturing environment.",
                color: "primary",
                btnColor: "primary",
              },
              {
                icon: BuildingOfficeIcon,
                title: "Nursery (18 months-3 years)",
                description:
                  "Language development, social skills, and motor development through play-based learning.",
                color: "secondary",
                btnColor: "secondary",
              },
              {
                icon: ComputerDesktopIcon,
                title: "Kindergarten (4-6 years)",
                description:
                  "Literacy, numeracy, coding, and digital literacy in an engaging environment.",
                color: "beige",
                btnColor: "primary",
              },
            ].map((program, index) => {
              const iconColor = `text-${program.color}`;
              const bgColor =
                program.color === "beige"
                  ? `bg-${program.color}/80`
                  : `bg-${program.color}/20`;
              const btnColor = `btn-${program.btnColor}`;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-accent/10 bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="flex flex-col items-center p-8 pb-4">
                    <div className={`flex items-center justify-center w-20 h-20 mb-4 rounded-full ${bgColor}`}>
                      <program.icon className={`w-12 h-12 ${iconColor}`} />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-center text-gray-900 font-heading">
                      {program.title}
                    </h3>
                    <p className="text-center text-gray-600 mb-6">
                      {program.description}
                    </p>
                  </div>
                  <div className="px-8 pb-8 mt-auto">
                    <Link
                      href={`/programs/${program.title.toLowerCase().split(" ")[0]}`}
                      className={`w-full text-center btn ${btnColor}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <div className="rotate-180 bg-white">
        <AnimatedWave className='fill-primary/60' />
      </div> */}
    </>
  )
}

export default OurProgrammes