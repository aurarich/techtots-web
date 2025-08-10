import HeaderTag from '@/components/ui/header-tag';
import { SVGBlobCard } from "@/components/SVGBackground";
import {SparklesIcon} from "@heroicons/react/24/outline";



export default function Page() {
    let arr;
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center py-20 min-h-96 h-full overflow-hidden bg-[url('/images/techtots1.png')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70" />
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto space-y-8 text-center">
                        <div className="inline-flex bg-white/30 items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/40">
                            <SparklesIcon className="size-4 text-white" />
                            <span className="text-white">Our Tuition & Fees</span>
                        </div>
                        <h1 className="text-4xl font-bold leading-tight text-white font-heading md:text-5xl">
                            Tuition & Fees
                        </h1>
                        <p className="text-xl text-white/90">
                            Below is a summary of our fees for the 2025–2026 Academic Year.
                        </p>

                    </div>
                </div>
            </section>
            <section className="bg-white">
                {/* Admission Fees */}
                <div className="relative bg-[#f1f8fd] py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">📑 Admission Fees <br/></h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Registration", amount: "$0" },
                                { title: "Admission Fees", amount: "$0" }
                            ].map(({ title, amount }) => (
                                <div key={title} className="p-6 bg-white rounded-xl shadow transition transform hover:scale-105 hover:shadow-lg text-center">
                                    <h4 className="font-bold text-lg">{title}</h4>
                                    <p className="text-gray-700">{amount}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-6 text-center italic">
                            TechTots operates a strictly no-refund policy. All fees paid are non-refundable and non-transferable.
                        </p>
                    </div>
                </div>

                {/* Tuition Fees */}
                <div className="relative bg-[#fbf5ef] py-12">
                    <div className="max-w-6xl mx-auto px-4 space-y-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">🎓 Tuition Fees</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Crèche / Preparatory Year / Cambridge Early Years – $1,000/term ($3,000 annually)",
                                "Cambridge Primary – $1,200/term ($3,600 annually)",
                                "10% discount for first 50 kids enrolled in 2025–2026",
                                "Siblings discount: 10% (2 kids), 15% (3+), +5% for annual payment"
                            ].map(item => (
                                <div key={item} className="p-5 bg-white rounded-xl shadow transition transform hover:scale-105 hover:shadow-lg">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 text-center italic">
                            Primary 1 only available for the 2025–2026 school year.
                        </p>
                    </div>
                </div>

                {/* Late Pickup */}
                <div className="relative bg-[hsl(206.54deg_39.39%_25.88%)] py-12 text-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">⏰ Late Pick-up</h3>
                        <div className="grid place-items-center">
                            <div className="p-6 bg-white text-black rounded-xl shadow transition transform hover:scale-105 hover:shadow-lg text-center w-full max-w-sm">
                                From 4:30 PM: $5 per hour
                            </div>
                        </div>
                    </div>
                </div>


                {/* Books & Materials */}
                <div className="relative bg-[#f1f8fd] py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">📘 Books & Learning Materials</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { label: "Pre EYS", fee: "$200 (Annual)" },
                                { label: "EYS", fee: "$300 (Annual)" },
                                { label: "Primary", fee: "$380 (Annual)" }
                            ].map(({ label, fee }) => (
                                <div key={label} className="p-5 bg-white rounded-xl shadow transition transform hover:scale-105 hover:shadow-lg text-center">
                                    <h4 className="font-bold">{label}</h4>
                                    <p>{fee}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Baby Essentials */}
                {/* Baby Essentials */}
                <div className="relative bg-[#f0f1f2] py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                            👶 Baby Essentials (Crèche Only)
                        </h3>
                        <div className="flex justify-center">
                            <div className="p-5 bg-white rounded-xl shadow transition transform hover:scale-105 hover:shadow-lg text-center w-full max-w-md">
                                Diapers, wipes, baby oil, etc. – $90 (termly)
                            </div>
                        </div>
                    </div>
                </div>


                {/* Feeding */}
                <div className="relative bg-[#fbf5ef] py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">🍽️ Feeding</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { label: "Lunch & Snack (EYS and below)", fee: "$200 (Termly)" },
                                { label: "Lunch & Snack (Primary)", fee: "$220 (Termly)" },
                                { label: "Breakfast (Optional - EYS)", fee: "$130" },
                                { label: "Breakfast (Optional - Primary)", fee: "$140" }
                            ].map(({ label, fee }) => (
                                <div key={label} className="p-5 bg-white rounded-xl shadow transition transform hover:scale-105 hover:shadow-lg text-center">
                                    <h4 className="font-bold">{label}</h4>
                                    <p>{fee}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Uniform */}
                <div className="relative bg-[#f1f8fd] py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">👕 Uniform & Outfits</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                "Uniform: ~$15",
                                "Apron: ~$10",
                                "Cardigan: ~$11",
                                "P.E. Kit: ~$14",
                                "Baby Bodysuit: ~$10"
                            ].map(item => (
                                <div key={item} className="p-5 bg-white rounded-xl shadow transition transform hover:scale-105 hover:shadow-lg text-center">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Note & Contact */}
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">📌 Important Notes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            "Tuition covers classroom instruction, core learning resources, and enrichment activities during school hours.",
                            "After school enrichment programmes and fees are billed separately.",
                            "Feeding and baby essentials are billed separately.",
                            "Payment plans and discounts for annual payment are available upon request.",
                            "Bring Your Own Device Programme: Children in EYS 2 and 3 must own a laptop.",
                            "All fees are quoted in US Dollars ($).Payment can be made in cedi per the current exchange rate. (USD 1= GHC 10.2)"
                        ].map((note, idx, arr) => (
                            <div
                                key={idx}
                                className={`p-5 bg-white rounded-xl shadow transition transform hover:scale-105 hover:shadow-lg text-sm text-gray-800 ${
                                    idx === arr.length - 1 ? 'font-bold' : ''
                                }`}
                            >
                                {note}
                            </div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="mt-10 text-center font-semibold text-gray-700">
                        📞 Phone: +233 25 6124133 <br />
                        📧 Email: techtots@vpwa.org
                    </div>
                </div>

            </section>

        </main>

    )}