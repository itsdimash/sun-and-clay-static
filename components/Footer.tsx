import { anchor, ui, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function Footer({ lang }: { lang: Lang }) {
  const t = ui[lang].footer;
  const columns = [
    { heading: t.shop, links: [{ label: t.catalog, href: anchor(lang, "tools") }] },
    {
      heading: t.company,
      links: [
        { label: t.process, href: anchor(lang, "process") },
        { label: t.contact, href: anchor(lang, "contact") },
      ],
    },
  ];
  return (
    <footer className="bg-sand/40 px-6 pt-14">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-10 border-b border-clay/10 pb-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2">
            <span className="font-display text-xl italic text-clay">Argillaart</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-clay-muted">{t.blurb}</p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-medium text-clay">{col.heading}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-clay-muted transition-colors hover:text-sienna">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-2 py-6 text-xs text-clay-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.legalName ?? site.name}.</p>
        </div>
      </div>
    </footer>
  );
}
