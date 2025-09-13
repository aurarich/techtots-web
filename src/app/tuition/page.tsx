import { SparklesIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tuition & Fees",
    description: "Fee Structure – 2025/2026 Academic Year",
};

export default function Page() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center py-20 min-h-96 h-full overflow-hidden bg-[url('/images/techtots1.png')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70" />
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto space-y-8 text-center">
                        <div className="inline-flex bg-white/30 items-center gap-2 px-4 py-2 text-sm font-medium rounded-full">
                            <SparklesIcon className="size-4 text-white" />
                            <span className="text-white">Our Tuition & Fees</span>
                        </div>
                        <h1 className="text-4xl font-bold leading-tight text-white font-heading md:text-5xl">
                            Fee Structure – 2025/2026 Academic Year
                        </h1>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                {/* Tuition Fees */}
                <div className="relative bg-[#fbf5ef] py-12">
                    <div className="max-w-6xl mx-auto px-4 space-y-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                            🎓 Tuition Fees (per term / annually)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Crèche / Preparatory Year – $637 / GHC 6,500 per term | $1,911 / GHC 19,500 annually",
                                "Cambridge Early Years (EY) – $735 / GHC 7,500 per term | $2,205 / GHC 22,500 annually",
                                "Cambridge Primary – $833 / GHC 8,500 per term | $2,499 / GHC 25,500 annually",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="p-5 bg-white rounded-xl shadow transition transform hover:scale-105 hover:shadow-lg"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Discounts & Incentives */}
                <div className="relative bg-[#f1f8fd] py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
                            💡 Discounts & Incentives
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 hover:shadow-lg transition">
                                <h4 className="font-bold mb-3">Sibling Discount</h4>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li>5% off tuition for families with 2 children</li>
                                    <li>10% off tuition for families with 3 or more children</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-white rounded-xl shadow hover:scale-105 hover:shadow-lg transition">
                                <h4 className="font-bold mb-3">Annual Payment Discount</h4>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li>
                                        Additional 8% discount when the full annual fee is paid
                                        upfront
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Books & Materials */}
                <div className="relative bg-[#fbf5ef] py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                            📘 Books & Learning Materials
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            {[
                                { label: "Pre EYS", fee: "GHC 0" },
                                { label: "EYS", fee: "GHC 3,000 (Annual)" },
                                { label: "Primary", fee: "GHC 3,800 (Annual)" },
                            ].map(({ label, fee }) => (
                                <div
                                    key={label}
                                    className="p-5 bg-white rounded-xl shadow transition hover:scale-105 hover:shadow-lg"
                                >
                                    <h4 className="font-bold">{label}</h4>
                                    <p>{fee}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Feeding */}
                <div className="relative bg-[#f1f8fd] py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                            🍽️ Feeding (Optional)
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-center">
                            {[
                                {
                                    label: "Lunch & Snack (EYS and below)",
                                    fee: "GHC 35 Daily | GHC 2,100 (Termly)",
                                },
                                {
                                    label: "Lunch & Snack (Primary)",
                                    fee: "GHC 40 Daily | GHC 2,400 (Termly)",
                                },
                                {
                                    label: "Breakfast (EYS)",
                                    fee: "GHC 25 Daily | GHC 1,500 (Termly)",
                                },
                                {
                                    label: "Breakfast (Primary)",
                                    fee: "GHC 30 Daily | GHC 1,800 (Termly)",
                                },
                            ].map(({ label, fee }) => (
                                <div
                                    key={label}
                                    className="p-5 bg-white rounded-xl shadow transition hover:scale-105 hover:shadow-lg"
                                >
                                    <h4 className="font-bold">{label}</h4>
                                    <p>{fee}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Uniform */}
                <div className="relative bg-[#fbf5ef] py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                            👕 Uniform & Outfits
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                            {[
                                "Uniform: ~GHC 200",
                                "Apron: GHC 120",
                                "Cardigan: ~GHC 120",
                                "P.E. Kit: ~GHC 150",
                                "Baby Bodysuit: ~GHC 120 (Crèche only)",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="p-5 bg-white rounded-xl shadow transition hover:scale-105 hover:shadow-lg"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Enrichment Programmes */}
                <div className="relative bg-[#f1f8fd] py-12">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                            🎯 Enrichment Programmes
                        </h3>
                        <p className="mb-8">
                            Monday to Friday – Enrichment Programmes during school days
                            available to children of TechTots at <strong>No Fee</strong>.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            {[
                                "Mini Golf",
                                "Football Academy",
                                "Lawn Tennis",
                                "Cycling",
                                "Waterplay",
                                "Sandplay",
                                "Basketball",
                                "Music/Piano",
                                "Robotics, Coding and AI",
                            ].map((prog) => (
                                <div
                                    key={prog}
                                    className="p-4 bg-white rounded-xl shadow hover:scale-105 hover:shadow-lg transition"
                                >
                                    {prog}
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 italic">
                            Participation in Weekend (Saturday & Sunday) Wonderlab programmes
                            is at <strong>30% discount</strong> for TechTots.
                        </p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="max-w-6xl mx-auto px-4 py-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                        📍 Contact Information
                    </h3>
                    <p className="text-gray-700 font-semibold">
                        Location: GG 232-3777, GRIDCO Avenue, Pokuase – Accra <br />
                        📞 +233 25 612 4133 | ✉️ admission@techtots.edu.gh <br />
                        🌐 www.techtots.edu.gh <br />
                        📱 Social Media: @techtotsgh (Instagram, TikTok, Facebook)
                    </p>
                </div>
            </section>



        </main>

    );
}
