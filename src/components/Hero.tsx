import React from "react";
import { HeartPulse } from "lucide-react";
import { heroImages } from "../data/siteConfig";

export function Hero({
  title,
  text,
  eyebrow,
  image = heroImages[0],
  children,
}: {
  title: string;
  text: string;
  eyebrow?: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="hero">
      <div className="hero-copy">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{text}</p>
        {children && <div className="button-row">{children}</div>}
      </div>
      <div className="hero-media" aria-label="Outreach photo area">
        <img src={image} alt="Napoleon Healthcare Foundation community medical outreach" />
        <div className="hero-note">
          <HeartPulse size={20} />
          <span>Preventive health for healthier communities.</span>
        </div>
      </div>
    </section>
  );
}
