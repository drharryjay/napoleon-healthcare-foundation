import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ContactForm } from "../components/ContactForm";
import { partnerAudiences, partnershipOptions } from "../data/partnersData";

export function PartnerPage() {
  return (
    <>
      <Hero title="Partner With NHF" text="Bring healthcare closer to communities through outreach sponsorship, supplies, clinical support, logistics, and public health education." image="/images/FB_IMG_1783012581401.jpg" />
      <section className="section two-col">
        <div>
          <SectionHeader eyebrow="Why partner" title="Credible community health work needs trusted collaboration" />
          <p>NHF partners with mission-aligned organizations to extend screening, consultations, medicines, referrals, maternal care support, and prevention education.</p>
          <div className="tag-cloud">{partnerAudiences.map((audience) => <span key={audience}>{audience}</span>)}</div>
        </div>
        <div>
          <SectionHeader eyebrow="Options" title="Ways to support an outreach" />
          <ul className="check-list">{partnershipOptions.map((option) => <li key={option}>{option}</li>)}</ul>
        </div>
      </section>
      <section className="section soft">
        <SectionHeader eyebrow="Inquiry" title="Request a partnership meeting" />
        <ContactForm type="partner" />
      </section>
    </>
  );
}
