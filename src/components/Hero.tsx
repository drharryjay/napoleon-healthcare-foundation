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
      <div className="hero-copy">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{text}</p>
        {children && <div className="button-row">{children}</div>}
      </div>
      <div className="hero-media" aria-label="Outreach photo area">
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
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Show outreach photo ${index + 1}`}
                className={index === active ? "is-active" : ""}
                onClick={() => setActive(index)}
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
