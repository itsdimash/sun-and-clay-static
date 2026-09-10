"use client";

import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsSection({
  id,
  eyebrow,
  title,
  description,
  products,
  accent,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
  accent: "sienna" | "sage" | "ash";
}) {
  return (
    <section id={id} className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-lg text-center">
          <p className={`font-hand text-xl ${accent === "sienna" ? "text-sienna" : accent === "sage" ? "text-sage" : "text-ash"}`}>{eyebrow}</p>
          <h2 className="mt-1 text-balance font-display text-3xl italic text-clay md:text-4xl">{title}</h2>
          <p className="mt-4 text-balance leading-relaxed text-clay-muted">{description}</p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} accent={accent} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
