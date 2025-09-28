import HeaderTag from "@/components/ui/header-tag";
import { camBridge, roadmapData } from "../../data";
import { SVGBlobCard } from "@/components/SVGBackground";
import { Metadata } from "next";
import Image from "next/image"


export const metadata: Metadata = {
  title: "About TechTots",
  description:
    "Discover the mission, vision, and values that drive TechTots International School to nurture young innovators through technology-infused early education.",
};

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
              At TechTots International School, we believe that early childhood
              is the foundation of lifelong learning. Located in Pokuase, Accra,
              we are a forward-thinking institution offering a unique blend of
              the{" "}
              <strong className="font-semibold">
                Cambridge Early Years and Primary Curriculum
              </strong>{" "}
              and the{" "}
              <strong className="font-semibold">
                Reggio Emilia philosophy
              </strong>
              , thoughtfully designed to nurture children from{" "}
              <strong className="font-semibold">6 months.</strong>, We provide a
              warm, safe, and intellectually stimulating environment where every
              child is encouraged to explore, imagine, and grow. Through a
              balanced mix of{" "}
              <strong className="font-semibold">
                play-based learning, project work
              </strong>
              , and{" "}
              <strong className="font-semibold">technology integration</strong>,
              our children develop strong roots in literacy, numeracy,
              creativity, and problem-solving—skills that will prepare them for
              a dynamic, rapidly changing world.
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
                <Image
                  src={member.image}
                  fetchPriority="auto"
                  width={100}
                  height={100}
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

      {/* Our Programs  */}
      <section className="relative py-20" style={{ background: "#f0f1f2" }}>
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-semibold flex items-center justify-center gap-2">
              Our Programmes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {/* Crèche */}
            <div
              className="shadow-md rounded-lg p-5 space-y-4"
              style={{ background: "hsl(29.52deg 63.64% 80.59%)" }}
            >
              <h3 className="text-lg font-bold">Crèche (6m – 2y)</h3>
              <p>
                Little Seeds & Sprouts – nurturing first bonds, sensory play,
                and discovery.
              </p>
            </div>

            {/* Early Years Prep */}
            <div
              className="shadow-md rounded-lg p-5 space-y-4"
              style={{ background: "#fbf5ef" }}
            >
              <h3 className="text-lg font-bold mb-2">
                Early Years Prep (2 – 3y)
              </h3>
              <p>Explorers – building early communication and motor skills.</p>
            </div>

            {/* Cambridge Early Years */}
            <div
              className="shadow-md rounded-lg p-5 space-y-4"
              style={{ background: "#f1f8fd" }}
            >
              <h3 className="text-lg font-bold mb-2">
                Cambridge Early Years (3 – 6y)
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>EY1 Adventurers</li>
                <li>EY2 Discoverers</li>
                <li>EY3 Innovators</li>
              </ul>
            </div>

            {/* Cambridge Primary */}
            <div
              className="shadow-md rounded-lg p-5 space-y-4 text-white"
              style={{ background: "hsl(206.54deg 39.39% 25.88%)" }}
            >
              <h3 className="text-lg font-bold">
                Cambridge Primary 1 (6 – 7y)
              </h3>
              <p>
                Pioneers – formal academic learning with project-based inquiry.
              </p>
            </div>
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
          <div className="overflow-x-auto rounded-lg shadow-2xl shadow-secondary-dark/20">
            <table className="min-w-full text-sm md:text-base text-left">
              <thead>
                <tr className="bg-beige space-x-4">
                  <th className="px-4 py-3 font-semibold">Class Name</th>
                  <th className="px-4 py-3 font-semibold">
                    Cambridge Equivalent
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    GES System
                  </th>
                  <th className="px-4 py-3 font-semibold">UK Equivalent</th>
                  <th className="px-4 py-3 font-semibold">Age Range</th>
                  <th className="px-4 py-3 font-semibold">Core Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {roadmapData.map((row, idx) => (
                  <tr key={row.className} className="hover:bg-primary/5">
                    <td className="p-3 text-[15px]">{row.className}</td>
                    <td className="p-3 text-[15px]">{row.cambridge}</td>
                    <td className="p-3 text-[15px]">{row.ghana}</td>
                    <td className="p-3 text-[15px]">{row.uk}</td>
                    <td className="p-3 text-[15px]">{row.age}</td>
                    <td className="p-3 text-[15px]">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What makes us special */}
      <section className="relative py-20 bg-white">
        <div className="container max-w-7xl mx-auto space-y-12 px-4">
          {/* Key Features */}
          <div className="container max-w-7xl mx-auto space-y-12 px-4">
            <div className="text-center space-y-5">
              <h2 className="text-3xl md:text-4xl font-semibold flex items-center justify-center gap-2">
                What Makes TechTots Special
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Item 1 */}
              <div
                className="p-6 rounded-lg shadow-md"
                style={{ background: "#f1f8fd" }}
              >
                <p>
                  <strong>Blend</strong> the Cambridge Early Years Curriculum
                  with the Reggio Emilia approach — making learning both
                  structured and child-led.
                </p>
              </div>

              {/* Item 2 */}
              <div
                className="p-6 rounded-lg shadow-md text-white"
                style={{ background: "hsl(206.54deg 39.39% 25.88%)" }}
              >
                <p className="">
                  <strong>Offer</strong> a purposefully designed environment
                  that supports social, emotional, cognitive, and creative
                  development.
                </p>
              </div>

              {/* Item 3 */}
              <div
                className="p-6 rounded-lg shadow-md"
                style={{ background: "hsl(29.52deg 63.64% 80.59%)" }}
              >
                <p className="">
                  <strong>Ensure</strong> a smooth, developmentally appropriate
                  journey from 6 months to Primary 1, preparing your child for
                  lifelong learning.
                </p>
              </div>

              {/* Item 4 */}
              <div
                className="p-6 rounded-lg shadow-md text-black"
                style={{ background: "#fbf5ef" }}
              >
                <p className="">
                  <strong>Early exposure</strong> to AI tools, robotics, and
                  digital platforms to build tech fluency.
                </p>
              </div>
            </div>
          </div>

          {/* Cambridge Curriculum Table */}
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold flex items-center flex items-center justify-center gap-2">
              Cambridge Curriculum Grade Levels
            </h3>

            <div className="overflow-x-auto rounded-xl shadow-2xl shadow-secondary-dark/20">
              <table className="min-w-full text-sm md:text-base text-left bg-white">
                <thead>
                  <tr className="bg-[#f5d6b0] text-black">
                    <th className="px-6 py-4 font-semibold">Stage</th>
                    <th className="px-6 py-4 font-semibold">Age Range</th>
                    <th className="px-6 py-4 font-semibold">
                      Grade Level Equivalent
                    </th>
                    <th className="px-6 py-4 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {camBridge.map((row, idx) => (
                    <tr
                      key={`${row.stage}-${idx}`}
                      className="hover:bg-primary/5"
                    >
                      <td className="p-4">{row.stage}</td>
                      <td className="p-4">{row.age_range}</td>
                      <td className="p-4">{row.grade}</td>
                      <td className="p-4">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
