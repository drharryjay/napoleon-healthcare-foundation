import React from "react";
import { HeartPulse } from "lucide-react";
import { heroImages } from "../data/siteConfig";
import { optimizedPhoto } from "../lib/images";

export function Hero({
  title,
  text,
  eyebrow,
  image = heroImages[0],
  images,
  children,
}: {
  title: string;
  text: string;
  eyebrow?: string;
  image?: string;
  images?: string[];
  children?: React.ReactNode;
}) {
  const slides = images && images.length > 1 ? images : [image];
  const [active, setActive] = React.useState(0);
  const dotRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  function handleDotKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number | null = null;
    if (event.key === "ArrowRight") next = (index + 1) % slides.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + slides.length) % slides.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = slides.length - 1;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    dotRefs.current[next]?.focus();
  }

  React.useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        {slides.map((src, index) => {
          const opt = optimizedPhoto(src);
          return (
            <img
              key={src}
              src={opt.src}
              srcSet={opt.srcSet}
              sizes="100vw"
              alt=""
              className={index === active ? "is-active" : ""}
              loading="lazy"
              decoding="async"
            />
          );
        })}
      </div>
      <div className="hero-copy">
        {eyebrow && <span className="eyebrow hero-enter" style={{ "--enter": 0 } as React.CSSProperties}>{eyebrow}</span>}
        <h1>
          {/* Word-by-word rise on load. The space lives OUTSIDE each
              inline-block span — trailing whitespace inside an inline-block
              is trimmed by the browser, which ran the words together. */}
          {title.split(" ").map((word, index) => (
            <React.Fragment key={`${word}-${index}`}>
              <span className="hero-word" style={{ "--i": index } as React.CSSProperties}>{word}</span>{" "}
            </React.Fragment>
          ))}
        </h1>
        <p className="hero-enter" style={{ "--enter": 1 } as React.CSSProperties}>{text}</p>
        {children && <div className="button-row hero-enter" style={{ "--enter": 2 } as React.CSSProperties}>{children}</div>}
      </div>
      <div className="hero-media hero-media-enter" aria-label="Outreach photo area">
        {slides.map((src, index) => {
          const opt = optimizedPhoto(src);
          return (
            <img
              key={src}
              src={opt.src}
              srcSet={opt.srcSet}
              sizes={opt.sizes}
              width={1200}
              height={800}
              alt="Napoleon Healthcare Foundation community medical outreach"
              className={index === active ? "hero-slide is-active" : "hero-slide"}
              aria-hidden={index === active ? undefined : true}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
              decoding={index === 0 ? "sync" : "async"}
            />
          );
        })}
        {slides.length > 1 && (
          <div className="hero-dots" role="tablist" aria-label="Outreach photo selector">
            {slides.map((src, index) => (
              <button
                key={src}
                ref={(el) => { dotRefs.current[index] = el; }}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Show outreach photo ${index + 1}`}
                tabIndex={index === active ? 0 : -1}
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
                onKeyDown={(event) => handleDotKeyDown(event, index)}
              />
            ))}
          </div>
        )}
        <div className="hero-note">
          <HeartPulse size={20} />
          <span>Preventive health for healthier communities.</span>
        </div>
      </div>
    </section>
  );
}
