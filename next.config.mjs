// Old product URLs (before the English names were corrected) keep working via permanent redirects.
const movedProducts = {
  "mini-clayo-rolling-machine": "clayo-mini-slab-roller",
  "clayo-clay-sump": "clayo-clay-trap",
  "small-turntable-clayo": "clayo-banding-wheel-small",
  "large-turntable-clayo": "clayo-banding-wheel-large",
  "clayo-chairs-for-the-pottery-workshop": "clayo-pottery-studio-chair",
  "kalyachnitsa-set-clayo": "clayo-slip-trailer-set",
  "clayo-spray-gun": "clayo-hand-sprayer",
  "clayo-pottery-bucket": "clayo-pottery-ladle",
  "wooden-guide-rails-clayo-set": "clayo-wooden-thickness-guides-set",
  "potter-s-string-clayo": "clayo-cutting-wire",
  "shingle-clayo": "clayo-burnishing-tool-ptfe",
  "clayo-stack-set": "clayo-wooden-modeling-tool-set",
  "clayo-hand-tool-kit": "clayo-basic-pottery-tool-set",
  "clayo-awl": "clayo-needle-tool",
  "clayo-tongs-for-glazing": "clayo-glazing-tongs",
  "clayo-pottery-loop-type-1": "clayo-steel-scraper-type-1",
  "clayo-pottery-loop-type-2": "clayo-steel-scraper-type-2",
  "rolling-pin-with-clayo-pattern-set-3-types": "clayo-textured-rolling-pin-set",
  "clayo-tool-for-square-shapes": "clayo-square-slab-forming-tool",
  "clayo-mat": "clayo-cotton-canvas-slab-mat",
  "clayo-liquid-clay-coating-set-14-colors": "clayo-engobe-set-14-colors",
  "clear-clayo-glaze": "clayo-clear-glaze",
  "high-temperature-clay-clayo-cream": "clayo-high-fire-clay-cream",
  "high-temperature-clay-clayo-ivory": "clayo-high-fire-clay-ivory",
  "red-clay-clayo-for-modeling": "clayo-red-modeling-clay",
  "clayo-pottery-paint-set-10-colors": "clayo-ceramic-paint-set-10-colors",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return Object.entries(movedProducts).map(([from, to]) => ({
      source: `/products/${from}`,
      destination: `/products/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
