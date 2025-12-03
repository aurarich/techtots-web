import { SparklesIcon } from '@heroicons/react/24/outline';
import { ourProgrammes } from '../../data';
import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Programmes',
    description: 'Explore our diverse range of programmes designed to nurture young minds and foster innovation at TechTots International School.'
};

export default function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center py-20 min-h-96 h-full overflow-hidden bg-[url('/images/campus-2.jpeg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70" />
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto space-y-8 text-center">
                        <div className="inline-flex bg-white/30 items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/40">
                            <SparklesIcon className="size-4 text-white" />
                            <span className="text-white">{/*Our Programmes & Enrichment Programmes*/}our core & enrichment programmes</span>
                        </div>
                        <h1 className="text-4xl font-bold leading-tight text-white font-heading md:text-5xl">
                            Our Programmes
                        </h1>
                        <p className="text-xl text-white/90">
                            Begin your child's journey towards a future of innovation and excellence
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
                    <h2 className="text-4xl font-bold text-gray-900 font-heading md:text-5xl">
                        From Little Seeds to Trailblazers
                    </h2>
                    <p className="text-xl text-gray-600">
                        At TechTots, every class name is thoughtfully chosen to celebrate growth, curiosity, and discovery. Our inspiring learning pathway guides children step by step from their earliest experiences to confident, inquisitive learners ready for the future.
                    </p>
                </div>
            </section>

            {/* Programmes Section */}
            <section className="relative overflow-hidden py-20 pb-32 bg-gradient-to-b ">
                <div className="container px-4 mx-auto">
                    <div className="grid gap-10 md:grid-cols-2">
                        {ourProgrammes.map((prog, idx) => (
                            <div
                                key={idx}
                                className={`relative p-8 flex flex-col gap-6 justify-between overflow-hidden transition-all rounded-xl shadow-lg bg-white border-${prog.color}/10 hover:scale-105`}
                            >
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-2xl font-bold text-primary font-heading">
                                        {prog.title}
                                    </h2>
                                    <p className="text-gray-600 font-medium">Age Group: {prog.ageGroup}</p>

                                    <div>
                                        <span className="block text-sm font-bold text-secondary mb-1">Classes:</span>
                                        <ul className="list-disc list-inside text-sm text-gray-700">
                                            {prog.classes.map((cls, i) => (
                                                <li key={i}>{cls.name}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <span className="block text-sm font-bold text-secondary mb-1">Milestones:</span>
                                        <ul className="list-disc list-inside text-sm text-gray-700">
                                            {prog.milestones.map((ms, i) => (
                                                <li key={i}>{ms}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* <Link href={`/programmes/${prog.slug}`} className={`w-full text-center btn ${prog.colors.buttonColor}`}>
                                    Learn More
                                </Link> */}
                                {prog.title === "Cambridge Primary" && (
                                    <Link
                                        href={`/programmes/${prog.slug}`}
                                        className={`w-full text-center btn ${prog.colors.buttonColor}`}
                                    >
                                        Learn More
                                    </Link>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enrichment Programmes Section */}
            <section className="py-20 bg-blue">
                <div className="container max-w-7xl mx-auto px-4 text-center">
                    <h1 className="mb-12 text-4xl font-bold text-gray-900 font-heading md:text-5xl">Our Enrichment Programmes</h1>

                    <div className="space-y-16">
                        {[
                            {
                                title: 'Creative & Expressive Arts',
                                bg: '#f1f8fd',
                                items: [
                                    'Art & Craft',
                                    'Music Lessons – Piano',
                                    'Music Lessons – Violin',
                                    'Dance & Movement',
                                    'Drama & Storytelling Club'
                                ]
                            },
                            {
                                title: 'Technology & Innovation',
                                bg: 'hsl(29.52deg 63.64% 80.59%)',
                                items: [
                                    'Robotics & Coding Club',
                                    'AI Explorers Club',
                                    'Digital Literacy'
                                ]
                            },
                            {
                                title: 'Sports & Physical Development',
                                bg: '#fbf5ef',
                                items: [
                                    'Mini Tennis',
                                    'Basketball Clinic',
                                    'Football Academy',
                                    'Cycling',
                                    'Swimming Lessons (subject to facility availability)'
                                ]
                            },
                            {
                                title: 'Nature & Sustainability',
                                bg: 'hsl(206.54deg 39.39% 25.88%)',
                                items: [
                                    'Eco-Farm Gardening',
                                    'Mini Golf on Eco Farm'
                                ],
                                textWhite: true
                            },
                            {
                                title: 'Wellbeing & Life Skills',
                                bg: '#f0f1f2',
                                items: [
                                    'Mindfulness & Yoga',
                                    'Etiquette & Social Skills Club',
                                    'Language Club – French',
                                    'Language Club – Dutch'
                                ]
                            }
                        ].map((section, idx) => (
                            <div key={idx} className={`relative p-8 rounded-xl shadow-md`} style={{ backgroundColor: section.bg }}>
                                <h3 className={`text-2xl md:text-3xl font-semibold mb-6 ${section.textWhite ? 'text-white' : 'text-gray-800'} flex justify-center`}>{section.title}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {section.items.map(item => (
                                        <div
                                            key={item}
                                            className={`p-4 bg-white ${section.textWhite ? 'text-black' : ''} rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:animate-shake hover:cursor-pointer`}
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
        </main>
    );
}
