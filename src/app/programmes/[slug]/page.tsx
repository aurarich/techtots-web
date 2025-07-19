"use client";
import React from "react";
import Link from "next/link";
import HeaderTag from "@/components/ui/header-tag";
import { ourProgrammes } from "@/data";
import { notFound, useParams } from "next/navigation";
import { Bubbles, Milestone, Shapes } from "lucide-react";

export default function ProgrammeDetails() {
  const { slug } = useParams<{ slug: string }>();

  const programme = ourProgrammes.find((item) => item.slug === slug);
  if (!programme) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden flex-1">
      <section
        aria-label="programme-details"
        className="relative text-center py-20 min-h-96 bg-[url('/images/kids-with-computer.png')] bg-cover bg-top bg-no-repeat bg-scroll"
      >
        <div className="overlay absolute inset-0 bg-black/80 z-10"></div>
        <div className="relative content z-20 space-y-12">
          <Link href={"/programmes"}>
            <HeaderTag
              title="Programme Details"
              className="bg-white/80 hover:bg-white/90"
            />
          </Link>
          <div className="details space-y-5">
            <h1 className="text-3xl md:text-5xl font-extrabold font-heading text-white drop-shadow-lg mb-2">
              {programme.title}
            </h1>
            {programme.description && (
              <p className="max-w-xl mx-auto text-base md:text-lg text-gray-300 mb-4">
                {programme.description}
              </p>
            )}
            <p className="text-lg mb-2 text-gray-300">
              Age Group: <span>{programme.ageGroup}</span>
            </p>
            {programme.future && (
              <div
                className="inline-block px-3 py-1 
              text-xs font-bold text-yellow-700 
              bg-yellow-100 rounded-full animate-pulse"
              >
                Planned for future expansion
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="space-y-20 bg-gray-100">
        <div className="container max-w-3xl py-16 space-y-16">
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Overview
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <div className="">
              <p>{programme.description}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Classes
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="flex flex-wrap gap-2 md:gap-4">
              {programme.classes.map((cls, i) => (
                <li
                  key={i}
                  className="px-4 py-1 btn cursor-default rounded-full 
                  text-black text-sm md:text-base shadow-sm border 
                  border-secondary/20 transition-all"
                >
                  {cls.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Milestone className="size-5" /> Programme Milestones
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="grid gap-5 md:grid-cols-2">
              {programme.milestones.map((ms, i) => (
                <li
                  key={i}
                  className={`relative flex cursor-default w-fit 
                  items-start gap-3 p-4 rounded-md bg-gray-200 hover:bg-primary/10 
                  transition-colors text-gray-800 text-base z-[999]`}
                >
                  <Bubbles className="size-5 text-primary" />
                  <span>{ms}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link
              href="/programmes"
              className="btn btn-secondary text-center py-3"
            >
              ← All Programmes
            </Link>
            <Link
              href="/admissions"
              className="btn btn-primary text-center py-3"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
      </div>
  );
}
