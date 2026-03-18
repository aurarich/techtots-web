import HeaderTag from "@/components/ui/header-tag";
import { SVGBlobCard } from "@/components/SVGBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Talent Community | TechTots",
  description:
    "Connect with TechTots International School for future teaching and leadership opportunities across Early Years, Primary, and future secondary pathways.",
};

const currentOpportunities = [
  {
    title: "Early Years Education",
    items: [
      "Crèche",
      "Nursery",
      "EY1–EY3 (Cambridge Early Years Programme)",
    ],
    bg: "hsl(29.52deg 63.64% 80.59%)",
    text: "text-black",
  },
  {
    title: "Primary Education",
    items: ["Cambridge Primary Programme (Stages 1–6)"],
    bg: "#fbf5ef",
    text: "text-black",
  },
  {
    title: "Specialist Subjects",
    items: [
      "STEM, Computing, Artificial Intelligence, Robotics",
      "Art & Design, Music, Performing Arts",
      "Physical Education and Wellbeing",
      "Languages (including French)",
    ],
    bg: "#f1f8fd",
    text: "text-black",
  },
];

const futureExpansion = [
  {
    title: "Lower Secondary (Cambridge Lower Secondary)",
    items: [
      "English",
      "Mathematics",
      "Science",
      "Global Perspectives",
      "Computing & Digital Technologies",
      "Humanities and Social Sciences",
    ],
  },
  {
    title: "Upper Secondary / IGCSE Level",
    items: [
      "Mathematics",
      "Biology, Chemistry, Physics",
      "Computer Science",
      "Economics and Business Studies",
      "English Language & Literature",
      "Global Perspectives and Research",
      "Creative Arts and Design",
      "Guidance and University Counselling",
    ],
  },
];

const qualities = [
  "A strong commitment to child-centred learning",
  "Creativity and innovation in teaching and learning",
  "Professional integrity and teamwork",
  "Passion for preparing children for a rapidly evolving world",
  "Openness to continuous professional development",
];

export default function JoinTalentCommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pb-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 text-center pt-12">
            <HeaderTag title="Careers at TechTots" />
            <h1 className="text-4xl font-bold leading-tight text-gray-900 font-heading md:text-5xl">
              Join Our Talent Community
            </h1>
            <p className="text-xl text-gray-600 -mt-5">
              Tech-Ready Tots. World-Ready Kids.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-20 bg-white z-10">
        <div className="absolute left-20 top-0 animate-float duration-5000 delay-300 -z-[1]">
          <SVGBlobCard className="fill-gray-500/10 scale-90" />
        </div>
        <div className="absolute right-10 bottom-0 animate-float size-56 -z-[1]">
          <SVGBlobCard className="fill-beige/20 w-40" />
        </div>

        <div className="container space-y-20">
          <div className="max-w-5xl mx-auto rounded-xl p-12 transition-all bg-beige shadow-lg">
            <p className="leading-loose text-lg text-gray-800">
              At TechTots International School, we believe exceptional schools
              are built by exceptional people. While we may not always have a
              specific vacancy advertised, we are continuously interested in
              connecting with talented, passionate, and forward-thinking
              professionals who share our commitment to excellence in education.
            </p>

            <p className="leading-loose text-lg text-gray-800 mt-6">
              If you are inspired by{" "}
              <strong className="font-semibold">
                innovative learning, child development,
              </strong>{" "}
              and the{" "}
              <strong className="font-semibold">
                integration of technology in education
              </strong>
              , we invite you to submit your CV for future consideration.
            </p>

            <p className="leading-loose text-lg text-gray-800 mt-6">
              By joining our Talent Community, your profile will be reviewed
              when opportunities arise that align with your experience and
              expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section
        className="relative py-20"
        style={{ background: "#f0f1f2" }}
      >
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-semibold flex items-center justify-center gap-2">
              Current and Future Opportunities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our growing school community includes professionals in the
              following areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4">
            {currentOpportunities.map((item, index) => (
              <div
                key={index}
                className={`shadow-md rounded-lg p-6 space-y-4 ${item.text}`}
                style={{ background: item.bg }}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((subItem, i) => (
                    <li key={i} className="leading-relaxed">
                      • {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Expansion */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Future Academic Expansion (2027–2028)
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              As part of our long-term growth strategy, TechTots International
              School will be expanding into Lower Secondary and Upper Secondary
              education beginning in the 2027–2028 academic year.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              We therefore welcome expressions of interest from experienced
              educators and academic leaders in these areas:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 px-4">
            {futureExpansion.map((section, idx) => (
              <div
                key={idx}
                className="p-8 transition-transform border rounded-lg bg-white backdrop-blur-sm border-slate-300 hover:scale-[1.02]"
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  {section.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto rounded-xl p-8 bg-beige shadow-lg">
            <p className="text-lg leading-loose text-gray-800 text-center">
              We are particularly interested in experienced{" "}
              <strong className="font-semibold">Cambridge educators</strong>,{" "}
              <strong className="font-semibold">
                curriculum specialists
              </strong>
              , and professionals passionate about preparing learners for global
              academic pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Who Thrives */}
      <section className="relative py-20 bg-white">
        <div className="container max-w-7xl mx-auto space-y-12 px-4">
          <div className="text-center space-y-5">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Who Thrives at TechTots
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We look for professionals who demonstrate:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((quality, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg shadow-md"
                style={{
                  background:
                    idx % 3 === 0
                      ? "#f1f8fd"
                      : idx % 3 === 1
                      ? "#fbf5ef"
                      : "hsl(29.52deg 63.64% 80.59%)",
                }}
              >
                <p className="text-gray-800 leading-relaxed">{quality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit CV */}
      <section className="section relative overflow-hidden bg-center bg-cover bg-fixed bg-no-repeat bg-slate-100">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="p-8 transition-transform border rounded-lg bg-white backdrop-blur-sm border-slate-300 hover:scale-105">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Submit Your CV
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you would like to be considered for future opportunities,
                please send your CV to{" "}
                <a
                  href="mailto:career@techtots.edu.gh"
                  className="font-semibold text-primary underline"
                >
                  career@techtots.edu.gh
                </a>
                .
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Your details will be securely stored in our talent database and
                reviewed when suitable roles become available.
              </p>
            </div>

            <div className="p-8 transition-transform border rounded-lg bg-white backdrop-blur-sm border-slate-300 hover:scale-105">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Contact Details
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Location:</strong> Pokuase, Accra, Ghana
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.techtots.edu.gh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    www.techtots.edu.gh
                  </a>
                </p>
                <p className="pt-2">
                  We look forward to connecting with talented individuals who
                  are excited about shaping the future of education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}