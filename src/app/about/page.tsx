import img from "next/image";
import {
  AcademicCapIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import HeaderTag from "@/components/ui/header-tag";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute rounded-full top-1/4 left-10 w-72 h-72 bg-primary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute rounded-full top-1/3 right-10 w-72 h-72 bg-secondary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 text-center pt-12">
            <HeaderTag title="Our Story" />
            <h1 className="text-4xl font-bold leading-tight text-gray-900 font-heading md:text-5xl">
              About TechTots
            </h1>
            <p className="text-xl text-gray-600 -mt-5">
              Pioneering the future of early childhood education in Ghana through innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 overflow-hidden bg-ai-image bg-center bg-cover bg-fixed bg-no-repeat">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="p-8 transition-transform border rounded-lg bg-white backdrop-blur-sm border-accent/20 hover:scale-105">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
                 To nurture young minds through a world-class, technology-infused education that blends the Cambridge Early Years Curriculum and Reggio Emilia principles, preparing every child for a future of infinite possibilities.
              </p>
            </div>
            <div className="p-8 transition-transform border rounded-lg bg-white backdrop-blur-sm border-accent/20 hover:scale-105">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600">
                To become Africa&apos;s most forward-thinking early childhood institution where innovation, creativity, and global citizenship begin in the earliest years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading">Our Leadership Team</h2>
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
                image: '/images/hayford.jpeg'
              },
              {
                name: "Hannes O",
                role: "General Education Expert",
                description: "Cambridge Curriculum Specialist",
                image: '/images/hannes.jpeg'
              },
              {
                name: "Portia S",
                role: "School Management Expert",
                description: "AI in Education Expert",
                image: '/images/portia.jpeg'
              }
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
                  <h3 className="mb text-2xl font-extrabold tracking-tight">{member.name}</h3>
                  <p className="mb-2 text-lg font-semibold text-beige drop-shadow">{member.role}</p>
                  <p className="text-sm text-white/90 drop-shadow-sm">{member.description}</p>
                </div>
                {/* Subtle bottom glow */}
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-primary/40 to-transparent blur-md opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}