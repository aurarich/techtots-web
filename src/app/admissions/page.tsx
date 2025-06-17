import {
  SparklesIcon,
  UserGroupIcon,
  CalendarIcon,
  DocumentTextIcon,
  CreditCardIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function AdmissionsPage() {
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
              <span>Now Enrolling for September 2025</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 font-heading md:text-5xl">
              Join TechTots International School
            </h1>
            <p className="text-xl text-gray-600">
              Begin your child's journey towards a future of innovation and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Application Steps Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 font-heading">Application Process</h2>
            <p className="text-gray-600">
              Follow these simple steps to secure your child's place at TechTots
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: DocumentTextIcon,
                title: "Step 1",
                description: "Fill Online Application Form"
              },
              {
                icon: CreditCardIcon,
                title: "Step 2",
                description: "Pay Assessment Fee"
              },
              {
                icon: UserGroupIcon,
                title: "Step 3",
                description: "Attend Parent & Child Tour"
              },
              {
                icon: SparklesIcon,
                title: "Step 4",
                description: "Secure Placement"
              }
            ].map((step, index) => (
              <div key={index} className="p-6 transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-center text-gray-900">{step.title}</h3>
                <p className="text-center text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Eligibility Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20">
              <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">Age Eligibility</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    program: "Crèche",
                    ageRange: "6-18 months",
                    icon: UserGroupIcon
                  },
                  {
                    program: "Nursery 1",
                    ageRange: "18 months-2.5 years",
                    icon: CalendarIcon
                  },
                  {
                    program: "KG2",
                    ageRange: "4-6 years",
                    icon: ClockIcon
                  }
                ].map((program, index) => (
                  <div key={index} className="p-6 text-center transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{program.program}</h3>
                    <p className="text-primary">{program.ageRange}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20">
              <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">Tuition & Fees</h2>
              <p className="mb-8 text-center text-gray-600">
                Our tuition reflects the premium nature of the learning experience and the extensive resources available to every child.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { program: "Crèche", fee: "Contact for Details" },
                  { program: "Nursery", fee: "Contact for Details" },
                  { program: "KG", fee: "Contact for Details" }
                ].map((item, index) => (
                  <div key={index} className="p-6 text-center transition-transform border rounded-lg bg-white/50 backdrop-blur-sm border-accent/20 hover:scale-105">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{item.program}</h3>
                    <p className="text-primary">{item.fee}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Payment plans available. Early Bird discounts for first 20 enrollments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading">Ready to Begin Your Journey?</h2>
            <p className="mb-8 text-xl text-gray-600">
              Take the first step towards your child's future at TechTots
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/contact" className="px-8 py-4 text-lg font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary/90">
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