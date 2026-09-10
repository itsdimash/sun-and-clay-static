"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section className="px-6 py-10 md:py-16">
      <div
        ref={ref}
        className="relative mx-auto h-[52vh] min-h-[380px] max-w-5xl overflow-hidden rounded-[2.5rem] shadow-soft"
      >
        <motion.div style={{ y }} className="absolute -inset-x-0 -top-[10%] -bottom-[10%]">
          <Image
            src="/tools/Picture1.png"
            alt="The CLAYO pottery wheel, the workshop's best-selling piece of equipment"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-clay/55 via-clay/10 to-transparent" />
        <div className="relative flex h-full items-end p-8 md:p-12">
          <p className="max-w-md text-balance font-display text-2xl italic text-paper md:text-3xl">
            The same tools, wheels, and glazes, every time you restock.
          </p>
        </div>
      </div>
    </section>
  );
}
