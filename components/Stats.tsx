import AnimatedCounter from "./AnimatedCounter";
import { ui, type Lang } from "@/lib/i18n";

export default function Stats({ totalCount, lang }: { totalCount: number; lang: Lang }) {
  const stats = [
    { value: totalCount, suffix: "", label: ui[lang].stats[0], tint: "bg-sienna-wash" },
    { value: 100, suffix: "%", label: ui[lang].stats[1], tint: "bg-sage-wash" },
    { value: 4, suffix: "", label: ui[lang].stats[2], tint: "bg-sand" },
    { value: 3, suffix: "", label: ui[lang].stats[3], tint: "bg-sienna-wash" },
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
