"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact({
  headline,
  description,
  phone,
  email,
  address,
}: {
  headline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
}) {
  return (
    <section id="contact" className="px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl rounded-[2.5rem] bg-paper p-10 text-center shadow-soft md:p-14"
      >
        <h2 className="text-balance font-display text-3xl italic text-clay md:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-clay-muted">{description}</p>

        <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sienna-wash text-sienna">
              <Phone size={16} />
            </span>
            <span className="text-sm text-clay">{phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-wash text-sage">
              <Mail size={16} />
            </span>
            <span className="text-sm text-clay">{email}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ash-wash text-ash">
              <MapPin size={16} />
            </span>
            <span className="max-w-[22ch] text-left text-sm leading-snug text-clay">{address}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
