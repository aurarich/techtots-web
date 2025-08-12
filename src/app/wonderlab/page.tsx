import { SparklesIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Rocket from "./rocket";

export const metadata: Metadata = {
  title: "WonderLab",
  description:
    "Weekend adventures for curious young minds. Spark creativity, curiosity, and confidence in your child every weekend.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {<Rocket />}
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-20 min-h-96 h-full overflow-hidden bg-[url('/images/wonderlab.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <div className="inline-flex bg-white/30 items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/40">
              <SparklesIcon className="size-4 text-white" />
              <span className="text-white">wonderLab</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white font-heading md:text-5xl">
              Weekend Adventures for Curious Young Minds
            </h1>
            <p className="text-xl text-white/90">
              Spark creativity, curiosity, and confidence in your child every
              weekend.
            </p>
          </div>
        </div>
      </section>
      {/* WonderLab Grid Section (unchanged structure, styled like your Enrichment section) */}
      <section className="py-20 bg-blue">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-16">
            {[
              {
                title: "What is WonderLab?",
                bg: "#f1f8fe",
                items: [
                  "Premium weekend enrichment for ages 2–10",
                  "Open to all children (non-TechTots welcome)",
                  "Sat & Sun afternoons: hands-on learning & discovery",
                ],
              },
              {
                title: "What We Offer",
                bg: "#fbf5ef",
                items: [
                  "WonderLab STEM – Robotics, AI & Coding, Digital Literacy",
                  "WonderLab Creators – Art, Music (Piano, Violin), Craft, Design",
                  "WonderLab Sports – Mini Tennis, Football, Cycling, Basketball, Mini Golf",
                  "WonderLab Nature – Eco Farm, Gardening, Nature Play, Outdoor Games",
                ],
              },
              {
                title: "Weekend Schedule",
                bg: "#28455c",
                textWhite: true,
                items: [
                  "Saturday Morning: 9:00 AM – 1:00 PM",
                  "Saturday Afternoon: 1:00 PM – 5:00 PM",
                  "Sunday Afternoon: 1:00 PM – 5:00 PM",
                  "Flexible: full sessions or drop‑in activities",
                ],
              },
              {
                title: "Participation Fees (USD)",
                bg: "#f0f1f2",
                items: [
                  "Full Morning (9:00 AM – 1:00 PM) – $10",
                  "Full Afternoon (1:00 PM – 5:00 PM) – $10",
                  "Drop‑In Activity (per 1‑hour session) – $5",
                ],
              },
              {
                title: "Location & Contact",
                bg: "#f1f8fe",
                items: [
                  "TechTots Int’l School, GRIDCO Avenue, Pokuase, Accra",
                  "📞 +233 25 612 4133",
                  "📧 techtots@vpwa.org",
                  "🌐 techtots.edu.gh",
                  "📱 @techtotsgh",
                ],
              },
              {
                title: "Why WonderLab?",
                bg: "#fbf5ef",
                items: [
                  "Structured learning + free exploration",
                  "Early STEM & arts fluency",
                  "Independence, teamwork & expression",
                  "Open to ages 2–10",
                  "Cambridge & Reggio‑inspired facilitators",
                ],
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-xl shadow-md"
                style={{ backgroundColor: section.bg }}
              >
                <h3
                  className={`text-2xl md:text-3xl font-semibold mb-6 flex justify-center ${
                    section.textWhite ? "text-white" : "text-gray-800"
                  }`}
                >
                  {section.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className={`p-4 bg-white rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:animate-shake hover:cursor-pointer ${
                        section.textWhite ? "text-black" : ""
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div
            className="relative p-8 rounded-xl shadow-md"
            style={{ backgroundColor: "#f1f8fe" }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 flex justify-center">
              🌟 Enroll Today!
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Spaces are limited each weekend.",
                "Register now and give your child the gift of discovery!",
                "Join for full sessions or drop in for activities.",
              ].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-white rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:animate-shake hover:cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Optional CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
              >
                Register Now
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
      </section>{" "}
    </main>
  );
}
