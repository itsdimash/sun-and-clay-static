"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#tools", label: "Shop" },
  { href: "#process", label: "Our process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div
        className={`mx-auto flex max-w-3xl items-center justify-between rounded-full border border-sand/70 bg-paper/90 px-5 py-2.5 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-soft" : "shadow-none"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 3c-1 1-2 2-2 4 -2 2-3 4-2.5 7 0.4 3 2.5 5.5 5.5 6.8 3-1.3 5.1-3.8 5.5-6.8 0.5-3-0.5-5-2.5-7 0-2-1-3-2-4"
              stroke="#ab5335"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-lg italic text-clay">Sun &amp; Clay</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-clay-muted transition-colors hover:text-sienna">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className="text-clay md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mx-auto mt-2 max-w-3xl overflow-hidden rounded-3xl border border-sand/70 bg-paper/95 shadow-soft md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-clay-muted transition-colors hover:text-sienna"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
