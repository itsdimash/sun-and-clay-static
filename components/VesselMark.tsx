"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";

export default function VesselMark() {
  const reduce = useReducedMotion();

  const draw = (delay: number): Transition => ({
    pathLength: { duration: 1.8, delay, ease: "easeInOut" },
    opacity: { duration: 0.4, delay },
  });

  const fade = (delay: number, duration = 0.8): Transition => ({
    duration,
    delay,
    ease: "easeOut",
  });

  const skip = reduce ? true : undefined;

  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* floating glaze motes */}
      {!reduce &&
        [
          { left: "18%", delay: 0 },
          { left: "62%", delay: 1.6 },
          { left: "80%", delay: 3.1 },
        ].map((m, i) => (
          <span
            key={i}
            className="absolute bottom-16 h-1.5 w-1.5 rounded-full bg-sienna-soft/60 animate-rise"
            style={{ left: m.left, animationDelay: `${m.delay}s` }}
          />
        ))}

      <svg viewBox="0 0 300 400" className="w-full" role="img" aria-label="Line illustration of a hand-thrown ceramic vessel">
        <defs>
          <linearGradient id="glaze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9835f" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#9ba883" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* glaze fill */}
        <motion.path
          d="M120,30 C108,45 95,60 95,90 C70,130 55,160 60,200 C64,250 75,290 90,320 L100,340 L200,340 L210,320 C225,290 236,250 240,200 C245,160 230,130 205,90 C205,60 192,45 180,30 Z"
          fill="url(#glaze)"
          initial={skip ? undefined : { opacity: 0, scale: 0.96 }}
          animate={skip ?? { opacity: 1, scale: 1 }}
          style={{ transformOrigin: "150px 200px" }}
          transition={fade(1.5, 1)}
        />

        {/* left outline */}
        <motion.path
          d="M120,30 C108,45 95,60 95,90 C70,130 55,160 60,200 C64,250 75,290 90,320 L100,340"
          fill="none"
          stroke="#3d3128"
          strokeWidth="2"
          strokeLinecap="round"
          initial={skip ? undefined : { pathLength: 0, opacity: 0 }}
          animate={skip ?? { pathLength: 1, opacity: 1 }}
          transition={draw(0.1)}
        />
        {/* right outline */}
        <motion.path
          d="M180,30 C192,45 205,60 205,90 C230,130 245,160 240,200 C236,250 225,290 210,320 L200,340"
          fill="none"
          stroke="#3d3128"
          strokeWidth="2"
          strokeLinecap="round"
          initial={skip ? undefined : { pathLength: 0, opacity: 0 }}
          animate={skip ?? { pathLength: 1, opacity: 1 }}
          transition={draw(0.1)}
        />

        {/* rim + foot */}
        <motion.ellipse
          cx="150"
          cy="30"
          rx="30"
          ry="7"
          fill="none"
          stroke="#3d3128"
          strokeWidth="2"
          initial={skip ? undefined : { pathLength: 0, opacity: 0 }}
          animate={skip ?? { pathLength: 1, opacity: 1 }}
          transition={draw(0.5)}
        />
        <motion.path
          d="M100,340 C120,350 180,350 200,340"
          fill="none"
          stroke="#3d3128"
          strokeWidth="2"
          strokeLinecap="round"
          initial={skip ? undefined : { pathLength: 0, opacity: 0 }}
          animate={skip ?? { pathLength: 1, opacity: 1 }}
          transition={draw(1.2)}
        />

        {/* decorative brush swirl */}
        <motion.path
          d="M85,150 C130,130 170,175 220,150"
          fill="none"
          stroke="#ab5335"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={skip ? undefined : { pathLength: 0, opacity: 0 }}
          animate={skip ?? { pathLength: 1, opacity: 0.75 }}
          transition={draw(2)}
        />

        {/* hand-signed note */}
        <motion.text
          x="150"
          y="380"
          textAnchor="middle"
          className="fill-clay-muted"
          style={{ fontFamily: "var(--font-hand)", fontSize: "20px" }}
          initial={skip ? undefined : { opacity: 0, y: 386 }}
          animate={skip ?? { opacity: 1, y: 380 }}
          transition={fade(2.5, 0.6)}
        >
          one of a kind, every time
        </motion.text>
      </svg>
    </div>
  );
}
