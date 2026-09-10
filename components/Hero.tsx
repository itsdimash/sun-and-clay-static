"use client";

import { motion } from "framer-motion";
import VesselMark from "./VesselMark";

export default function Hero({
  kicker,
  headline,
  subhead,
}: {
  kicker: string;
  headline: string;
  subhead: string;
}) {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-36 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-blob bg-sienna-wash blur-2xl animate-drift"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-blob bg-sage-wash blur-2xl animate-drift-slow"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-hand text-2xl text-sienna"
        >
          {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-balance font-display text-4xl italic leading-[1.15] text-clay md:text-5xl"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-md text-balance leading-relaxed text-clay-muted"
        >
          {subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#tools"
            className="rounded-full bg-sienna px-6 py-3 text-sm font-medium text-paper shadow-softer transition-transform hover:-translate-y-0.5 hover:shadow-soft"
          >
            Browse the shop
          </a>
          <a
            href="#contact"
            className="rounded-full border border-clay/15 bg-paper px-6 py-3 text-sm font-medium text-clay transition-colors hover:border-sage hover:text-sage"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative mt-6"
      >
        <VesselMark />
      </motion.div>
    </section>
  );
}
