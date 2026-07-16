import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setVisible(true);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reveal when intersecting, or when already scrolled past (an instant
        // jump — keyboard End, anchor link — can move the element from below
        // the viewport to above it in a single frame, so the intersecting
        // state never fires and the content would stay invisible forever).
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) show();
      },
      { threshold: 0.15 }
    );
    observer.observe(node);

    // Scroll fallback for the same jump-past case between observer callbacks.
    const onScroll = () => {
      if (node.getBoundingClientRect().top < window.innerHeight) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Last-resort safety net: content must never stay hidden just because a
    // reveal trigger failed to fire (throttled renderers, exotic browsers).
    // Reveal-on-scroll is an enhancement, not a gate.
    const failSafe = window.setTimeout(show, 4000);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(failSafe);
    };
  }, []);

  return { ref, className: visible ? "reveal reveal-visible" : "reveal" };
}
