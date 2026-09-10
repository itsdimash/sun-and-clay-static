"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Product } from "@/data/products";

const ACCENT_TEXT = {
  sienna: "text-sienna",
  sage: "text-sage",
  ash: "text-ash",
} as const;

const ACCENT_BG = {
  sienna: "bg-sienna-wash",
  sage: "bg-sage-wash",
  ash: "bg-ash-wash",
} as const;

const CATEGORY_LABEL: Record<Product["category"], string> = {
  tool: "Tools & supplies",
};

export default function ProductCard({
  product,
  accent,
  priority = false,
}: {
  product: Product;
  accent: "sienna" | "sage" | "ash";
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const accentText = ACCENT_TEXT[accent];
  const accentBg = ACCENT_BG[accent];

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-paper shadow-softer transition-shadow duration-300 hover:shadow-soft"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.name}, ${CATEGORY_LABEL[product.category].toLowerCase()}`}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-sand text-clay-faint">
            <span className="font-hand text-lg">soon</span>
          </div>
        )}
        {typeof product.price === "number" && (
          <span className="absolute right-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-[11px] text-clay shadow-softer">
            ${product.price.toLocaleString()}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className={`inline-block w-fit rounded-full ${accentBg} px-3 py-1 text-[11px] ${accentText}`}>
          {CATEGORY_LABEL[product.category]}
        </span>
        <h3 className="mt-3 font-display text-lg italic text-clay">{product.name}</h3>
        <p className={`mt-1 text-sm ${accentText}`}>{product.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-clay-muted">{product.description}</p>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-4 flex items-center gap-1.5 self-start text-xs font-medium text-clay-faint transition-colors hover:text-clay"
        >
          <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
          {open ? "Hide details" : "See details"}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <dl className={`mt-4 grid grid-cols-2 gap-x-4 gap-y-3 rounded-2xl ${accentBg} p-4 text-xs`}>
                {product.specs.map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <dt className="text-clay-muted">{s.label}</dt>
                    <dd className="text-clay">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
