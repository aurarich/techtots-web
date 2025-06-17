import {
  AcademicCapIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  SparklesIcon,
  UserGroupIcon,
  BookOpenIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

export default function ProgrammesPage() {
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
              <span>Our Programs</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 font-heading md:text-5xl">
              Age-Appropriate Learning Programs
            </h1>
            <p className="text-xl text-gray-600">
              Discover our innovative curriculum designed to nurture young minds through technology-infused education
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Crèche",
                ageRange: "6-18 months",
                icon: UserGroupIcon,
                features: [
                  "Sensory play activities",
                  "Safe and nurturing care",
                  "Emotional bonding",
                  "Early development milestones"
                ]
              },
              {
                title: "Nursery",
                ageRange: "18 months-3 years",
                icon: BookOpenIcon,
                features: [
                  "Language development",
                  "Social skills building",
                  "Motor development",
                  "Play-based learning"
                ]
              },
              {
                title: "Kindergarten",
                ageRange: "4-6 years",
                icon: AcademicCapIcon,
                features: [
                  "Literacy and numeracy",
                  "Coding fundamentals",
                  "Digital literacy",
                  "STEM activities"
                ]
              }
            ].map((program, index) => (
              <div key={index} className="p-8 transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10">
                  <program.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-center text-gray-900">{program.title}</h3>
                <p className="mb-6 text-center text-primary">{program.ageRange}</p>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <SparklesIcon className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading">Special Features</h2>
            <p className="text-gray-600">
              Our unique approach combines traditional education with cutting-edge technology
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ComputerDesktopIcon,
                title: "AI-Powered Learning",
                description: "First preschool in Ghana to integrate artificial intelligence in early learning"
              },
              {
                icon: BeakerIcon,
                title: "STEM Activities",
                description: "Hands-on science, technology, engineering, and mathematics projects"
              },
              {
                icon: GlobeAltIcon,
                title: "Multilingual Exposure",
                description: "English and French language development from an early age"
              },
              {
                icon: PaintBrushIcon,
                title: "Creative Arts",
                description: "Music, movement, and artistic expression through various media"
              },
              {
                icon: SparklesIcon,
                title: "Digital Literacy",
                description: "Age-appropriate technology integration and digital skills"
              },
              {
                icon: UserGroupIcon,
                title: "Social Development",
                description: "Focus on emotional intelligence and social skills"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-center text-gray-900">{feature.title}</h3>
                <p className="text-center text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading">Ready to Join TechTots?</h2>
            <p className="mb-8 text-xl text-gray-600">
              Enroll your child in our innovative early childhood education program
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/admissions" className="px-8 py-4 text-lg font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary/90">
                Apply Now
              </a>
              <a href="/contact" className="px-8 py-4 text-lg font-medium transition-colors rounded-lg border border-primary text-primary hover:bg-primary/10">
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 