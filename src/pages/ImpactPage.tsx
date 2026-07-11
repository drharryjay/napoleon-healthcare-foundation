import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ImpactCard } from "../components/ImpactCard";
import { OutreachCard } from "../components/OutreachCard";
import { dashboardStats, outreaches } from "../data/impactData";
import { optimizedPhoto } from "../lib/images";

const impactBand = optimizedPhoto("/images/FB_IMG_1783012581401.jpg");

export function ImpactPage() {
  return (
    <>
      <Hero title="Our Impact" text="A dashboard-style record of outreach activity, editable metrics, and reusable community story cards." image="/images/FB_IMG_1783012553411.jpg" />
      <section className="impact-strip wrap">
        {dashboardStats.map((stat) => <ImpactCard key={stat.label} {...stat} />)}
      </section>
      <figure className="photo-band">
        <img
          src={impactBand.src}
          srcSet={impactBand.srcSet}
          sizes="100vw"
          width={1600}
          height={600}
          alt="NHF pharmacy table stocked with medications during a community outreach"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Every statistic above is a person served — medications, screening, and care given free of charge.</figcaption>
      </figure>
      <section className="section">
        <SectionHeader eyebrow="Outreach records" title="Reusable outreach cards" />
        <div className="outreach-grid">{outreaches.map((outreach) => <OutreachCard key={outreach.title} outreach={outreach} />)}</div>
      </section>
    </>
  );
}
