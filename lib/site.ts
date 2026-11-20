import type { Product } from "@/data/products";
import { productHref, type Lang } from "@/lib/i18n";

export const site = {
  name: "Argillaart",
  url: "https://argillaart.com",
  title: "CLAYO Pottery Wheels, Kilns, Clay & Tools | Argillaart",
  description:
    "Explore CLAYO pottery wheels, ceramic kilns, clay, glazes, and hand tools at Argillaart. Find products by name, brand, or article number (CLY-…), browse specifications, and ask our team about studio supplies.",
  keywords: ["CLAYO", "CLAYO pottery wheel", "CLAYO ceramic kiln", "CLAYO clay", "pottery supplies", "ceramic tools", "Argillaart"],
  // Registered company name; shown in the footer and structured data once set.
  legalName: undefined as string | undefined,
};

export function productPath(product: Product, lang: Lang = "en"): string {
  return productHref(product.slug, lang);
}

const priceNumberFormat = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

// Preserve the catalog's historical dollar notation until the currency code is confirmed.
export function formatProductPrice(product: Product, lang: Lang): string | undefined {
  if (product.price === undefined) return undefined;
  const amount = `$${priceNumberFormat.format(product.price)}`;
  return product.priceUnit === "kg" ? amount + (lang === "zh" ? " / 千克" : " / kg") : amount;
}

// Spec labels that are shown elsewhere (brand/article) or are not useful in a summary.
const HIDDEN_LABELS = ["Brand", "Equipment Brand", "Department", "Article (SKU)", "品牌", "类别", "货号（SKU）"];

export function productDescription(product: Product, lang: Lang = "en"): string {
  const details = product.specs
    .filter((spec) => !HIDDEN_LABELS.includes(spec.label))
    .slice(0, 3)
    .map((spec) => (lang === "zh" ? `${spec.label}：${spec.value}` : `${spec.label}: ${spec.value}`));

  if (lang === "zh") {
    return [product.name, product.description.replace(/。$/, ""), ...details].join("。") + "。";
  }
  return [product.name, product.description.replace(/\.$/, ""), ...details].join(". ");
}

export function brandOf(product: Product): string | undefined {
  return product.specs.find((spec) => ["Brand", "Equipment Brand"].includes(spec.label))?.value;
}

// Search-result description: name, brand and article number first, then specs.
// `product` may be localized; pass the brand read from the English product.
export function metaDescription(product: Product, lang: Lang = "en", brand?: string): string {
  const zh = lang === "zh";
  const ids = [
    brand ? `${zh ? "品牌：" : "Brand: "}${brand}` : "",
    product.sku ? `${zh ? "货号：" : "Article: "}${product.sku}` : "",
  ].filter(Boolean).join(zh ? "。" : ". ");
  const body = productDescription(product, lang);
  const rest = body.startsWith(product.name) ? body.slice(product.name.length).replace(/^[.。\s]+/, "") : body;
  return [product.name, ids, rest].filter(Boolean).join(zh ? "。" : ". ").replace(zh ? /。{2,}/g : /\.{2,}/g, zh ? "。" : ".");
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
