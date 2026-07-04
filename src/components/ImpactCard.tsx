import React from "react";

/**
 * Parses values like "4,500+", "70+", "7", "100" into a countable number plus
 * suffix. Non-numeric values ("Pending", "Compassion") render as-is.
 */
function parseValue(value: string): { target: number; suffix: string } | null {
  const match = value.match(/^([\d,]+)(\+?)$/);
  if (!match) return null;
  const target = Number(match[1].replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;
  return { target, suffix: match[2] };
}

function useCountUp(value: string) {
  const parsed = React.useMemo(() => parseValue(value), [value]);
  const ref = React.useRef<HTMLElement>(null);
  const [display, setDisplay] = React.useState(parsed ? "0" : value);

  React.useEffect(() => {
    if (!parsed) {
      setDisplay(value);
      return;
    }
    const { target, suffix } = parsed;
    const format = (n: number) => `${Math.round(n).toLocaleString("en-US")}${suffix}`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(format(target));
      return;
    }

    const node = ref.current;
    if (!node) {
      setDisplay(format(target));
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          setDisplay(format(target * eased));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, parsed]);

  return { ref, display };
}

export function ImpactCard({ value, label, note }: { value: string; label: string; note?: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <article className="impact-card">
      <strong ref={ref} aria-label={value}>{display}</strong>
      <span>{label}</span>
      {note && <small>{note}</small>}
    </article>
  );
}
