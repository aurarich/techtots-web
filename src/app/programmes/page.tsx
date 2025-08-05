import React from "react";
import Link from "next/link";
import HeaderTag from "@/components/ui/header-tag";
import { ourProgrammes } from "@/data";
import AnimatedWave from "@/components/Wave";
import { SingleWaveSvg } from "@/components/SVGBackground";

export default function ProgrammesPage() {
  return (
    <>
	<section className="relative py-20 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center flex flex-col justify-center gap-y-12">
            <HeaderTag title="Our Learning Journey" className="w-fit mx-auto" />
            <h1 className="mb-4 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              From Little Seeds to Trailblazers
            </h1>
            <p className="text-xl text-gray-600 -mb-4">
              At TechTots, every class name is thoughtfully chosen to celebrate
              growth, curiosity, and discovery. Our inspiring learning pathway
              guides children step by step from their earliest experiences to
              confident, inquisitive learners ready for the future.
            </p>
          </div>
          
        </div>
      </section>

	<SingleWaveSvg className="rotate-180 fill-secondary h-32 w-full" />
	  <section className="relative overflow-hidden py-20 pb-40 bg-gradient-to-b from-secondary to-primary">
		<div className="container">
			<div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {ourProgrammes.map((prog, idx) => (
              <div
                key={idx}
                className={`relative p-10 flex flex-col gap-10 justify-between overflow-hidden duration-500 transition-all backdrop-blur-md shadow-secondary/10 border rounded-lg bg-white border-${prog.color}/10 hover:scale-105 group`}
              >
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-extrabold tracking-tight text-primary font-heading">
                    {prog.title}
                  </h2>
                  <p className="mb-2 text-gray-600 font-semibold">
                    Age Group: {prog.ageGroup}
                  </p>
                  <div className="mb-4">
                    <span className="block mb-1 text-sm font-bold text-secondary">
                      Classes:
                    </span>
                    <ul className="ml-4 list-disc text-sm text-gray-700">
                      {prog.classes.map((cls, i) => (
                        <li key={i}>{cls.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <span className="block mb-1 text-sm font-bold text-secondary">
                      Milestones:
                    </span>
                    <ul className="ml-4 list-disc text-sm text-gray-700">
                      {prog.milestones.map((ms, i) => (
                        <li key={i}>{ms}</li>
                      ))}
                    </ul>
                  </div>
                  {prog.future && (
                    <div className="mt-2 text-xs text-yellow-600 font-semibold">
                      (Planned for future expansion)
                    </div>
                  )}
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/programmes/${prog.slug}`}
                    className={`w-full text-center btn ${prog.colors.buttonColor}`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
		</div>
	  </section>
	</>
  );
}
