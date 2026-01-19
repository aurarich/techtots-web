import React from "react";
import Link from "next/link";
import HeaderTag from "@/components/ui/header-tag";
import { ourProgrammes } from "../../../data";
import { notFound } from "next/navigation";
import { Bubbles, Milestone, Shapes } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  // fetch programme information
  const programme = ourProgrammes.find((item) => item.slug === slug);

  return {
    title: programme?.title,
    description: programme?.description,
  };
}

export async function generateStaticParams() {
  return ourProgrammes.map((pg) => ({
    slug: pg.slug,
  }));
}

export default function ProgrammeDetails({ params, searchParams }: Props) {
  const programme = ourProgrammes.find(
    async (item) => item.slug === (await params).slug
  );

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
              {programme.slug}
            </h1>
            {programme.short_description && (
              <p className="max-w-xl mx-auto text-base md:text-lg text-gray-300 mb-4">
                {programme.short_description}
              </p>
            )}
            <p className="text-lg mb-2 text-gray-300">
              Age Group: <span>{programme.ageGroup}</span>
            </p>
          </div>
        </div>
      </section>

      {/* <section className="space-y-20 bg-gray-100">
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
              href="/enrichment"
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
      </section> */}


      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ====================== PRIMARY 1 – PATHFINDERS ====================== */}
        <section className="space-y-20 bg-gray-100 p-8 rounded-xl shadow-lg">
          {/* Header */}
          <div className="relative mb-6">
            <h1 className="text-xl font-bold text-sky-700">Primary 1 – Pioneers</h1>
            <span className="block h-1 w-20 bg-sky-500 mt-1 rounded"></span>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Overview
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <p>{programme.description}</p>
          </div>

          {/* Classes */}
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
                  className="px-4 py-1 rounded-full border border-secondary/20 text-black text-sm md:text-base shadow-sm bg-white"
                >
                  {cls.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Milestones */}
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
                  className="relative flex cursor-default items-start gap-3 p-4 rounded-md bg-white shadow-md text-gray-800 text-base"
                >
                  <Bubbles className="size-5 text-primary" />
                  <span>{ms}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link href="/enrichment" className="btn btn-secondary text-center py-3 shadow-md">
              ← All Programmes
            </Link>
            <Link href="/admissions" className="btn btn-primary text-center py-3 shadow-md">
              Apply Now
            </Link>
          </div>
        </section>

        {/* ====================== PRIMARY 2 – NAVIGATORS ====================== */}
        <section className="space-y-20 bg-gray-100 p-8 rounded-xl shadow-lg">
          {/* Header */}
          <div className="relative mb-6">
            <h1 className="text-xl font-bold text-sky-700">Primary 2 – Navigators</h1>
            <span className="block h-1 w-20 bg-sky-500 mt-1 rounded"></span>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Overview
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <p>{programme.description2}</p>
          </div>

          {/* Classes */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Classes
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="flex flex-wrap gap-2 md:gap-4">
              {programme.classes2?.map((cls, i) => (
                <li
                  key={i}
                  className="px-4 py-1 rounded-full border border-secondary/20 text-black text-sm md:text-base shadow-sm bg-white"
                >
                  {cls.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Milestones */}
          <div className="space-y-5">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Milestone className="size-5" /> Programme Milestones
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="grid gap-5 md:grid-cols-2">
              {programme.milestones2?.map((ms, i) => (
                <li
                  key={i}
                  className="relative flex cursor-default items-start gap-3 p-4 rounded-md bg-white shadow-md text-gray-800 text-base"
                >
                  <Bubbles className="size-5 text-primary" />
                  <span>{ms}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link href="/enrichment" className="btn btn-secondary text-center py-3 shadow-md">
              ← All Programmes
            </Link>
            <Link href="/admissions" className="btn btn-primary text-center py-3 shadow-md">
              Apply Now
            </Link>
          </div>
        </section>

      </div>

       <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ====================== Primary 3 – Inventors ====================== */}
        <section className="space-y-20 bg-gray-100 p-8 rounded-xl shadow-lg">
          {/* Header */}
          <div className="relative mb-6">
            <h1 className="text-xl font-bold text-sky-700">Primary 3 – Inventors</h1>
            <span className="block h-1 w-20 bg-sky-500 mt-1 rounded"></span>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Overview
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <p>{programme.description3}</p>
          </div>

          {/* Classes */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Classes
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="flex flex-wrap gap-2 md:gap-4">
              {programme.classes3?.map((cls, i) => (
                <li
                  key={i}
                  className="px-4 py-1 rounded-full border border-secondary/20 text-black text-sm md:text-base shadow-sm bg-white"
                >
                  {cls.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Milestones */}
          <div className="space-y-5">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Milestone className="size-5" /> Programme Milestones
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="grid gap-5 md:grid-cols-2">
              {programme.milestones3?.map((ms, i) => (
                <li
                  key={i}
                  className="relative flex cursor-default items-start gap-3 p-4 rounded-md bg-white shadow-md text-gray-800 text-base"
                >
                  <Bubbles className="size-5 text-primary" />
                  <span>{ms}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link href="/enrichment" className="btn btn-secondary text-center py-3 shadow-md">
              ← All Programmes
            </Link>
            <Link href="/admissions" className="btn btn-primary text-center py-3 shadow-md">
              Apply Now
            </Link>
          </div>
        </section>

        {/* ====================== Primary 4 – Visionaries ====================== */}
        <section className="space-y-20 bg-gray-100 p-8 rounded-xl shadow-lg">
          {/* Header */}
          <div className="relative mb-6">
            <h1 className="text-xl font-bold text-sky-700">Primary 4 – Visionaries</h1>
            <span className="block h-1 w-20 bg-sky-500 mt-1 rounded"></span>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Overview
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <p>{programme.description4}</p>
          </div>

          {/* Classes */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Classes
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="flex flex-wrap gap-2 md:gap-4">
              {programme.classes4?.map((cls, i) => (
                <li
                  key={i}
                  className="px-4 py-1 rounded-full border border-secondary/20 text-black text-sm md:text-base shadow-sm bg-white"
                >
                  {cls.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Milestones */}
          <div className="space-y-5">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Milestone className="size-5" /> Programme Milestones
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="grid gap-5 md:grid-cols-2">
              {programme.milestones4?.map((ms, i) => (
                <li
                  key={i}
                  className="relative flex cursor-default items-start gap-3 p-4 rounded-md bg-white shadow-md text-gray-800 text-base"
                >
                  <Bubbles className="size-5 text-primary" />
                  <span>{ms}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link href="/enrichment" className="btn btn-secondary text-center py-3 shadow-md">
              ← All Programmes
            </Link>
            <Link href="/admissions" className="btn btn-primary text-center py-3 shadow-md">
              Apply Now
            </Link>
          </div>
        </section>

      </div>


       <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ====================== Primary 5 – Luminaries ====================== */}
        <section className="space-y-20 bg-gray-100 p-8 rounded-xl shadow-lg">
          {/* Header */}
          <div className="relative mb-6">
            <h1 className="text-xl font-bold text-sky-700">Primary 5 – Luminaries</h1>
            <span className="block h-1 w-20 bg-sky-500 mt-1 rounded"></span>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Overview
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <p>{programme.description}</p>
          </div>

          {/* Classes */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Classes
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="flex flex-wrap gap-2 md:gap-4">
              {programme.classes5?.map((cls, i) => (
                <li
                  key={i}
                  className="px-4 py-1 rounded-full border border-secondary/20 text-black text-sm md:text-base shadow-sm bg-white"
                >
                  {cls.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Milestones */}
          <div className="space-y-5">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Milestone className="size-5" /> Programme Milestones
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="grid gap-5 md:grid-cols-2">
              {programme.milestones5?.map((ms, i) => (
                <li
                  key={i}
                  className="relative flex cursor-default items-start gap-3 p-4 rounded-md bg-white shadow-md text-gray-800 text-base"
                >
                  <Bubbles className="size-5 text-primary" />
                  <span>{ms}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link href="/enrichment" className="btn btn-secondary text-center py-3 shadow-md">
              ← All Programmes
            </Link>
            <Link href="/admissions" className="btn btn-primary text-center py-3 shadow-md">
              Apply Now
            </Link>
          </div>
        </section>

        {/* ====================== Primary 6 – Ambassadors ====================== */}
        <section className="space-y-20 bg-gray-100 p-8 rounded-xl shadow-lg">
          {/* Header */}
          <div className="relative mb-6">
            <h1 className="text-xl font-bold text-sky-700">Primary 6 – Ambassadors</h1>
            <span className="block h-1 w-20 bg-sky-500 mt-1 rounded"></span>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Overview
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <p>{programme.description6}</p>
          </div>

          {/* Classes */}
          <div className="space-y-4">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Shapes className="size-5" /> Classes
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="flex flex-wrap gap-2 md:gap-4">
              {programme.classes6?.map((cls, i) => (
                <li
                  key={i}
                  className="px-4 py-1 rounded-full border border-secondary/20 text-black text-sm md:text-base shadow-sm bg-white"
                >
                  {cls.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Milestones */}
          <div className="space-y-5">
            <div className="relative">
              <h2 className="text-base w-fit flex items-center gap-2 bg-sky-500 text-white p-2 px-3 rounded-t-lg">
                <Milestone className="size-5" /> Programme Milestones
              </h2>
              <span className="block absolute h-px w-full bg-sky-500 bottom-0"></span>
            </div>
            <ul className="grid gap-5 md:grid-cols-2">
              {programme.milestones6?.map((ms, i) => (
                <li
                  key={i}
                  className="relative flex cursor-default items-start gap-3 p-4 rounded-md bg-white shadow-md text-gray-800 text-base"
                >
                  <Bubbles className="size-5 text-primary" />
                  <span>{ms}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <Link href="/enrichment" className="btn btn-secondary text-center py-3 shadow-md">
              ← All Programmes
            </Link>
            <Link href="/admissions" className="btn btn-primary text-center py-3 shadow-md">
              Apply Now
            </Link>
          </div>
        </section>

      </div>

    </div>
  );
}
