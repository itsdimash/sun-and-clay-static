import { Newsreader, Karla, Caveat } from "next/font/google";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-hand",
  display: "swap",
});

// CSS variable classes for the root <html> element (shared by the English and Chinese layouts).
export const fontVars = [display.variable, body.variable, hand.variable].join(" ");
