import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#f7f1e6",
        paper: "#fffcf5",
        clay: {
          DEFAULT: "#3d3128",
          muted: "#8a7c6c",
          faint: "#b6a996",
        },
        sienna: {
          DEFAULT: "#ab5335",
          soft: "#c9835f",
          wash: "#f0ddd0",
        },
        sage: {
          DEFAULT: "#727d5c",
          soft: "#9ba883",
          wash: "#e4e6d6",
        },
        ash: {
          DEFAULT: "#8f8578",
          soft: "#aca295",
          wash: "#e9e5db",
        },
        sand: "#e7dcc4",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        hand: ["var(--font-hand)"],
      },
      borderRadius: {
        xl2: "1.75rem",
        blob: "62% 38% 55% 45% / 48% 45% 55% 52%",
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(61, 49, 40, 0.25)",
        softer: "0 10px 30px -12px rgba(61, 49, 40, 0.18)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -3%) scale(1.03)" },
        },
        "drift-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-3%, 2%) scale(1.04)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "15%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-40px)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        "drift-slow": "drift-slow 18s ease-in-out infinite",
        rise: "rise 5s ease-in infinite",
      },
    },
  },
  plugins: [],
};
export default config;
