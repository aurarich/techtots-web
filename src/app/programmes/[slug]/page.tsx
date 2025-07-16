import React from "react";
import Link from "next/link";
import HeaderTag from "@/components/ui/header-tag";
import { ourProgrammes } from "@/data";
import { notFound } from "next/navigation";
import { Bubbles, Milestone, Shapes } from "lucide-react";

export async function generateStaticParams() {
  return ourProgrammes.map(pg => ({
    slug: pg.slug,
  }));
}

export default function ProgrammeDetails({ params }: { params: { slug: string } }) {
  const programme = ourProgrammes.find(item => item.slug === params.slug);

  if (!programme) {
    notFound();
  }

  return (
    <section className="relative py-16 overflow-hidden flex-1">
      <div className="container max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-12">
          <HeaderTag title="Programme Details" />
          <div className="details space-y-3">
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-primary drop-shadow-lg mb-2">
              {programme.title}
            </h1>
            {programme.description && (
              <p className="max-w-xl mx-auto text-base md:text-lg text-gray-700 mb-4">
                {programme.description}
              </p>
            )}
            <p className="text-lg md:text-xl text-gray-600 mb-2 font-semibold">
              Age Group:{" "}
              <span className="text-beige">
                {programme.ageGroup}
              </span>
            </p>
            {programme.future && (
              <div className="inline-block px-3 py-1 text-xs font-bold text-yellow-700 bg-yellow-100 rounded-full animate-pulse">
                Planned for future expansion
              </div>
            )}
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="mb-2 text-xl font-bold flex items-center gap-2">
            <Shapes className="size-6" /> Classes
          </h2>
          <ul className="flex flex-wrap gap-2 md:gap-4">
            {programme.classes.map((cls, i) => (
              <li
                key={i}
                className="px-4 py-1 cursor-default rounded-full text-sky-500 font-semibold text-sm md:text-base shadow-sm border border-secondary/20 hover:scale-105 transition-transform"
              >
                {cls.name} -- <span>{cls.ageGroup}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h2 className="mb-2 text-xl font-semibold text-primary flex items-center gap-2">
            <Milestone className="size-6" /> Milestones
          </h2>
          <ul className="grid gap-3 md:gap-4 md:grid-cols-2">
            {programme.milestones.map((ms, i) => (
              <li
                key={i}
                className="flex cursor-default items-start gap-3 p-4 rounded-md bg-gray-100 hover:bg-primary/10 transition-colors text-gray-800 text-base"
              >
                <Bubbles className="size-5" />
                <span>{ms}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link href="/programmes" className="btn btn-secondary text-center">
            ← Back to All Programmes
          </Link>
          <Link
            href="/admissions"
            className="btn btn-primary text-center animate-bounce"
          >
            Apply Now
          </Link>
        </div>
      </div>
      {/* Playful background blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full filter blur-2xl opacity-60 animate-blob" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full filter blur-2xl opacity-60 animate-blob animation-delay-2000" />
    </section>
  );
}
