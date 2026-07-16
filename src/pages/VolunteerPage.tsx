import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ContactForm } from "../components/ContactForm";
import { volunteerRoles } from "../data/volunteerData";

export function VolunteerPage() {
  return (
    <>
      <Hero title="Volunteer With NHF" text="Healthcare and non-healthcare volunteers are essential to compassionate, organized, and well-documented outreach programmes." image="/images/outreach/10-ovu-outreach-team-website.webp" />
      <section className="section soft">
        <SectionHeader eyebrow="Volunteer categories" title="Skills that strengthen each outreach" />
        <div className="tag-cloud">{volunteerRoles.filter((role) => role !== "Other").map((category) => <span key={category}>{category}</span>)}</div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Apply" title="Volunteer interest form" />
        <ContactForm type="volunteer" />
      </section>
    </>
  );
}
