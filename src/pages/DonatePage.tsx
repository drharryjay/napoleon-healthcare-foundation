import React from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { DonationCard } from "../components/DonationCard";
import { donationCategories } from "../data/partnersData";
import { siteConfig } from "../data/siteConfig";

const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "").replace(/^0/, "234");

export function DonatePage() {
  return (
    <>
      <Hero title="Donate / Support" text="Every contribution supports outreach planning, medications, consumables, screening materials, logistics, health education, and follow-up reporting." image="/images/outreach/08-sapele-medication-support-website.webp" />
      <section className="section">
        <SectionHeader eyebrow="Support categories" title="Choose a practical way to help" />
        <div className="card-grid">{donationCategories.map((category) => <DonationCard key={category.label} label={category.label} description={category.description} />)}</div>
      </section>
      <section className="section soft two-col">
        <div>
          <SectionHeader eyebrow="Ways to give" title="Make your donation today" />
          <p>To make a gift or sponsor an outreach, reach our team directly by email, phone, or WhatsApp. We will confirm the support area you choose, guide you through the transfer, and provide documentation for your records.</p>
          <p><Mail size={16} /> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
          <p><Phone size={16} /> <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a></p>
          <p><a className="footer-contact-link" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Message us on WhatsApp</a></p>
        </div>
        <div>
          <SectionHeader eyebrow="Accountability" title="Transparent documentation" />
          <p>NHF is committed to transparent documentation of supported activities, including outreach reports, service summaries, partner acknowledgements, and follow-up reporting where applicable.</p>
        </div>
      </section>
    </>
  );
}
