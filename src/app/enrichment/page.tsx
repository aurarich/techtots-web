import HeaderTag from '@/components/ui/header-tag';
import { SVGBlobCard } from "@/components/SVGBackground";
import {SparklesIcon} from "@heroicons/react/24/outline";
const WaveDivider = () => (
    <div className="absolute -bottom-8 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 100" className="w-full h-24">
            <path
                fill="#ffffff"
                d="M0,64L40,58.7C80,53,160,43,240,58.7C320,75,400,117,480,117.3C560,117,640,75,720,74.7C800,75,880,117,960,128C1040,139,1120,117,1200,106.7C1280,96,1360,96,1400,96L1440,96L1440,160L0,160Z"
            />
        </svg>
    </div>
);


export default function Page() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center py-20 min-h-96 h-full overflow-hidden bg-[url('/images/campus-2.jpeg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70" />
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto space-y-8 text-center">
                        <div className="inline-flex bg-white/30 items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/40">
                            <SparklesIcon className="size-4 text-white" />
                            <span className="text-white">Our Enrichment Programmes</span>
                        </div>
                        <h1 className="text-4xl font-bold leading-tight text-white font-heading md:text-5xl">
                            TechTots Enrichment Programmes
                        </h1>
                        <p className="text-xl text-white/90">
                            Begin your child's journey towards a future of innovation and
                            excellence
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-blue">
                <div className="container max-w-7xl mx-auto px-4 space-y-32">

                    {/* 🎨 Creative & Expressive Arts */}
                    <div className="relative bg-[#f1f8fd] p-8 rounded-xl shadow-md">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 justify-center flex">Creative & Expressive Arts</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "Art & Craft",
                                "Music Lessons – Piano",
                                "Music Lessons – Violin",
                                "Dance & Movement",
                                "Drama & Storytelling Club"
                            ].map(item => (
                                <div
                                    key={item}
                                    className="p-4 bg-white rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:animate-shake hover:cursor-pointer">
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* 🤖 Technology & Innovation */}
                    <div className="relative bg-[hsl(29.52deg_63.64%_80.59%)] p-8 rounded-xl shadow-md">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 justify-center flex">Technology & Innovation</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "Robotics & Coding Club",
                                "AI Explorers Club",
                                "Digital Literacy"
                            ].map(item => (
                                <div
                                    key={item}
                                    className="p-4 bg-white rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:animate-shake hover:cursor-pointer">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🏀 Sports & Physical Development */}
                    <div className="relative bg-[#fbf5ef] p-8 rounded-xl shadow-md">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 justify-center flex">Sports & Physical Development</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "Mini Tennis",
                                "Basketball Clinic",
                                "Football Academy",
                                "Cycling",
                                "Swimming Lessons (subject to facility availability)"
                            ].map(item => (
                                <div
                                    key={item}
                                    className="p-4 bg-white rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:animate-shake hover:cursor-pointer">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🌱 Nature & Sustainability */}
                    <div className="relative bg-[hsl(206.54deg_39.39%_25.88%)] p-8 rounded-xl shadow-md text-white">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 justify-center flex">Nature & Sustainability</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "Eco-Farm Gardening",
                                "Mini Golf on Eco Farm"
                            ].map(item => (
                                <div
                                    key={item}
                                    className="p-4 bg-white text-black rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:animate-shake hover:cursor-pointer">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wellbeing & Life Skills */}
                    <div className="bg-[#f0f1f2] p-8 rounded-xl shadow-md">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 justify-center flex"> Wellbeing & Life Skills</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "Mindfulness & Yoga",
                                "Etiquette & Social Skills Club",
                                "Language Club – French",
                                "Language Club – Dutch"
                            ].map(item => (
                                <div
                                    key={item}
                                    className="p-4 bg-white rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:animate-shake hover:cursor-pointer">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="mb-6 text-3xl font-bold text-gray-900 font-heading">
                            Ready to Begin Your Journey?
                        </h2>
                        <p className="mb-8 text-xl text-gray-600">
                            Take the first step towards your child's future at TechTots
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href="/contact"
                                className="px-8 py-4 text-lg font-medium text-white transition-colors rounded-lg bg-primary hover:bg-primary/90"
                            >
                                Apply Now
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 text-lg font-medium transition-colors rounded-lg border border-primary text-primary hover:bg-primary/10"
                            >
                                Schedule a Tour
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>


    )}