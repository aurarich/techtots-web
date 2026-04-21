// import { SparklesIcon } from '@heroicons/react/24/outline';
// import { ourProgrammes } from '../../data';
// import Link from 'next/link';
// import React from 'react';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Programmes',
//     description: 'Explore our diverse range of programmes designed to nurture young minds and foster innovation at TechTots International School.'
// };

// export default function Page() {
//     return (
//         <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//             {/* Hero Section */}
//             <section className="relative flex items-center justify-center py-20 min-h-96 h-full overflow-hidden bg-[url('/images/campus-2.jpeg')] bg-cover bg-center">
//                 <div className="absolute inset-0 bg-black/70" />
//                 <div className="container relative z-10">
//                     <div className="max-w-4xl mx-auto space-y-8 text-center">
//                         <div className="inline-flex bg-white/30 items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/40">
//                             <SparklesIcon className="size-4 text-white" />
//                             <span className="text-white">{/*Our Programmes & Enrichment Programmes*/}our core & enrichment programmes</span>
//                         </div>
//                         <h1 className="text-4xl font-bold leading-tight text-white font-heading md:text-5xl">
//                             Our Programmes
//                         </h1>
//                         <p className="text-xl text-white/90">
//                             Begin your child's journey towards a future of innovation and excellence
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Intro Section */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
//                     <h2 className="text-4xl font-bold text-gray-900 font-heading md:text-5xl">
//                         From Little Seeds to Trailblazers
//                     </h2>
//                     <p className="text-xl text-gray-600">
//                         At TechTots, every class name is thoughtfully chosen to celebrate growth, curiosity, and discovery. Our inspiring learning pathway guides children step by step from their earliest experiences to confident, inquisitive learners ready for the future.
//                     </p>
//                 </div>
//             </section>

//             {/* Programmes Section */}
//             <section className="relative overflow-hidden py-20 pb-32 bg-gradient-to-b ">
//                 <div className="container px-4 mx-auto">
//                     <div className="grid gap-10 md:grid-cols-2">
//                         {ourProgrammes.map((prog, idx) => (
//                             <div
//                                 key={idx}
//                                 className={`relative p-8 flex flex-col gap-6 justify-between overflow-hidden transition-all rounded-xl shadow-lg bg-white border-${prog.color}/10 hover:scale-105`}
//                             >
//                                 <div className="flex flex-col gap-3">
//                                     <h2 className="text-2xl font-bold text-primary font-heading">
//                                         {prog.title}
//                                     </h2>
//                                     <p className="text-gray-600 font-medium">Age Group: {prog.ageGroup}</p>

//                                     <div>
//                                         <span className="block text-sm font-bold text-secondary mb-1">Classes:</span>
//                                         <ul className="list-disc list-inside text-sm text-gray-700">
//                                             {prog.classes.map((cls, i) => (
//                                                 <li key={i}>{cls.name}</li>
//                                             ))}
//                                         </ul>
//                                     </div>

//                                     <div>
//                                         <span className="block text-sm font-bold text-secondary mb-1">Milestones:</span>
//                                         <ul className="list-disc list-inside text-sm text-gray-700">
//                                             {prog.milestones.map((ms, i) => (
//                                                 <li key={i}>{ms}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 {/* <Link href={`/programmes/${prog.slug}`} className={`w-full text-center btn ${prog.colors.buttonColor}`}>
//                                     Learn More
//                                 </Link> */}
//                                 {prog.title === "Cambridge Primary" && (
//                                     <Link
//                                         href={`/programmes/${prog.slug}`}
//                                         className={`w-full text-center btn ${prog.colors.buttonColor}`}
//                                     >
//                                         Learn More
//                                     </Link>
//                                 )}

//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Enrichment Programmes Section */}
//             <section className="py-20 bg-blue">
//                 <div className="container max-w-7xl mx-auto px-4 text-center">
//                     <h1 className="mb-12 text-4xl font-bold text-gray-900 font-heading md:text-5xl">Our Enrichment Programmes</h1>

//                     <div className="space-y-16">
//                         {[
//                             {
//                                 title: 'Creative & Expressive Arts',
//                                 bg: '#f1f8fd',
//                                 items: [
//                                     'Art & Craft',
//                                     'Music Lessons – Piano',
//                                     'Music Lessons – Violin',
//                                     'Dance & Movement',
//                                     'Drama & Storytelling Club'
//                                 ]
//                             },
//                             {
//                                 title: 'Technology & Innovation',
//                                 bg: 'hsl(29.52deg 63.64% 80.59%)',
//                                 items: [
//                                     'Robotics & Coding Club',
//                                     'AI Explorers Club',
//                                     'Digital Literacy'
//                                 ]
//                             },
//                             {
//                                 title: 'Sports & Physical Development',
//                                 bg: '#fbf5ef',
//                                 items: [
//                                     'Mini Tennis',
//                                     'Basketball Clinic',
//                                     'Football Academy',
//                                     'Cycling',
//                                     'Swimming Lessons (subject to facility availability)'
//                                 ]
//                             },
//                             {
//                                 title: 'Nature & Sustainability',
//                                 bg: 'hsl(206.54deg 39.39% 25.88%)',
//                                 items: [
//                                     'Eco-Farm Gardening',
//                                     'Mini Golf on Eco Farm'
//                                 ],
//                                 textWhite: true
//                             },
//                             {
//                                 title: 'Wellbeing & Life Skills',
//                                 bg: '#f0f1f2',
//                                 items: [
//                                     'Mindfulness & Yoga',
//                                     'Etiquette & Social Skills Club',
//                                     'Language Club – French',
//                                     'Language Club – Dutch'
//                                 ]
//                             }
//                         ].map((section, idx) => (
//                             <div key={idx} className={`relative p-8 rounded-xl shadow-md`} style={{ backgroundColor: section.bg }}>
//                                 <h3 className={`text-2xl md:text-3xl font-semibold mb-6 ${section.textWhite ? 'text-white' : 'text-gray-800'} flex justify-center`}>{section.title}</h3>
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                                     {section.items.map(item => (
//                                         <div
//                                             key={item}
//                                             className={`p-4 bg-white ${section.textWhite ? 'text-black' : ''} rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:animate-shake hover:cursor-pointer`}
//                                         >
//                                             {item}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }







import { SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programmes',
  description:
    'Explore the full TechTots learning journey from Pre-Early Years to Primary, designed to nurture confident, curious, and future-ready learners.',
};

const programmePillars = [
  'Cambridge-aligned learning pathways',
  'Small class sizes and personalised attention',
  'Technology integration from the early years',
  'Creative, physical, emotional, and academic development',
  'Future-ready learning with confidence at the centre',
];

const preEarlyYearsDomains = [
  {
    title: 'Communication, Language & Literacy',
    items: [
      'Early phonics awareness through sounds, listening, and repetition',
      'Storytelling, songs, and rhymes',
      'Vocabulary development through conversation and play',
      'Early mark-making and pre-writing skills for Discoverers',
    ],
  },
  {
    title: 'Mathematics',
    items: [
      'Counting through songs and activities',
      'Sorting, matching, and pattern recognition',
      'Exploration of shapes, sizes, and quantities',
    ],
  },
  {
    title: 'Understanding the World',
    items: [
      'Sensory exploration through water, sand, and textures',
      'Nature discovery and outdoor learning',
      'Awareness of people, routines, and surroundings',
      'Introduction to simple technology through guided exploration',
    ],
  },
  {
    title: 'Creative Expression',
    items: [
      'Arts and craft activities',
      'Music, movement, and rhythm through songs and play',
      'Role play and imaginative exploration',
    ],
  },
  {
    title: 'Physical Development',
    items: [
      'Crawling, walking, climbing, and balancing',
      'Fine motor development through grasping, stacking, and threading',
      'Structured and free play activities',
    ],
  },
  {
    title: 'Personal, Social & Emotional Development',
    items: [
      'Building trust and secure relationships',
      'Developing independence and confidence',
      'Learning to share, take turns, and interact positively',
      'Establishing routines and emotional awareness',
    ],
  },
];

const earlyYearsDomains = [
  {
    title: 'Communication, Language & Literacy',
    items: [
      'Phonics through sound recognition, blending, and segmenting',
      'Reading and comprehension',
      'Writing from mark-making to sentence formation',
      'French as early exposure to a global language',
    ],
  },
  {
    title: 'Mathematics',
    items: [
      'Early number concepts, patterns, shapes, and measurement',
      'Problem-solving and reasoning activities',
      'Abacus Brain Gym for concentration and mental maths growth',
    ],
  },
  {
    title: 'Understanding the World',
    items: [
      'Exploration of nature, people, and communities',
      'Inquiry-based learning about the world around them',
      'Technology in exploration with early digital and computational thinking',
    ],
  },
  {
    title: 'Creative Expression',
    items: [
      'Arts and Design through drawing, painting, and crafting',
      'Piano and Music for rhythm, melody, coordination, and listening',
    ],
  },
  {
    title: 'Physical Development',
    items: [
      'Structured physical activities',
      'Development of balance, strength, and coordination',
      'Fine and gross motor skill development',
    ],
  },
  {
    title: 'Personal, Social & Emotional Development',
    items: [
      'Social interaction and collaborative play',
      'Emotional awareness and self-regulation',
      'Development of independence and confidence',
    ],
  },
];

const primaryHighlights = [
  'English, Mathematics, and Science taught with strong conceptual grounding',
  'Computing, Global Perspectives, Humanities, Digital Literacy, French, Music, Wellbeing, Art & Design, and Physical Education',
  'TechTots signature subjects including Artificial Intelligence, Logic & Reasoning, Seeds of Scripture, and ABACUS',
  'Small class sizes with personalised academic support',
  'Assessment for mastery through strand-based and skill-focused tracking',
  'A strong culture of critical thinking, inquiry, and global readiness',
];

const enrichmentProgrammes = [
  {
    title: 'Creative & Performing Arts',
    bg: '#f4f9ff',
    items: [
      'Art & Craft',
      'Piano Lessons',
      'Violin Lessons',
      'Dance & Movement',
      'Drama & Storytelling Club',
    ],
  },
  {
    title: 'Technology, Innovation & Future Skills',
    bg: '#fff3e8',
    items: [
      'Robotics & Coding Club',
      'AI Explorers Club',
      'Digital Literacy',
      'Computational Thinking Activities',
    ],
  },
  {
    title: 'Sports, Fitness & Physical Excellence',
    bg: '#fef7f0',
    items: [
      'Swimming',
      'Football',
      'Lawn Tennis',
      'Table Tennis',
      'Basketball',
      'Golf',
    ],
  },
  {
    title: 'Nature, Sustainability & Outdoor Learning',
    bg: '#1f3a4f',
    textWhite: true,
    items: [
      'Nature Discovery',
      'Outdoor Learning',
      'Eco-Farm Gardening',
      'Mini Golf Experiences',
    ],
  },
  {
    title: 'Wellbeing, Confidence & Life Skills',
    bg: '#f3f4f6',
    items: [
      'Wellbeing Activities',
      'Mindfulness & Yoga',
      'Etiquette & Social Skills',
      'Language Club – French',
      'Language Club – Dutch',
    ],
  },
];

function DomainCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <h4 className="text-lg font-bold text-gray-900 font-heading">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
     <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[url('/images/campus-2.jpeg')] bg-cover bg-center py-14 md:min-h-[260px]">
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="container relative z-10 px-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center space-y-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <SparklesIcon className="size-4" />
              <span>Cambridge Pathway & Signature Learning Experience</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white font-heading md:text-6xl">
              A Complete Learning Journey
              <span className="block text-blue-200">From First Steps to Future Leaders</span>
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
              At TechTots International School, every programme is intentionally designed to
              nurture curiosity, build confidence, and develop children into capable, creative,
              and future-ready learners.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link href="/admissions" className="btn btn-primary px-8 py-4">
                Apply for Admission
              </Link>
              <Link
                href="/contact"
                className="btn border border-white/30 bg-white/10 px-8 py-4 text-white hover:bg-white/20"
              >
                Book an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              A Thoughtfully Structured Pathway for Lifelong Success
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              We do not believe in rushing children through learning. We believe in building
              strong foundations, stage by stage, through a balanced approach that supports
              academic growth, personal development, creativity, and global readiness.
            </p>
            <p className="text-lg leading-8 text-gray-600">
              From our youngest learners in Pre-Early Years to our confident thinkers in
              Cambridge Primary, each level prepares children for what comes next while
              honouring where they are developmentally.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {programmePillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-5 text-center text-sm font-medium text-slate-700 shadow-sm"
              >
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Ages 1–4
            </p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Pre-Early Years & EY1
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our Pre-Early Years and EY1 programme is carefully designed for our youngest
              learners, laying the foundation for confident exploration, communication, and
              early thinking through nurturing, responsive teaching. Children are welcomed into
              three developmental groups: Sprouts (1–2 years), Explorers (2–3 years), and
              Discoverers – EY1 (3–4 years).
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Sprouts</h3>
              <p className="mt-2 text-sm font-medium text-sky-700">1–2 years</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                A gentle introduction to security, sensory discovery, rhythm, movement, and
                responsive care in a safe and stimulating environment.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Explorers</h3>
              <p className="mt-2 text-sm font-medium text-sky-700">2–3 years</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Children begin to build confidence through play, structured routines, language
                exposure, social interaction, and hands-on exploration.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Discoverers – EY1</h3>
              <p className="mt-2 text-sm font-medium text-sky-700">3–4 years</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Learners gain stronger readiness in pre-literacy, pre-writing, social
                confidence, curiosity, and guided early academic exposure.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {preEarlyYearsDomains.map((domain) => (
              <DomainCard key={domain.title} title={domain.title} items={domain.items} />
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 font-heading">
                A Gentle Start to Excellence
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700">
                {[
                  'Smooth transition into EY2 and EY3',
                  'Readiness for structured phonics and literacy',
                  'Early confidence in learning and social interaction',
                  'A lifelong love for discovery',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-[#113b5c] p-8 text-white shadow-sm">
              <h3 className="text-2xl font-bold font-heading">The TechTots Difference</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/90">
                {[
                  'Small class sizes for personalised attention',
                  'Safe, stimulating, and technology-enabled environment',
                  'Highly responsive facilitators trained in early childhood development',
                  'A seamless pathway into Cambridge Early Years and Primary',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Ages 4–5+
            </p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Early Years (EY2 & EY3)
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our Early Years programme is thoughtfully designed around the six Cambridge Early
              Years developmental domains, ensuring that each child develops holistically —
              academically, socially, emotionally, and physically.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {earlyYearsDomains.map((domain) => (
              <DomainCard key={domain.title} title={domain.title} items={domain.items} />
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 font-heading">
                Our Learning Approach
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700">
                {[
                  'Integrated – subjects are connected, not isolated',
                  'Experiential – children learn by doing and exploring',
                  'Child-Centred – every learner is supported at their level',
                  'Future-Focused – early exposure to technology, languages, and critical thinking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 font-heading">Why It Matters</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-700">
                {[
                  'Builds strong literacy and numeracy foundations',
                  'Develops confidence and independence',
                  'Gives early exposure to technology and global perspectives',
                  'Supports a seamless transition into Cambridge Primary education',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Ages 5–11
            </p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Cambridge Primary
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our Primary Programme moves learners beyond foundation into deep thinking,
              problem-solving, academic mastery, and global awareness. Children are developed as
              thinkers, innovators, communicators, and future-ready learners through a rich
              Cambridge-aligned curriculum and TechTots signature enhancements.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-amber-100 bg-[#fffaf4] p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 font-heading">
                What Primary Learners Experience
              </h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-gray-700">
                {primaryHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
              <h3 className="text-2xl font-bold font-heading">The Primary Difference</h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-white/90">
                {[
                  'Early mastery of technology through coding, robotics, and AI exposure',
                  'A small-class advantage that allows personalised support and accelerated learning',
                  'A deep thinking culture focused on critical thinking, logic, and inquiry',
                  'Assessment for mastery with clear, skill-based progress tracking',
                  'Global readiness through communication, confidence, and cultural awareness',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Why Our Programmes Stand Out
            </p>
            <h2 className="text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Cambridge Excellence. TechTots Innovation.
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Our curriculum combines international academic standards with a modern,
              child-focused learning experience. Children benefit from strong literacy and
              numeracy foundations, meaningful technology exposure, inquiry-based learning,
              creativity, and personal growth.
            </p>
            <p className="text-lg leading-8 text-gray-600">
              We are not simply helping children pass through school. We are helping them become
              thinkers, innovators, communicators, and confident young people prepared for the
              future.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Strong phonics, literacy, and numeracy foundations',
              'Inquiry-based and experiential learning',
              'AI, computing, and digital literacy integration',
              'Small classes for personalised support',
              'Creative arts, music, and physical development',
              'Confidence, independence, and global readiness',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white bg-white p-6 shadow-sm"
              >
                <p className="text-base font-medium leading-7 text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-heading md:text-5xl">
            Beyond the Classroom — Where Talents Come Alive
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Education at TechTots goes beyond formal lessons. Our enrichment programmes are
            designed to help children explore their talents, strengthen their confidence, and
            develop practical skills across the arts, technology, wellbeing, sports, and outdoor
            learning.
          </p>

          <div className="mt-16 space-y-10">
            {enrichmentProgrammes.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl p-8 shadow-sm"
                style={{ backgroundColor: section.bg }}
              >
                <h3
                  className={`mb-8 text-2xl font-bold md:text-3xl ${
                    section.textWhite ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {section.title}
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white p-5 text-base font-medium text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
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

      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold text-white font-heading md:text-5xl">
            More Than a School — A Foundation for Life
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/85">
            At TechTots, every programme is built to develop confident learners, strong thinkers,
            creative problem-solvers, and children who are ready for a changing world.
          </p>
          <p className="mt-4 text-lg leading-8 text-white/85">
            From their first classroom experiences to the deeper academic journey of primary
            education, every child is guided with care, purpose, and excellence.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/admissions" className="btn btn-primary px-8 py-4">
              Begin Your Child’s Journey
            </Link>
            <Link
              href="/contact"
              className="btn border border-white/20 bg-white/10 px-8 py-4 text-white hover:bg-white/20"
            >
              Speak With Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}