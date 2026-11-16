"use client";

import { motion } from "framer-motion";
import { ui, type Lang } from "@/lib/i18n";

export default function About({ lang }: { lang: Lang }) {
  const t = ui[lang].about;
  const steps = t.steps;
  return (
    <section id="process" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-balance font-display text-3xl italic text-clay md:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-clay-muted">
            {t.sub}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-sienna-wash font-display italic text-sienna">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg italic text-clay">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[26ch] text-sm leading-relaxed text-clay-muted">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
