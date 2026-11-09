import type { Product } from "@/data/products";

export const site = {
  name: "Argillaart",
  url: "https://argillaart.com",
  title: "Argillaart | Pottery Wheels, Kilns & Pottery Supplies",
  description:
    "Explore CLAYO pottery wheels, ceramic kilns, clay, glazes, and hand tools at Argillaart. Browse specifications and ask our team about supplies for your studio.",
  email: "weizhangofficial31@gmail.com",
};

export function productPath(product: Product): string {
  return `/products/${product.slug}`;
}

export function productDescription(product: Product): string {
  const details = product.specs
    .filter((spec) => !["Brand", "Equipment Brand", "Department", "Price (incl. VAT)"].includes(spec.label))
    .slice(0, 3)
    .map((spec) => `${spec.label}: ${spec.value}`);

  return [product.name, product.description.replace(/\.$/, ""), ...details].join(". ");
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
