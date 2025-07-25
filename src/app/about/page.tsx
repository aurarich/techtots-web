import img from "next/image";

import HeaderTag from "@/components/ui/header-tag";
import AnimatedWave from "@/components/Wave";
import { roadmapData } from "@/data";
import { SVGBlobCard } from "@/components/SVGBackground";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pb-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 text-center pt-12">
            <HeaderTag title="Our Story" />
            <h1 className="text-4xl font-bold leading-tight text-gray-900 font-heading md:text-5xl">
              About TechTots
            </h1>
            <p className="text-xl text-gray-600 -mt-5">
              Pioneering the future of early childhood education in Ghana
              through innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white z-10">
        <div className="absolute left-20 top-0 animate-float duration-5000 delay-300 -z-[1]">
          <SVGBlobCard className="fill-gray-500/10 scale-90" />
        </div>
        <div className="absolute right-10 bottom-0 animate-float size-56 -z-[1]">
          <SVGBlobCard className="fill-beige/20 w-40" />
        </div>
        <div className="container space-y-20">
          <div className="max-w-5xl mx-auto rounded-xl p-12 transition-all bg-beige shadow-lg">
              <p className="leading-loose text-lg">
                At TechTots International School, we believe that early
                childhood is the foundation of lifelong learning. <br /> Located
                in Pokuase, Accra, we are a{" "}
                <strong className="font-semibold">
                  forward-thinking
                </strong>{" "}
                institution offering a unique blend of the Cambridge Early Years
                and Primary Curriculum and the Reggio Emilia philosophy,
                thoughtfully designed to nurture children from 6 months., We
                provide a <span className="font-semibold">warm, safe, and intellectually</span> stimulating environment
                where every child is encouraged to explore, imagine, and grow.
                Through a balanced mix of play-based learning, project work, and
                technology integration, our children develop strong roots in
                literacy, numeracy, creativity, and problem-solving—skills that
                will prepare them for a dynamic, rapidly changing world
              </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section relative overflow-hidden  bg-center bg-cover bg-fixed bg-no-repeat bg-slate-100">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="p-8 transition-transform border rounded-lg bg-white backdrop-blur-sm border-slate-300 hover:scale-105">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To nurture young minds through a world-class, technology-infused
                education that blends the Cambridge Early Years Curriculum and
                Reggio Emilia principles, preparing every child for a future of
                infinite possibilities.
              </p>
            </div>
            <div className="p-8 transition-transform border rounded-lg bg-white backdrop-blur-sm border-slate-300 hover:scale-105">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To become Africa&apos;s most forward-thinking early childhood
                institution where innovation, creativity, and global citizenship
                begin in the earliest years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 overflow-hidden hidden">
        <div className="container space-y-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900 font-heading">
              Our Leadership Team
            </h2>
            <p className="text-gray-600">
              Meet the passionate educators and innovators behind TechTots
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Hayford Siaw",
                role: "Founder & Director",
                description: "20+ years in Education Management & Policy",
                image: "/images/hayford.jpeg",
              },
              {
                name: "Hannes O",
                role: "General Education Expert",
                // description: "Cambridge Curriculum Specialist",
                description: "",
                image: "/images/hannes.jpeg",
              },
              {
                name: "Portia S",
                role: "School Management Expert",
                // description: "AI in Education Expert",
                description: "",
                image: "/images/portia.jpeg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-end h-96 overflow-hidden transition-all border rounded-2xl shadow-lg bg-white border-primary/10 group"
              >
                <img
                  src={member.image}
                  fetchPriority="auto"
                  className="absolute inset-0 rounded-2xl object-cover w-full h-full transition-all duration-500 mix-blend-multiply group-hover:scale-110 group-hover:object-top"
                  alt={member.name}
                />
                {/* Overlay for readability */}
                <div className="absolute rounded-2xl overflow-hidden inset-1 bg-gradient-to-t from-black/80 group-hover:to-20% via-black/20 group-hover:via-30% group-hover:from-black/50 transition-all duration-500" />
                {/* Content at the bottom */}
                <div className="relative z-10 p-6 text-white">
                  <h3 className="mb text-2xl font-extrabold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mb-2 text-lg font-semibold text-beige drop-shadow">
                    {member.role}
                  </p>
                  {member.description && (
                    <p className="text-sm text-white/90 drop-shadow-sm">
                      {member.description}
                    </p>
                  )}
                </div>
                {/* Subtle bottom glow */}
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-primary/40 to-transparent blur-md opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Roadmap Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-semibold flex items-center justify-center gap-2">
              TechTots Early Years & Primary Pathway
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A clear map of how your child progresses through TechTots using
              the Cambridge curriculum and Reggio Emilia principles
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-2xl shadow-secondary-dark/20">
            <table className="min-w-full text-sm md:text-base text-left">
              <thead>
                <tr className="bg-beige">
                  <th className="px-4 py-3 font-bold">Class Name</th>
                  <th className="px-4 py-3 font-bold">
                    Cambridge Curriculum Equivalent
                  </th>
                  <th className="px-4 py-3 font-bold">
                    Ghana Education System
                  </th>
                  <th className="px-4 py-3 font-bold">UK Equivalent</th>
                  <th className="px-4 py-3 font-bold">Age Range</th>
                  <th className="px-4 py-3 font-bold">Core Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {roadmapData.map((row, idx) => (
                  <tr key={row.className} className="hover:bg-primary/5">
                    <td className="p-3">{row.className}</td>
                    <td className="p-3">{row.cambridge}</td>
                    <td className="p-3">{row.ghana}</td>
                    <td className="p-3">{row.uk}</td>
                    <td className="p-3">{row.age}</td>
                    <td className="p-3">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
