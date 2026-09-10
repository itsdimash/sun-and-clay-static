import AnimatedCounter from "./AnimatedCounter";

export default function Stats({ totalCount }: { totalCount: number }) {
  const stats = [
    { value: totalCount, suffix: "", label: "Items in the current catalog", tint: "bg-sienna-wash" },
    { value: 100, suffix: "%", label: "CLAYO-brand tools & materials", tint: "bg-sage-wash" },
    { value: 4, suffix: "", label: "Categories: wheels, tools, glazes, clay", tint: "bg-sand" },
    { value: 3, suffix: "", label: "Clay bodies in stock", tint: "bg-sienna-wash" },
  ];

  return (
    <section className="px-6 py-4">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-3xl ${s.tint} px-5 py-7 text-center shadow-softer`}>
            <div className="font-display text-3xl italic text-clay">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mx-auto mt-2 max-w-[16ch] text-xs leading-snug text-clay-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
