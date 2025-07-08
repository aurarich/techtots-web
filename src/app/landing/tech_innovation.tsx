import AnimatedWave from '@/components/Wave'
import React from 'react'

const TechInnovationSection = () => {
  return (
    <>
    <div className="bg-white rotate-180">
            <AnimatedWave className="w-full fill-primary" />
        </div>
    <section className="relative overflow-hidden section bg-[url('https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg')] bg-top bg-cover bg-fixed bg-no-repeat">
        <div className="absolute w-full top-0 h-full bg-gradient-to-b from-primary to-primary/30 z-10"></div>
        <div className="container relative z-20">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white font-heading md:text-5xl">
              Technology & Innovation
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white">
              A launchpad for tomorrow's innovators with cutting-edge technology
              integration.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Smartboards & Interactive Screens",
                description:
                  "Engaging learning through interactive technology.",
              },
              {
                title: "AI-Powered Learning Apps",
                description:
                  "Personalized learning experiences through artificial intelligence.",
              },
              {
                title: "Early Robotics & Coding",
                description:
                  "Introduction to computational thinking from an early age.",
              },
              {
                title: "Parent Dashboards",
                description:
                  "Real-time updates and progress tracking for parents.",
              },
              {
                title: "Safety Technology",
                description:
                  "Advanced CCTV and security systems for peace of mind.",
              },
              {
                title: "Digital Learning Hubs",
                description:
                  "Dedicated spaces for technology-enhanced learning.",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="card group hover-lift bg-gradient-to-br from-white/80 to-[#F5F5DC]/20 backdrop-blur-sm border-[#0EA5E9]/10"
              >
                <h3 className="mb-3 text-xl font-semibold text-gray-900 font-heading">
                  {tech.title}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
      
        </div>
      </section>
    </>
  )
}

export default TechInnovationSection