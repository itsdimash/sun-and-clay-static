const columns = [
  {
    heading: "Shop",
    links: [{ label: "Full catalog", href: "#tools" }],
  },
  {
    heading: "Studio",
    links: [
      { label: "Our process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-sand/40 px-6 pt-14">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-10 border-b border-clay/10 pb-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2">
            <span className="font-display text-xl italic text-clay">Sun &amp; Clay</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-clay-muted">
              Wheels, kilns, hand tools, glazes, and clay bodies from a small
              coastal supply shop, stocked for potters who'd rather be at the wheel.
            </p>
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
          <p>© {new Date().getFullYear()} Sun &amp; Clay.</p>
          <p>Design preview, details subject to change.</p>
        </div>
      </div>
    </footer>
  );
}
