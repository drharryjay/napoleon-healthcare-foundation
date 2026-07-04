import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ContactForm } from "../components/ContactForm";

const volunteerCategories = ["Doctors", "Nurses", "Pharmacists", "Laboratory Scientists", "Dentists", "Optometrists/Ophthalmology Team", "Public Health Professionals", "Medical Students", "Data and Reporting Volunteers", "Media and Content Volunteers", "Logistics Volunteers"];

export function VolunteerPage() {
  return (
    <>
      <Hero title="Volunteer With NHF" text="Healthcare and non-healthcare volunteers are essential to compassionate, organized, and well-documented outreach programmes." image="/images/FB_IMG_1783012593613.jpg" />
      <section className="section soft">
        <SectionHeader eyebrow="Volunteer categories" title="Skills that strengthen each outreach" />
        <div className="tag-cloud">{volunteerCategories.map((category) => <span key={category}>{category}</span>)}</div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Apply" title="Volunteer interest form" />
        <ContactForm type="volunteer" />
      </section>
    </>
  );
}
