import { marqueeTech } from "../data/portfolio";

// Two identical halves scroll left; at -50% the second half sits exactly where the first began.
export default function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div className="overflow-hidden bg-ink py-5 text-paper sm:py-6">
      <ul
        aria-label="Technologies I work with"
        className="flex w-max animate-marquee items-center gap-12 pr-12 hover:[animation-play-state:paused]"
      >
        {items.map((item, i) => (
          <li
            key={`${item.name}-${i}`}
            aria-hidden={i >= marqueeTech.length || undefined}
            className="flex items-center gap-3 font-display text-xl font-medium tracking-tight sm:text-2xl"
          >
            <item.icon aria-hidden="true" className="size-5 sm:size-6" style={{ color: item.color }} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
