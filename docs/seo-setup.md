# Argillaart search setup

## Included in the code

- A descriptive homepage title and description, canonical URLs, and social metadata.
- A permanent `/products/<slug>` page for every catalog item, generated at build time.
- Complete specifications in each product page's initial HTML, without requiring a click or JavaScript.
- Links to every product page from the catalog, breadcrumbs, and working homepage navigation from product pages.
- Product, BreadcrumbList, Organization, and WebSite JSON-LD using existing catalog information.
- Brand and article-number search signals: the CLAYO brand in the homepage title, description, and Organization/ItemList JSON-LD; each product page title and description lead with name, brand, and article number (CLY-…); brand and article number are shown as visible text under the product heading, on catalog cards, and as `sku`/`brand` in Product JSON-LD.
- `/sitemap.xml` containing the homepage and every product page, and `/robots.txt` referencing it.
- Product summaries using existing descriptions and supplied specifications.

The production domain and shared enquiry email are configured in `lib/site.ts`.
Keep product slugs stable; if a published slug changes, add a permanent redirect
from its old address.

## After merging and deploying

1. Open https://search.google.com/search-console/ with the business's Google account.
2. Add the **Domain** property `argillaart.com` and verify ownership using the DNS TXT record Google provides. Keep the verification record in DNS.
3. Confirm `https://argillaart.com/robots.txt` and `https://argillaart.com/sitemap.xml` return successfully on the live domain.
4. Submit `https://argillaart.com/sitemap.xml` in the Sitemaps report.
5. Inspect `https://argillaart.com/` and an important product URL. Run **Test live URL**, check Google's selected canonical, and request indexing if appropriate.
6. Monitor the Page indexing and Performance reports for crawl errors, indexed pages, brand searches, and product queries.

Code changes cannot verify domain ownership or guarantee indexing or rankings.
Google can take days or weeks to crawl pages; search performance can take longer to improve.

## Product information to confirm

Prices are intentionally not shown on the site. Product JSON-LD therefore
deliberately omits Offer, currency, and stock claims.
After the business confirms currency and availability, add accurate Offer data;
the current Product markup alone does not meet Google's product rich-result
requirements. Do not add invented reviews, ratings, delivery promises, or identifiers.

Aviorafly uses a separate repository and its own Search Console property. This
repository only configures Argillaart.

References:

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/appearance/structured-data/product

## Languages (English and Simplified Chinese)

- English lives at `/`, Simplified Chinese at `/zh` (product pages: `/zh/products/<slug>`). Slugs are the same in both languages.
- Each page declares its counterpart with `hreflang` (`en`, `zh-CN`, `x-default`), and `sitemap.xml` lists both versions of every page.
- UI text and SEO titles/descriptions are in `lib/i18n.ts`; Chinese product text is in `data/products.zh.ts` (keyed by product slug). When a product is added or its specs change in `data/products.ts`, update `data/products.zh.ts` too, keeping the spec list in the same order. A missing Chinese entry falls back to English.
- After deploying, resubmit `sitemap.xml` in Google Search Console and request indexing for `/zh`. Baidu and other Chinese search engines need their own webmaster accounts.
