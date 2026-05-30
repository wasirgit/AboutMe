import { marquee } from "@/lib/data";

/**
 * Infinite tech ticker. The track holds two copies of the list and slides
 * -50%, so the loop is seamless. Edges fade via the mask utility.
 */
export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="mask-fade-x relative flex overflow-hidden border-y border-[var(--hair)] py-5">
      <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-10 pr-10">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest text-faint"
          >
            {item}
            <span className="text-[var(--color-accent)]">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
