# Argillaart

A Next.js catalog for pottery wheels, ceramic kilns, clay, glazes, and
workshop tools. Homepage cards link to statically generated product pages
with complete specifications and an email enquiry action. There is no checkout.

**This is a fully static, code-only site.** There's no CMS or admin
dashboard — every product and piece of text lives directly in the code.
To change anything, edit the relevant file and redeploy.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Needs internet access once, for fonts
(Google Fonts, loaded via `next/font/google`) — no other external services
are used.

## How to edit things

- **Products** (add, remove, or edit any Pottery, Ceramic art, or Tools
  item) — `data/products.ts`. Each item is a plain object; copy an
  existing one as a template.
- **Product photos** — put the image file in `public/tools/` (or wherever
  you like under `public/`) and reference it from `data/products.ts` as
  `image: "/tools/your-file.jpg"`. Leave `image` unset entirely and the
  card shows a plain "soon" placeholder instead.
- **Headlines, section text, and address** — at the top of `app/page.tsx`,
  in the `content` object. The shared enquiry email is in `lib/site.ts`.
- **Site name and search metadata** — `lib/site.ts`, `app/layout.tsx`,
  `components/Navbar.tsx`, and `components/Footer.tsx`.

## Project structure

```
app/                Root layout, global styles, homepage, product pages,
                    sitemap.xml, and robots.txt
components/         Navbar, Hero, Stats, ProductsSection, ProductCard,
                    About, Gallery, Contact, Footer, VesselMark (hero SVG)
data/products.ts     Every product on the site — pottery, ceramic art, tools
public/tools/        Real product photos for the Tools category
lib/site.ts          Production URL, search metadata, and product summaries
```

## Search visibility

See [SEO setup](docs/seo-setup.md) for Google Search Console setup and the
checks to perform after deployment. Product URLs and the sitemap update
automatically from `data/products.ts` during each production build.

## Design notes

- Warm linen background, terracotta/sienna and sage-glaze accents, soft
  paper-white cards — no dark mode, no hard borders.
- Fully rounded cards, pill-shaped buttons and nav, soft blurred color
  blobs drifting slowly in the background.
- Italic serif (Newsreader) headings + warm rounded sans (Karla) body text,
  with a handwritten accent font (Caveat) used sparingly.
- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS,
  Framer Motion, lucide-react icons. No database, no CMS, no external
  runtime dependencies.
