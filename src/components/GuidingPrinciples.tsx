import React from "react";
import { Activity, HeartPulse, ShieldCheck, Users } from "lucide-react";
import { guidingPrinciples } from "../data/trusteesData";
import { SectionHeader } from "./SectionHeader";

const icons = [HeartPulse, Activity, ShieldCheck, Users];

export function GuidingPrinciples() {
  return (
    <section className="section soft">
      <SectionHeader eyebrow="Guiding principles" title="What shapes every NHF outreach" />
      <div className="card-grid">
        {guidingPrinciples.map((principle, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article className="service-card" key={principle.title}>
              <div className="icon-badge"><Icon size={22} /></div>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
