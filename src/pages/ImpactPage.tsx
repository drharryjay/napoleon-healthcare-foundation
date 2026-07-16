import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ImpactCard } from "../components/ImpactCard";
import { OutreachCard } from "../components/OutreachCard";
import { PhotoSlideshow } from "../components/PhotoSlideshow";
import { dashboardStats, outreaches } from "../data/impactData";

export function ImpactPage() {
  return (
    <>
      <Hero title="Our Impact" text="A record of NHF outreach activity — headline metrics and individual outreach reports, updated as each figure is verified." image="/images/FB_IMG_1783012553411.jpg" />
      <section className="impact-strip wrap">
        {dashboardStats.map((stat) => <ImpactCard key={stat.label} {...stat} />)}
      </section>
      <figure className="photo-band">
        <PhotoSlideshow
          photos={[
            { src: "/images/outreach/08-sapele-medication-support-website.webp", alt: "Pharmacy and medication support during the Sapele Medical Outreach" },
            { src: "/images/outreach/sapele-e04.webp", alt: "Scene from the Sapele Medical Outreach, June 2026" },
            { src: "/images/outreach/13-sapele-registration-triage-website.webp", alt: "Patient registration and triage during the Sapele Medical Outreach" },
            { src: "/images/outreach/sapele-e06.webp", alt: "Scene from the Sapele Medical Outreach, June 2026" },
          ]}
          sizes="100vw"
        />
        <figcaption>Every statistic above is a person served — medications, screening, and care given free of charge.</figcaption>
      </figure>
      <section className="section">
        <SectionHeader eyebrow="Outreach records" title="Outreach by outreach" />
        <div className="outreach-grid">{outreaches.map((outreach) => <OutreachCard key={outreach.title} outreach={outreach} />)}</div>
      </section>
    </>
  );
}
