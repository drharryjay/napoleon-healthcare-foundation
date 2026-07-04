import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ImpactCard } from "../components/ImpactCard";
import { RegistrationNotice } from "../components/RegistrationNotice";
import { heroImages } from "../data/siteConfig";
import { trustees } from "../data/trusteesData";

const values = ["Compassion", "Access", "Prevention", "Integrity", "Community Partnership", "Service"];
const approach = ["Identify community need", "Mobilize partners and volunteers", "Conduct outreach and screening", "Provide treatment, counselling, and referrals", "Follow up and document impact"];

export function AboutPage() {
  return (
    <>
      <Hero title="About Napoleon Healthcare Foundation" text="A Nigerian community-health organization committed to improving access to free, compassionate, and preventive healthcare services for underserved communities." image={heroImages[2]} />
      <section className="section two-col">
        <div>
          <SectionHeader eyebrow="Mission" title="Compassionate care, prevention, and partnership" />
          <p>To improve access to compassionate, preventive, and essential healthcare services for underserved communities through free medical outreaches, health education, screening, treatment, follow-up, and strategic partnerships.</p>
        </div>
        <div>
          <SectionHeader eyebrow="Vision" title="Timely healthcare regardless of income or location" />
          <p>A Nigeria where underserved communities can access timely, preventive, and compassionate healthcare regardless of location or income.</p>
        </div>
      </section>
      <section className="section soft">
        <SectionHeader eyebrow="Values" title="What guides NHF" />
        <div className="mini-grid">{values.map((value) => <ImpactCard key={value} value={value} label="NHF value" />)}</div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Our approach" title="From community need to documented impact" />
        <div className="process">{approach.map((step, index) => <div key={step}><strong>{index + 1}</strong><span>{step}</span></div>)}</div>
      </section>
      <RegistrationNotice />
      <section className="section soft">
        <SectionHeader eyebrow="Leadership" title="Board of trustees" text="Bios, portraits, and roles for each trustee are being finalized and will be added here." />
        <div className="card-grid three">
          {trustees.map((trustee) => (
            <article className="profile-card" key={trustee.name}>
              <div />
              <h3>{trustee.name}</h3>
              <p>Incorporated trustee &middot; {trustee.occupation}. Full biography and portrait to be added.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
