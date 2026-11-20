export type Lang = "en" | "zh";
export const LANGS: Lang[] = ["en", "zh"];
export const HTML_LANG: Record<Lang, string> = { en: "en", zh: "zh-CN" };
export const OG_LOCALE: Record<Lang, string> = { en: "en_US", zh: "zh_CN" };

/** English stays at the site root; Chinese lives under /zh. */
export const homePath = (lang: Lang): string => (lang === "zh" ? "/zh" : "/");
export const anchor = (lang: Lang, id: string): string => `${homePath(lang)}#${id}`;
export const productHref = (slug: string, lang: Lang): string =>
  lang === "zh" ? `/zh/products/${slug}` : `/products/${slug}`;
/** Same page in the target language (used by the language switch). */
export const switchPath = (pathname: string, target: Lang): string =>
  target === "en" ? pathname.replace(/^\/zh(?=\/|$)/, "") || "/" : `/zh${pathname === "/" ? "" : pathname}`;

const en = {
  switchLabel: "中文",
  switchTitle: "切换到中文",
  nav: { shop: "Shop", process: "Our process", contact: "Contact", openMenu: "Open menu", closeMenu: "Close menu" },
  hero: {
    kicker: "CLAYO pottery equipment & supplies",
    headline: "Everything a potter's wheel needs, in one place.",
    subhead:
      "Argillaart stocks CLAYO wheels, kilns, hand tools, glazes, and clay bodies for potters who'd rather be at the wheel than hunting down a supplier.",
    caption: "one of a kind, every time",
    browse: "Browse the shop",
    touch: "Get in touch",
  },
  stats: [
    "Items in the current catalog",
    "CLAYO-brand tools & materials",
    "Categories: wheels, tools, glazes, clay",
    "Clay bodies in stock",
  ],
  catalog: {
    eyebrow: "full catalog",
    title: "The full catalog.",
    description:
      "Wheels, kilns, hand tools, glazes, and clay bodies — everything the workshop runs on, in one shop.",
  },
  about: {
    heading: "Everything between a lump of clay and a finished piece.",
    sub: "Whichever stage you're stocking for, it's in one of these four corners of the shop.",
    steps: [
      { title: "Wheels & kilns", body: "From a beginner-friendly tabletop wheel to a full ceramic kiln, sized and specced for a home studio or a classroom of ten." },
      { title: "Shaping & trimming", body: "Rolling pins, ribs, loop tools, and cutting knives for every stage between a lump of clay and a piece ready to fire." },
      { title: "Glazes & clay bodies", body: "High-temperature clay, liquid coatings, and glazes in a range of finishes, so a piece goes from raw to finished without a second supplier." },
      { title: "Studio extras", body: "Aprons, work stools, mats, and the small fixtures that make a shared studio actually run smoothly." },
    ],
  },
  contact: {
    headline: "Ask about stock, or a bulk order.",
    description:
      "Setting up a classroom, a studio, or just restocking your own bench — reach out any time and we'll help you find what you need.",
    emailLabel: "Email",
    addressLabel: "Address",
    address: "2F-03-01, 74 Luntou Road, Haizhu District, Guangzhou, Guangdong, China",
  },
  footer: {
    blurb:
      "Wheels, kilns, hand tools, glazes, and clay bodies from a small coastal supply shop, stocked for potters who'd rather be at the wheel.",
    shop: "Shop",
    company: "Company",
    catalog: "Full catalog",
    process: "Our process",
    contact: "Contact",
  },
  card: {
    category: "Tools & supplies",
    article: "Article",
    details: "Product details",
    forName: (name: string) => ` for ${name}`,
    see: "See details",
    hide: "Hide details",
    soon: "soon",
    alt: (name: string) => `${name}, tools & supplies`,
  },
  product: {
    home: "Argillaart",
    catalog: "Catalog",
    brand: "Brand",
    article: "Article",
    priceIncludesVat: "incl. VAT",
    ask: "Ask about this product",
    askNote: "Contact our team to confirm availability and delivery options.",
    orEmail: "Or email us at",
    specs: "Product specifications",
    back: "Browse the full catalog",
    mailSubject: (name: string) => `Enquiry: ${name}`,
    mailBody: (name: string, url: string) =>
      `Hello Argillaart,\n\nI would like to ask about ${name}.\n${url}\n\nPlease confirm availability, currency, and delivery options.\n`,
  },
  seo: {
    title: "CLAYO Pottery Wheels, Kilns, Clay & Tools | Argillaart",
    description:
      "Explore CLAYO pottery wheels, ceramic kilns, clay, glazes, and hand tools at Argillaart. Find products by name, brand, or article number (CLY-…), browse specifications, and ask our team about studio supplies.",
    keywords: ["CLAYO", "CLAYO pottery wheel", "CLAYO ceramic kiln", "CLAYO clay", "pottery supplies", "ceramic tools", "Argillaart"],
  },
};

const zhUi: typeof en = {
  switchLabel: "English",
  switchTitle: "Switch to English",
  nav: { shop: "选购", process: "我们的流程", contact: "联系我们", openMenu: "打开菜单", closeMenu: "关闭菜单" },
  hero: {
    kicker: "CLAYO 陶艺设备与用品",
    headline: "陶艺转盘所需的一切，一站配齐。",
    subhead:
      "Argillaart 提供 CLAYO 拉坯机、窑炉、手工工具、釉料和陶泥，让陶艺爱好者专心创作，不必四处寻找供应商。",
    caption: "件件独一无二",
    browse: "浏览商品",
    touch: "联系我们",
  },
  stats: [
    "当前目录中的商品数",
    "CLAYO 品牌工具和材料",
    "类别：拉坯机、工具、釉料、陶泥",
    "在售陶泥品种",
  ],
  catalog: {
    eyebrow: "完整目录",
    title: "完整产品目录。",
    description: "拉坯机、窑炉、手工工具、釉料和陶泥——工作室所需的一切，尽在一家店。",
  },
  about: {
    heading: "从一团泥到成品，所需的一切。",
    sub: "无论您为哪个环节备货，都能在店里这四个区域找到。",
    steps: [
      { title: "拉坯机与窑炉", body: "从适合入门的台式拉坯机到完整的陶瓷窑炉，规格适合家庭工作室或十人课堂。" },
      { title: "塑形与修坯", body: "擀泥棒、刮刀和切割刀，覆盖从泥团到待烧成品之间的每个步骤。" },
      { title: "釉料与陶泥", body: "高温陶泥、液态化妆土和各种质感的釉料，让作品从素坯到成品无需再找第二家供应商。" },
      { title: "工作室配件", body: "围裙、工作凳、垫子，以及让共用工作室顺畅运转的各种小配件。" },
    ],
  },
  contact: {
    headline: "咨询库存或批量订购。",
    description: "无论是布置教室、工作室，还是补充自己的工作台——欢迎随时联系，我们帮您找到所需用品。",
    emailLabel: "邮箱",
    addressLabel: "地址",
    address: "2F-03-01, 74 Luntou Road, Haizhu District, Guangzhou, Guangdong, China",
  },
  footer: {
    blurb: "拉坯机、窑炉、手工工具、釉料和陶泥——来自一家小型海滨供应店，为更愿意坐在拉坯机前的陶艺人备货。",
    shop: "选购",
    company: "公司",
    catalog: "完整目录",
    process: "我们的流程",
    contact: "联系我们",
  },
  card: {
    category: "工具与用品",
    article: "货号",
    details: "产品详情",
    forName: (name: string) => `：${name}`,
    see: "查看详情",
    hide: "收起详情",
    soon: "即将上线",
    alt: (name: string) => `${name}，工具与用品`,
  },
  product: {
    home: "Argillaart",
    catalog: "目录",
    brand: "品牌",
    article: "货号",
    priceIncludesVat: "含增值税",
    ask: "咨询此产品",
    askNote: "请联系我们确认库存和配送方式。",
    orEmail: "或发送邮件至",
    specs: "产品规格",
    back: "浏览完整目录",
    mailSubject: (name: string) => `咨询：${name}`,
    mailBody: (name: string, url: string) =>
      `您好 Argillaart，\n\n我想咨询 ${name}。\n${url}\n\n请告知报价、库存及配送方式。\n`,
  },
  seo: {
    title: "CLAYO 陶艺拉坯机、窑炉、陶泥与工具 | Argillaart",
    description:
      "Argillaart 提供 CLAYO 陶艺拉坯机、陶瓷窑炉、陶泥、釉料和手工工具。可按产品名称、品牌或货号（CLY-…）查找，查看产品规格，并向我们咨询工作室用品。",
    keywords: ["CLAYO", "CLAYO 拉坯机", "CLAYO 陶瓷窑炉", "陶艺用品", "陶艺工具", "Argillaart"],
  },
};

export const ui: Record<Lang, typeof en> = { en, zh: zhUi };
export type Ui = typeof en;
