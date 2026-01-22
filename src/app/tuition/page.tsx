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
                            Fee Structure – 2026/2027 Academic Year
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
                                "Crèche / Preparatory Year – $735 / GHC 7,500 per term | $2,200 / GHC 22,500 annually",
                                "Cambridge Early Years (EY) – $735 / GHC 7,500 per term | $2,205 / GHC 22,500 annually",
                                "Cambridge Primary 1-3 (Lower Primary) – $833 / GHC 8,500 per term | $2,499 / GHC 25,500 annually",
                                "Cambridge Primary 4-6 (Upper Primary) - $1030 / GHC 10,500 per term | $3090 / GHC 31,500"
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
                                    <li>Second child: 5% discount on tuition</li>
                                    <li>Third child (and subsequent children): 10% discount on tuition</li>
                                </ul>
                                <h4 style={{ marginTop: "20px", fontWeight: 600, fontSize:"14px"}}>NB: The discount applies to tuition fees only and is calculated per child, per term.</h4>
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
                            📘 Learning Materials
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            {[
                                { label: "Pre EYS", fee: "GHC 2,000 (Annual)" },
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
                            🍽️ Feeding
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-center">
                            {[
                                {
                                    label: "Lunch & Snack (EYS and below)",
                                    fee: "GHC 40 Daily | GHC 2,800 (Termly)",
                                },
                                {
                                    label: "Lunch & Snack (Primary)",
                                    fee: "GHC 45 Daily | GHC 3,150 (Termly)",
                                },
                                {
                                    label: "Breakfast (EYS)",
                                    fee: "GHC 25 Daily | GHC 1,750 (Termly)",
                                },
                                {
                                    label: "Breakfast (Primary)",
                                    fee: "GHC 30 Daily | GHC 2,100 (Termly)",
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


                        <h4 className="text-1xl md:text-1xl font-semibold mb-6 text-center">
                            Pre-Early Years & Early Years (Little Seeds, Explorers, EY1–EY3)
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                            {[
                                "Uniform (Monday and Wednesday): GHC 200",
                                "Apron: GHC 120",
                                "Cardigan: GHC 120",
                                "P.E. Kit (Fridays): GHC 150",
                                "⁠School-Themed Print (Tuesdays and Thursdays): GHC 200",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="p-5 bg-white rounded-xl shadow transition hover:scale-105 hover:shadow-lg"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <h4 className="text-1xl md:text-1xl font-semibold mb-6 mt-5 text-center">
                           Primary (Years 1–6)
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                            {[
                                "Uniform (Monday and Wednesday): GHC 250",
                                "Apron: GHC 120",
                                "Cardigan: GHC 120",
                                "P.E. Kit (Fridays): GHC 150",
                                "⁠School-Themed Print (Tuesdays and Thursdays): GHC 200",
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
