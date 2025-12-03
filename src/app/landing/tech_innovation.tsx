import AnimatedWave from '@/components/Wave'
import React from 'react'

const TechInnovationSection = () => {
  return (
    <>
      {/* <div className="bg-white rotate-180">
            <AnimatedWave className="w-full fill-primary" style={{ color: "#27455c" }} />
        </div> */}





      <section className="relative overflow-hidden section bg-white pt-16 pb-24">
        <div className="container relative z-10">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Technology & Innovation
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              A launchpad for tomorrow's innovators with cutting-edge technology integration.
            </p>
          </div>

          {/* Tech Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Smartboards & Interactive Screens",
                description:
                  "Engaging learning through interactive technology.",
                color: "from-[#60A5FA] to-[#2563EB]",
              },
              {
                title: "AI-Powered Learning Apps",
                description:
                  "Personalized learning experiences through artificial intelligence.",
                color: "from-[#FDE68A] to-[#F59E0B]",
              },
              {
                title: "Early Robotics & Coding",
                description:
                  "Introduction to computational thinking from an early age.",
                color: "from-[#6EE7B7] to-[#10B981]",
              },
              {
                title: "Parent Dashboards",
                description:
                  "Real-time updates and progress tracking for parents.",
                color: "from-[#FBBF24] to-[#F97316]",
              },
              {
                title: "Safety Technology",
                description:
                  "Advanced CCTV and security systems for peace of mind.",
                color: "from-[#A78BFA] to-[#7C3AED]",
              },
              {
                title: "Digital Learning Hubs",
                description:
                  "Dedicated spaces for technology-enhanced learning.",
                color: "from-[#34D399] to-[#059669]",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-white border border-gray-200 transition-transform hover:scale-105`}
              >
                {/* Subtle Gradient Blob */}
                <div
                  className={`absolute inset-0 rounded-2xl blur-3xl opacity-20 bg-gradient-to-br ${tech.color} -z-10 group-hover:opacity-40 transition-opacity duration-500`}
                />
                <h3 className="mb-3 text-xl font-semibold text-gray-900 font-heading group-hover:text-gray-800">
                  {tech.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default TechInnovationSection