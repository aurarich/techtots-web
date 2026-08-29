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
  title: 'WonderReads 2026–2027',
  description:
    'WonderReads is TechTots’ structured reading comprehension and literacy development programme for learners aged 4–15, powered by Scholastic Early Bird and Literacy Pro.',
};

const highlights = [
  'Initial reading assessment and reading-level profiling',
  'Personalised reading targets and facilitator guidance',
  'Access to over 4,000 eBooks and reading resources',
  'Monthly physical and live online support sessions',
  'Ongoing progress monitoring and periodic reassessment',
];

const assessmentAreas = [
  'Initial reading assessment',
  'Reading-level profiling',
  'Lexile® measurement where applicable',
  'Identification of comprehension skills requiring development',
  'Personalised reading recommendations',
];

const assessmentGains = [
  'A clear understanding of the learner’s current reading level',
  'Appropriately challenging books and reading materials',
  'Targeted development of specific comprehension skills',
  'A personalised pathway for measurable reading growth',
];

const supportAreas = [
  'Monthly physical reading development sessions',
  'Monthly live online reading support sessions',
  'Guided reading and comprehension activities',
  'Vocabulary development and book conversations',
  'Individual reading targets and progress check-ins',
  'Recognition, certificates and reading achievement rewards',
];

const supportGains = [
  'Stronger reading comprehension',
  'Greater vocabulary and reading confidence',
  'Improved reading independence and consistency',
  'Clear, measurable progress throughout the programme',
];

const enrolSteps = [
  'Complete the WonderReads registration form',
  'Attend the physical onboarding and initial assessment',
  'Activate the learner account and begin the personalised reading journey',
];

const whatsapp =
  'https://wa.me/233256124133?text=Hello%20TechTots%2C%20I%20would%20like%20to%20register%20my%20child%20for%20WonderReads.';

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
              <span>Now Enrolling for 2026–2027</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white font-heading md:text-6xl">
              WonderReads 2026–2027
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/85 md:text-xl">
              TechTots Reading Comprehension & Literacy Development Programme
            </p>

            <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/15 px-5 py-2.5 text-sm font-semibold text-amber-100 backdrop-blur-sm">
              <AcademicCapIcon className="h-5 w-5" />
              <span>Powered by Scholastic Early Bird & Literacy Pro</span>
            </div>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
              Read. Understand. Grow.
            </p>

            <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15">
                <div className="mb-2 flex items-center justify-center gap-2 text-blue-200">
                  <CalendarDaysIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold">Programme Period</span>
                </div>
                <p className="text-sm leading-6 text-white">
                  20th September 2026
                  <br />
                  to 19th June 2027
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15">
                <div className="mb-2 flex items-center justify-center gap-2 text-blue-200">
                  <AcademicCapIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold">Age Group</span>
                </div>
                <p className="text-sm leading-6 text-white">
                  Learners aged 4–15
                  <br />
                  Personalised by reading level
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15">
                <div className="mb-2 flex items-center justify-center gap-2 text-blue-200">
                  <CurrencyDollarIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold">Programme Fee</span>
                </div>
                <p className="text-sm leading-6 text-white">
                  GHS 6,000
                  <br />
                  Full programme access
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
                  TechTots Reading Comprehension & Literacy Development Programme
                </p>

                <h2 className="text-4xl font-bold text-gray-900 font-heading md:text-5xl">
                  Personalised Reading. Deeper Understanding. Measurable Growth.
                </h2>

                <p className="text-lg leading-8 text-gray-600">
                  WonderReads is TechTots’ structured reading comprehension and literacy development programme,
                  designed to help learners become stronger, more confident and more independent readers.
                </p>

                <p className="text-lg leading-8 text-gray-600">
                  Powered by Scholastic Early Bird and Literacy Pro, the programme combines digital reading,
                  assessment, personalised book recommendations, guided comprehension support, progress monitoring
                  and facilitator-led sessions to give every learner a clear pathway for growth.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={whatsapp}
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
                  Remote-First, Supported Throughout
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Learners read from home using the Scholastic platforms and receive monthly physical and live online
                  support, personalised targets, progress monitoring and regular recognition.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-3 shadow-2xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
                <img
                  src="/images/summer2027.jpeg"
                  alt="TechTots WonderReads 2026–2027 programme flyer"
                  className="w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Components */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              The WonderReads Experience
            </p>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Assessment, Access, Guidance and Support
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="flex h-full flex-col rounded-[2rem] border border-sky-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                  Assessment • Profiling • Digital Library
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 font-heading">
                    Know Your Child’s Reading Level and What Comes Next
                  </h3>
                  <p className="mt-4 text-base leading-8 text-gray-600">
                    Every learner begins with onboarding and an initial reading assessment. The results identify the
                    learner’s current level, the comprehension skills requiring development and the right books and
                    level of challenge for continued growth.
                  </p>
                </div>

                <div className="rounded-2xl bg-sky-50/70 p-6">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
                    Assessment & Personalisation
                  </h4>
                  <ul className="space-y-3">
                    {assessmentAreas.map((item) => (
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
                    {assessmentGains.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto rounded-2xl bg-slate-900 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                    Digital Reading Access
                  </p>
                  <p className="mt-2 text-3xl font-bold">4,000+ eBooks</p>
                  <p className="mt-2 text-sm text-white/80">Powered by Scholastic Early Bird and Literacy Pro.</p>
                </div>
              </div>
            </article>

            <article className="flex h-full flex-col rounded-[2rem] border border-amber-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                  Physical • Online • At-Home Reading
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 font-heading">
                    Guided Support for Consistent, Measurable Growth
                  </h3>
                  <p className="mt-4 text-base leading-8 text-gray-600">
                    WonderReads combines regular at-home reading with monthly physical and live online support.
                    Facilitators use assessment information and platform data to guide reading, strengthen
                    comprehension and help every learner progress with confidence.
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50/70 p-6">
                  <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
                    Guided Support
                  </h4>
                  <ul className="space-y-3">
                    {supportAreas.map((item) => (
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
                    {supportGains.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto rounded-2xl bg-slate-900 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                    Full Programme Fee
                  </p>
                  <p className="mt-2 text-3xl font-bold">GHS 6,000</p>
                  <p className="mt-2 text-sm text-white/80">Assessment, platform access and support included.</p>
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
              Why Enrol in WonderReads?
            </p>

            <h2 className="text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              A Clear, Structured Pathway for Reading Growth
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              WonderReads is designed for families who want more than access to books. It gives learners a structured
              system for reading, understanding, practising and progressing, supported by expert facilitators and
              measurable assessment information.
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
                  <p className="font-semibold">Programme Calendar</p>
                  <p className="text-white/85">
                    20th September 2026 – 19th June 2027 (monthly support sessions from September to June)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPinIcon className="mt-1 h-6 w-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Delivery Model</p>
                  <p className="text-white/85">
                    Remote-first at-home reading
                    <br />
                    Monthly physical and live online support
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CurrencyDollarIcon className="mt-1 h-6 w-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Programme Fee</p>
                  <p className="text-white/85">GHS 6,000 per learner</p>
                  <p className="text-white/85">For learners aged 4–15</p>
                  <p className="text-white/85">Full programme access and support included</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                Progress Monitoring & Recognition
              </p>
              <p className="mt-2 text-sm leading-7 text-white/90">
                Progress is monitored through assessment results, books completed, comprehension performance,
                reading frequency, facilitator observations and periodic reassessment. Learners are recognised for
                consistency, improvement, independence, achievement and outstanding effort.
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
            Begin Your Child’s WonderReads Journey in 3 Simple Steps
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Registration, onboarding and initial assessment ensure that every learner begins with the right account,
            reading level, books, targets and guidance.
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
            <Link href={whatsapp} className="btn btn-primary px-8 py-4" target="_blank">
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
            Stronger Readers. Deeper Understanding. Measurable Growth.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/85">
            WonderReads gives every learner access to personalised reading, thousands of digital books, expert
            facilitator guidance and a clear pathway to greater confidence and independence.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={whatsapp} className="btn btn-primary px-8 py-4" target="_blank">
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
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
      >
        <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
        Register via WhatsApp
      </a>
    </main>
  );
}
