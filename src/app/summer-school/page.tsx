import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import {
  SparklesIcon,
  CalendarDaysIcon,
  MapPinIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Summer School 2026',
  description:
    'TechTots Summer School 2026 is a transformational holiday programme for ages 3–11, combining strong academics, creativity, confidence-building, and future-ready skills.',
};

const highlights = [
  'Cambridge-aligned learning approach',
  'Small class sizes with personalised attention',
  'Hands-on, practical learning experiences',
  'Safe, premium, technology-enabled environment',
  'Experienced and caring facilitators',
];

const earlyYearsAreas = [
  'Phonics Development',
  'Early Numeracy Skills',
  'Reading Readiness',
  'Early Science Exploration',
  'Creative Expression (Art, Music & Movement)',
];

const earlyYearsGains = [
  'Strong language and communication skills',
  'Early reading and numeracy confidence',
  'Curiosity and a love for learning',
  'Social and emotional development',
];

const primaryAreas = [
  'Robotics, Coding & Artificial Intelligence',
  'Mathematics Mastery',
  'Entrepreneurship & Money Skills',
  'Public Speaking & Leadership',
  'Reading & Writing Series',
  'Applied Science',
];

const primaryGains = [
  'Stronger academic confidence',
  'Advanced problem-solving and critical thinking skills',
  'Early exposure to AI and digital technologies',
  'Confident communication and leadership abilities',
];

const enrolSteps = [
  'Contact us via WhatsApp or phone',
  'Receive programme details and registration support',
  'Confirm enrolment',
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Compact Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('/images/summer-school-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3150]/95 via-[#123f66]/92 to-[#081827]/95" />

        <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <SparklesIcon className="size-4" />
              <span>Now Enrolling for Summer 2026</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white font-heading md:text-6xl">
              Summer School 2026
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/85 md:text-xl">
              A transformational summer experience for future-ready learners.
            </p>

            <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15">
                <div className="mb-2 flex items-center justify-center gap-2 text-blue-200">
                  <CalendarDaysIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold">Dates</span>
                </div>
                <p className="text-sm leading-6 text-white">
                  13th July – 17th August 2026
                  <br />
                  Monday – Friday
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15">
                <div className="mb-2 flex items-center justify-center gap-2 text-blue-200">
                  <AcademicCapIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold">Age Groups</span>
                </div>
                <p className="text-sm leading-6 text-white">
                  Early Years: 3–5
                  <br />
                  Primary: 5–11
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15">
                <div className="mb-2 flex items-center justify-center gap-2 text-blue-200">
                  <CurrencyDollarIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold">Fees</span>
                </div>
                <p className="text-sm leading-6 text-white">
                  GHS 6,000 / GHS 7,000
                  <br />
                  Lunch included
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Intro + Flyer */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  A Summer That Changes Everything
                </p>

                <h2 className="text-4xl font-bold text-gray-900 font-heading md:text-5xl">
                  Two Specialised Tracks. One Premium Learning Experience.
                </h2>

                <p className="text-lg leading-8 text-gray-600">
                  At TechTots, summer is not just a break from school. It is a strategic learning window designed to
                  accelerate your child’s growth, confidence, and future skills through engaging, high-quality
                  learning experiences.
                </p>

                <p className="text-lg leading-8 text-gray-600">
                  We offer two carefully designed tracks tailored to each age group: an Early Years programme that
                  builds strong foundations through structured, engaging learning, and a Primary programme that
                  develops academic confidence, innovation, leadership, and future-ready thinking.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://wa.me/233256124133"
                  className="btn btn-primary px-8 py-4 text-center transition hover:-translate-y-0.5"
                  target="_blank"
                >
                  Register via WhatsApp
                </Link>

                <Link
                  href="/contact"
                  className="btn border border-slate-300 px-8 py-4 text-center text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400"
                >
                  Enquire Now
                </Link>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm transition hover:shadow-md">
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                  Limited Enrolment
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  To maintain our boutique, high-quality learning experience, spaces are strictly limited. Once we are
                  full, enrolment closes.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-3 shadow-2xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
                <img
                  src="/images/summer-school-flyer.jpeg"
                  alt="TechTots Summer School 2026 flyer"
                  className="w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Summer Tracks
            </p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Carefully Designed for Each Stage of Growth
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="flex h-full flex-col rounded-[2rem] border border-sky-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                  Ages 3–5 • Early Years
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 font-heading">
                    Building Strong Foundations for Lifelong Learning
                  </h3>
                  <p className="mt-4 text-base leading-8 text-gray-600">
                    Our Early Years Summer Programme focuses on foundational development through engaging, play-based,
                    and structured learning experiences that help young learners grow in confidence, communication,
                    curiosity, and readiness for the next stage.
                  </p>
                </div>

                <div className="rounded-2xl bg-sky-50/70 p-6">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
                    Programme Areas
                  </h4>
                  <ul className="space-y-3">
                    {earlyYearsAreas.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                        <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-6">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
                    What Your Child Gains
                  </h4>
                  <ul className="space-y-3">
                    {earlyYearsGains.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto rounded-2xl bg-slate-900 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                    Programme Fee
                  </p>
                  <p className="mt-2 text-3xl font-bold">GHS 6,000</p>
                  <p className="mt-2 text-sm text-white/80">Lunch included.</p>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-[2rem] border border-amber-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                  Ages 5–11 • Primary
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 font-heading">
                    For Curious Minds Ready to Build, Think, and Lead
                  </h3>
                  <p className="mt-4 text-base leading-8 text-gray-600">
                    Our Primary Summer Programme blends academic mastery with future-focused innovation, giving
                    learners a strong advantage ahead of the new academic year through a rigorous and inspiring mix of
                    academics, technology, leadership, and real-world thinking.
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50/70 p-6">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
                    Programme Areas
                  </h4>
                  <ul className="space-y-3">
                    {primaryAreas.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                        <RocketLaunchIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-6">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
                    What Your Child Gains
                  </h4>
                  <ul className="space-y-3">
                    {primaryGains.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto rounded-2xl bg-slate-900 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                    Programme Fee
                  </p>
                  <p className="mt-2 text-3xl font-bold">GHS 7,000</p>
                  <p className="mt-2 text-sm text-white/80">Lunch included.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Why Choose + Essentials */}
      <section className="bg-white py-20">
        <div className="container mx-auto grid items-start gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Why Families Choose TechTots Summer School
            </p>

            <h2 className="text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Premium Learning. Real Growth. Lasting Confidence.
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              TechTots Summer School is designed for families who want more than supervision during the holidays. It
              is for parents who want their children to strengthen key academic skills, build confidence, explore
              innovation, and return to school more prepared, more capable, and more inspired.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-medium leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-[#113b5c] to-[#1c5b8f] p-8 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-3xl font-bold font-heading">Programme Essentials</h3>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <CalendarDaysIcon className="mt-1 h-6 w-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Duration</p>
                  <p className="text-white/85">13th July – 17th August 2026 (Monday – Friday)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPinIcon className="mt-1 h-6 w-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-white/85">
                    TechTots International School
                    <br />
                    Near ACP Estate, Pokuase, Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CurrencyDollarIcon className="mt-1 h-6 w-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Fees</p>
                  <p className="text-white/85">Early Years: GHS 6,000</p>
                  <p className="text-white/85">Primary: GHS 7,000</p>
                  <p className="text-white/85">Lunch included</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                Limited Slots Available
              </p>
              <p className="mt-2 text-sm leading-7 text-white/90">
                To preserve our boutique and high-quality learning environment, enrolment is intentionally limited.
                Early registration is strongly advised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrolment Steps */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            How to Enrol
          </p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
            Secure Your Child’s Place in 3 Simple Steps
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We have made the enrolment process simple and parent-friendly so you can move quickly while spaces are
            still available.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {enrolSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {index + 1}
                </div>
                <p className="mt-6 text-lg font-semibold text-gray-900">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/233256124133"
              className="btn btn-primary px-8 py-4"
              target="_blank"
            >
              Chat on WhatsApp
            </Link>
            <Link href="tel:+233256124133" className="btn border border-slate-300 px-8 py-4 text-slate-800">
              Call +233 256 124 133
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Tech-Ready Tots. World-Ready Kids.
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white font-heading md:text-5xl">
            A Summer That Builds Thinkers, Creators, and Confident Learners
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/85">
            At TechTots, we do not just keep children busy during the holiday. We create meaningful learning
            experiences that help them grow academically, socially, creatively, and confidently.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/233256124133"
              className="btn btn-primary px-8 py-4"
              target="_blank"
            >
              Register Now
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

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/233256124133"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
      >
        <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
        Register via WhatsApp
      </a>
    </main>
  );
}