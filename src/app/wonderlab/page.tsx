"use client";

import { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";

type Flight = {
    key: number;
    style: React.CSSProperties;
    rotation: number;              // degrees
    direction: "top" | "bottom" | "left" | "right";
};


export default function Page() {
    const [flight, setFlight] = useState<Flight | null>(null);
    const [emit, setEmit] = useState(false); // toggle comet emission while flying

    const startFlight = () => {
        const edges: Flight["direction"][] = ["top", "bottom", "left", "right"];
        const from = edges[Math.floor(Math.random() * edges.length)];

        let style: React.CSSProperties = {};
        let rotation = 0;

        switch (from) {
            case "top":
                style = { top: "-100px", left: `${Math.random() * 80 + 10}%`, animation: "flyDown 5s linear forwards" };
                rotation = 180; // point down
                break;
            case "bottom":
                style = { bottom: "-100px", left: `${Math.random() * 80 + 10}%`, animation: "flyUp 5s linear forwards" };
                rotation = 0; // point up
                break;
            case "left":
                style = { left: "-100px", top: `${Math.random() * 80 + 10}%`, animation: "flyRight 5s linear forwards" };
                rotation = 90; // point right
                break;
            case "right":
                style = { right: "-100px", top: `${Math.random() * 80 + 10}%`, animation: "flyLeft 5s linear forwards" };
                rotation = -90; // point left
                break;
        }

        setFlight({ key: Date.now(), style, rotation, direction: from });
        setEmit(true);
        // stop emitting a bit before the rocket disappears
        setTimeout(() => setEmit(false), 4500);
    };

    useEffect(() => {
        startFlight();                      // first run
        const id = setInterval(startFlight, 3000); // every 3 seconds
        return () => clearInterval(id);
    }, []);

    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            {/* Keyframes + comet animations */}
            <style jsx>{`
        @keyframes flyDown { to { transform: translateY(120vh); } }
        @keyframes flyUp { to { transform: translateY(-120vh); } }
        @keyframes flyRight { to { transform: translateX(120vw); } }
        @keyframes flyLeft { to { transform: translateX(-120vw); } }

        /* fast comet streaks */
        @keyframes cometXNeg   { to { transform: translateX(-120px) scale(0.6); opacity: 0; } }
        @keyframes cometXPos   { to { transform: translateX(120px)  scale(0.6); opacity: 0; } }
        @keyframes cometYNeg   { to { transform: translateY(-120px) scale(0.6); opacity: 0; } }
        @keyframes cometYPos   { to { transform: translateY(120px)  scale(0.6); opacity: 0; } }
      `}</style>

            {/* Rocket + comet emitter */}
            {flight && (
                <RocketWithComets
                    key={flight.key}
                    style={flight.style}
                    rotation={flight.rotation}
                    direction={flight.direction}
                    emit={emit}
                />
            )}

            {/* Hero Section */}
            <section className="relative flex items-center justify-center py-20 min-h-96 h-full overflow-hidden bg-[url('/images/wonderlab.png')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/70" />
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto space-y-8 text-center">
                        <div className="inline-flex bg-white/30 items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/40">
                            <SparklesIcon className="size-4 text-white" />
                            <span className="text-white">wonderLab</span>
                        </div>
                        <h1 className="text-4xl font-bold leading-tight text-white font-heading md:text-5xl">
                            Weekend Adventures for Curious Young Minds
                        </h1>
                        <p className="text-xl text-white/90">
                            Spark creativity, curiosity, and confidence in your child every weekend.
                        </p>
                    </div>
                </div>
            </section>



            {/* WonderLab Grid Section (unchanged structure, styled like your Enrichment section) */}
            <section className="py-20 bg-blue">
                <div className="container max-w-7xl mx-auto px-4 text-center">
                    <div className="space-y-16">

                        {/* --- mapped sections --- */}
                        {[
                            {
                                title: "What is WonderLab?",
                                bg: "#f1f8fe",
                                items: [
                                    "Premium weekend enrichment",
                                    "Open to all children (non-TechTots welcome)",
                                    "Saturday afternoons: hands-on learning & discovery",
                                ],
                            },
                            // {
                            //     title: "Participation Fees (GH₵)",
                            //     bg: "#f0f1f2",
                            //     gridCols: "grid-cols-1 sm:grid-cols-2",
                            //     items: [
                            //         "Full Morning (9:00 AM – 1:00 PM) – ₵100",
                            //         "Full Afternoon (1:00 PM – 5:00 PM) – ₵100",
                            //     ],
                            // },
                            {
                                title: "Location & Contact",
                                bg: "#f1f8fe",
                                items: [
                                    "TechTots Int’l School, GRIDCO Avenue, Pokuase, Accra",
                                    "📞 +233 25 612 4133",
                                    "📧 wonderlab@techtots.edu.gh",
                                    "🌐 techtots.edu.gh",
                                    "📱 @techtotsgh",
                                ],
                            },
                            {
                                title: "Why WonderLab?",
                                bg: "#fbf5ef",
                                items: [
                                    "Structured learning + free exploration",
                                    "Early STEM & arts fluency",
                                    "Independence, teamwork & expression",
                                    "Cambridge & Reggio-inspired facilitators",
                                ],
                            },
                        ].map((section, idx) => (
                            <div
                                key={idx}
                                className="relative p-8 rounded-xl shadow-md"
                                style={{ backgroundColor: section.bg }}
                            >
                                <h3
                                    className={`text-2xl md:text-3xl font-semibold mb-6 flex justify-center text-gray-800`}
                                >
                                    {section.title}
                                </h3>

                                <div
                                    className={`grid ${
                                        // section.gridCols
                                        //     ? section.gridCols
                                             "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                                    } gap-4`}
                                >
                                    {section.items.map((item) => (
                                        <div
                                            key={item}
                                            className={`p-4 bg-white rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer text-black`}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* --- Flat Day Pass block --- */}
                        <div className="relative p-8 rounded-xl shadow-md bg-[#f1f8fe]">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
                                Flat Day Pass (All Sports, Arts & Nature Activities)
                            </h3>
                            <p className="mb-6 text-gray-700">
                                Includes: Mini Tennis, Football, Cycling, Basketball, Table Tennis,
                                Mini Golf, Art & Craft, Design, Eco Farm, Gardening, Nature Play &
                                Outdoor Games.
                            </p>

                            <h4 className="font-bold text-lg mb-4">Weekend Programme Schedule</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                {[
                                    "Saturday Morning: 9:00 AM – 1:00 PM",
                                    "Saturday Afternoon: 1:00 PM – 5:00 PM",
                                ].map((slot) => (
                                    <div
                                        key={slot}
                                        className="p-4 bg-white rounded-xl shadow hover:scale-105 transition"
                                    >
                                        {slot}
                                    </div>
                                ))}
                            </div>

                            <p className="mb-6 text-gray-600 italic">
                                Each fee entitles your child to a full 4-hour block. Parents may
                                choose a full session or drop-in activities within the slot.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-5 bg-white rounded-xl shadow text-center">
                                    <h4 className="font-bold mb-2">Day Pass (per 4-hour session)</h4>
                                    <p>Standard: GHC 100 / session</p>
                                </div>
                                <div className="p-5 bg-white rounded-xl shadow text-center">
                                    <h4 className="font-bold mb-2">Term Pass (12 sessions)</h4>
                                    <p>Standard: GHC 1,200 / term</p>
                                </div>
                            </div>
                        </div>

                        {/* --- Specialised Programmes block --- */}
                        <div className="relative p-8 rounded-xl shadow-md bg-[#fbf5ef]">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
                                Specialised Programmes
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        programme: "Robotics, AI & Coding",
                                        schedule: "Saturdays (9:00 AM – 1:00 PM)",
                                        fee: "GHC 2,500 / term",
                                    },
                                    {
                                        programme: "Music (Piano)",
                                        schedule: "Saturdays (1:00 PM – 5:00 PM)",
                                        fee: "GHC 1,800 / term",
                                    },
                                    {
                                        programme: "Taekwondo",
                                        schedule: "Saturdays (1:00 PM – 5:00 PM)",
                                        fee: "GHC 1,800 / term",
                                    },
                                    {
                                        programme: "(WonderReads) Library, Literacy & Reading",
                                        schedule:
                                            "Saturdays (Flexible across sessions, Jolly Phonics, Epic! & Book Borrowing)",
                                        fee: "GHC 1,000 / term",
                                    },
 {
                                        programme: "Abacus & Brain Gym",
                                        schedule: "Saturdays 9am-10:30am (4-7yrs), Saturdays 10:30am-12:00 (8-12yrs)",
                                        fee: "GHC 1,500 / term",
                                    },
                                    {
                                        programme: "Digital Design & Graphics",
                                        schedule:
                                            "Saturdays 11am - 1pm (6yrs+)",
                                        fee: "GHC 2,000 / term",
                                    },
                                ].map(({ programme, schedule, fee, }) => (
                                    <div
                                        key={programme}
                                        className="p-5 bg-white rounded-xl shadow hover:scale-105 transition text-left"
                                    >
                                        <h4 className="font-bold">{programme}</h4>
                                        <p className="text-gray-600">{schedule}</p>
                                        <p className="mt-2">Standard: {fee}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-16">
                <div className="container max-w-7xl mx-auto px-4 text-center">
                    <div
                        className="relative p-8 rounded-xl shadow-md"
                        style={{ backgroundColor: "#f1f8fe" }}
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 flex justify-center">
                            🌟 Enroll Today!
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "Spaces are limited each weekend.",
                                "Register now and give your child the gift of discovery!",
                                "Join for full sessions or drop in for activities."
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="p-4 bg-white rounded-xl shadow transition duration-300 ease-in-out transform hover:scale-105 hover:animate-shake hover:cursor-pointer"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* Optional CTAs */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/weekend/booking"
                                className="px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
                            >
                                Register Now
                            </a>
                            <a
                                href="/contact"
                                className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition"
                            >
                                Ask a Question
                            </a>
                        </div>
                    </div>
                </div>
            </section>        </main>
    );
}

/* ---------- Rocket With Comets component (inline SVG + comet emitter) ---------- */
function RocketWithComets({
                              style,
                              rotation,
                              direction,
                              emit,
                          }: {
    style: React.CSSProperties;
    rotation: number;
    direction: "top" | "bottom" | "left" | "right";
    emit: boolean;
}) {
    const [particles, setParticles] = useState<
        { id: number; offset: { x: number; y: number } }[]
        >([]);

    // emit small comet particles while `emit` is true
    useEffect(() => {
        if (!emit) return;
        const id = setInterval(() => {
            // random small offset so the trail flickers
            const jitter = () => Math.floor(Math.random() * 8) - 4;
            setParticles((prev) => [
                ...prev,
                { id: Date.now() + Math.random(), offset: { x: jitter(), y: jitter() } },
            ]);
            // clean up older particles (keep it light)
            setParticles((prev) => prev.slice(-20));
        }, 90); // fast comet bursts
        return () => clearInterval(id);
    }, [emit]);

    // map direction -> comet animation opposite to motion
    const cometAnim =
        direction === "left"
            ? "cometXNeg" // rocket moves right → trail left
            : direction === "right"
                ? "cometXPos"
                : direction === "top"
                    ? "cometYPos" // rocket moves down → trail up is negative, but we want opposite motion visually behind, tweak feels right
                    : "cometYNeg";

    // comet colours (TechTots vibe)
    const colors = ["#f1f8fe", "#fbf5ef", "#ffcc00", "#ffffff"];

    return (
        <div
            style={{
                position: "absolute",
                zIndex: 60,
                pointerEvents: "none",
                width: 80,
                height: 80,
                ...style,
            }}
        >
            {/* Rocket SVG */}
            <div
                style={{
                    width: 80,
                    height: 80,
                    transform: `rotate(${rotation}deg)`,
                    filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.25))",
                }}
            >
                <svg viewBox="0 0 64 64" width="80" height="80">
                    {/* body */}
                    <g>
                        <path d="M32 4c10 6 16 18 16 30 0 14-8 22-16 26-8-4-16-12-16-26 0-12 6-24 16-30z" fill="#28455c"/>
                        <circle cx="32" cy="26" r="6" fill="#f1f8fe"/>
                        <path d="M24 46c5 2 11 2 16 0v6c-5 2-11 2-16 0z" fill="#fbf5ef"/>
                    </g>
                    {/* fins */}
                    <path d="M16 40c-6 2-10 6-12 12 6-2 12-2 16-6-2-2-3-4-4-6z" fill="#fbf5ef"/>
                    <path d="M48 40c6 2 10 6 12 12-6-2-12-2-16-6 2-2 3-4 4-6z" fill="#fbf5ef"/>
                    {/* flame */}
                    <path d="M30 56c-4 2-6 6-6 8 4-1 8-2 12 0-1-3-2-6-6-8z" fill="#ff9a3c"/>
                </svg>
            </div>

            {/* Comet particles (emitted “behind” the rocket) */}
            <div
                style={{
                    position: "absolute",
                    left: 40,
                    top: 40,
                    transform: "translate(-50%, -50%)",
                }}
            >
                {particles.map((p) => (
                    <span
                        key={p.id}
                        style={{
                            position: "absolute",
                            left: p.offset.x,
                            top: p.offset.y,
                            width: Math.random() * 4 + 3,
                            height: 3,
                            borderRadius: 999,
                            background: colors[Math.floor(Math.random() * colors.length)],
                            opacity: 0.9,
                            boxShadow: "0 0 8px rgba(255,255,255,0.6)",
                            animation: `${cometAnim} 0.6s linear forwards`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
