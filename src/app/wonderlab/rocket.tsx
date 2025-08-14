"use client";

import { useEffect, useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";

type Flight = {
  key: number;
  style: React.CSSProperties;
  rotation: number; // degrees
  direction: "top" | "bottom" | "left" | "right";
};

export default function RocketWithComments() {
  const [flight, setFlight] = useState<Flight | null>(null);
  const [emit, setEmit] = useState(false);

  const startFlight = () => {
    const edges: Flight["direction"][] = ["top", "bottom", "left", "right"];
    const from = edges[Math.floor(Math.random() * edges.length)];

    let style: React.CSSProperties = {};
    let rotation = 0;

    switch (from) {
      case "top":
        style = {
          top: "-100px",
          left: `${Math.random() * 80 + 10}%`,
          animation: "flyDown 5s linear forwards",
        };
        rotation = 180; // point down
        break;
      case "bottom":
        style = {
          bottom: "-100px",
          left: `${Math.random() * 80 + 10}%`,
          animation: "flyUp 5s linear forwards",
        };
        rotation = 0; // point up
        break;
      case "left":
        style = {
          left: "-100px",
          top: `${Math.random() * 80 + 10}%`,
          animation: "flyRight 5s linear forwards",
        };
        rotation = 90; // point right
        break;
      case "right":
        style = {
          right: "-100px",
          top: `${Math.random() * 80 + 10}%`,
          animation: "flyLeft 5s linear forwards",
        };
        rotation = -90; // point left
        break;
    }

    setFlight({ key: Date.now(), style, rotation, direction: from });
    setEmit(true);
    setTimeout(() => setEmit(false), 4500);
  };

  useEffect(() => {
    startFlight(); // first run
    const id = setInterval(startFlight, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes flyDown {
          to {
            transform: translateY(120vh);
          }
        }
        @keyframes flyUp {
          to {
            transform: translateY(-120vh);
          }
        }
        @keyframes flyRight {
          to {
            transform: translateX(120vw);
          }
        }
        @keyframes flyLeft {
          to {
            transform: translateX(-120vw);
          }
        }

        /* fast comet streaks */
        @keyframes cometXNeg {
          to {
            transform: translateX(-120px) scale(0.6);
            opacity: 0;
          }
        }
        @keyframes cometXPos {
          to {
            transform: translateX(120px) scale(0.6);
            opacity: 0;
          }
        }
        @keyframes cometYNeg {
          to {
            transform: translateY(-120px) scale(0.6);
            opacity: 0;
          }
        }
        @keyframes cometYPos {
          to {
            transform: translateY(120px) scale(0.6);
            opacity: 0;
          }
        }
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
    </>
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
        {
          id: Date.now() + Math.random(),
          offset: { x: jitter(), y: jitter() },
        },
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
            <path
              d="M32 4c10 6 16 18 16 30 0 14-8 22-16 26-8-4-16-12-16-26 0-12 6-24 16-30z"
              fill="#28455c"
            />
            <circle cx="32" cy="26" r="6" fill="#f1f8fe" />
            <path d="M24 46c5 2 11 2 16 0v6c-5 2-11 2-16 0z" fill="#fbf5ef" />
          </g>
          {/* fins */}
          <path
            d="M16 40c-6 2-10 6-12 12 6-2 12-2 16-6-2-2-3-4-4-6z"
            fill="#fbf5ef"
          />
          <path
            d="M48 40c6 2 10 6 12 12-6-2-12-2-16-6 2-2 3-4 4-6z"
            fill="#fbf5ef"
          />
          {/* flame */}
          <path
            d="M30 56c-4 2-6 6-6 8 4-1 8-2 12 0-1-3-2-6-6-8z"
            fill="#ff9a3c"
          />
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
