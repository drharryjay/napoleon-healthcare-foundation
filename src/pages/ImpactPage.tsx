import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ImpactCard } from "../components/ImpactCard";
import { OutreachCard } from "../components/OutreachCard";
import { dashboardStats, outreaches } from "../data/impactData";

export function ImpactPage() {
  return (
    <>
      <Hero title="Our Impact" text="A dashboard-style record of outreach activity, editable metrics, and reusable community story cards." image="/images/FB_IMG_1783012553411.jpg" />
      <section className="impact-strip wrap">
        {dashboardStats.map((stat) => <ImpactCard key={stat.label} {...stat} />)}
      </section>
      <section className="section">
        <SectionHeader eyebrow="Outreach records" title="Reusable outreach cards" />
        <div className="outreach-grid">{outreaches.map((outreach) => <OutreachCard key={outreach.title} outreach={outreach} />)}</div>
      </section>
    </>
  );
}
