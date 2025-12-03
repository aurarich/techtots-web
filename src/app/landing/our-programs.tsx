import React from 'react'
import { ourProgrammes } from '../../data';
import Link from 'next/link';

const OurProgrammes = () => {
  return (
    <>
    <section className="relative overflow-hidden section bg-white">

        <div className="container relative z-10">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 font-heading md:text-5xl">
              Our Programs
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Tailored educational pathways for every stage of early
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {ourProgrammes.map(({colors, ...program}, index) => {
              const iconColor = `text-${program.color}`;
              const bgColor =
                program.color === "beige"
                  ? `bg-${program.color}/80`
                  : `bg-${program.color}/20`;
              const btnColor = `btn-${program.btnColor}`;
              return (
                <div
                  key={index}
                  className={`card relative group rounded-2xl border border-secondary 
                  transition-all duration-300 flex flex-col gap-12 p-8 before:absolute before:left-0
                  before:-bottom-10 before:w-4/5 hover:before:bg-gradient-to-r before:from-white 
                  before:via-gray-300 before:to-white before:h-5 before:rounded-t-[50%] 
                  before:rounded-b-[50%] before:bg-white before:transition-all before:duration-1000 
                  before:mx-auto before:right-0`} 
                >
                  <div className="text-center space-y-5">
                    <div className={`flex items-center justify-center size-14 mx-auto rounded-full ${bgColor}`}>
                      <program.icon className={`size-7 ${iconColor}`} />
                    </div>
                    <h3 className="w-full text-2xl font-semibold text-gray-900 font-heading">
                      {program.title}
                    </h3>
                    <p className="text-center text-gray-600">
                      {program.short_description}
                    </p>
                  </div>
                  <div className="mx-auto mt-auto">
                    <Link
                      href={`/programmes/${program.slug}`}
                      className={`text-center btn ${btnColor}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default OurProgrammes