import type { Metadata } from "next";
import { Newsreader, Karla, Caveat } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Sun & Clay — Pottery Wheels, Kilns & Studio Supplies",
  description:
    "Sun & Clay is a small coastal supply shop stocking pottery wheels, kilns, hand tools, glazes, and clay bodies for potters and studios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body className="font-body bg-linen text-clay antialiased">{children}</body>
    </html>
  );
}
