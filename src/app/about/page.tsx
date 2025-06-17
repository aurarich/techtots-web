import Image from "next/image";
import {
  AcademicCapIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute rounded-full top-1/4 left-10 w-72 h-72 bg-primary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute rounded-full top-1/3 right-10 w-72 h-72 bg-secondary/20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full bg-primary/10 text-primary hover:bg-primary/20">
              <SparklesIcon className="w-4 h-4" />
              <span>Our Story</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 font-heading md:text-5xl">
              About TechTots
            </h1>
            <p className="text-xl text-gray-600">
              Pioneering the future of early childhood education in Ghana through innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="p-8 transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
                 To nurture young minds through a world-class, technology-infused education that blends the Cambridge Early Years Curriculum and Reggio Emilia principles, preparing every child for a future of infinite possibilities.
              </p>
            </div>
            <div className="p-8 transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600">
                To become Africa&apos;s most forward-thinking early childhood institution where innovation, creativity, and global citizenship begin in the earliest years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
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
                name: "Dr. Sarah Mensah",
                role: "Founder & Director",
                description: "20+ years in early childhood education"
              },
              {
                name: "Prof. Kwame Osei",
                role: "Academic Director",
                description: "Cambridge Curriculum Specialist"
              },
              {
                name: "Ms. Ama Kufuor",
                role: "Technology Director",
                description: "AI in Education Expert"
              }
            ].map((member, index) => (
              <div key={index} className="p-6 transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="mb-2 text-primary">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 