import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ImpactCard } from "../components/ImpactCard";
import { OutreachCard } from "../components/OutreachCard";
import { PhotoSlideshow } from "../components/PhotoSlideshow";
import { dashboardStats, outreachesNewestFirst } from "../data/impactData";

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
            { src: "/images/outreach/wbw-07-diapers-mothers.webp", alt: "Mothers with infant care items received during World Breastfeeding Week 2026, Oghara" },
            { src: "/images/outreach/08-sapele-medication-support-website.webp", alt: "Pharmacy and medication support during the Ejemuojavwe women's health outreach" },
            { src: "/images/outreach/12-school-for-the-deaf-classroom-website.webp", alt: "Health education delivered in the classroom at the School of the Deaf, Sapele" },
            { src: "/images/outreach/09-ovu-students-supplies-website.webp", alt: "Oral hygiene kits and supplies distributed to pupils at Ovu" },
            { src: "/images/outreach/13-sapele-registration-triage-website.webp", alt: "Patient registration and triage during the Ejemuojavwe women's health outreach" },
          ]}
          sizes="100vw"
        />
        <figcaption>Every statistic above is a person served — medications, screening, and care given free of charge.</figcaption>
      </figure>
      <section className="section">
        <SectionHeader eyebrow="Outreach records" title="Outreach by outreach" />
        <div className="outreach-grid">{outreachesNewestFirst.map((outreach) => <OutreachCard key={outreach.title} outreach={outreach} />)}</div>
      </section>
    </>
  );
}
