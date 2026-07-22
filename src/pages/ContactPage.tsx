import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ContactForm } from "../components/ContactForm";
import { FaqSection } from "../components/FaqSection";
import { LinkButton } from "../components/LinkButton";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export function ContactPage() {
  return (
    <>
      <Hero title="Contact NHF" text="Reach out for partnerships, volunteering, donations, outreach requests, or public health collaboration." image="/images/FB_IMG_1783012611366.jpg" />
      <section className="section two-col">
        <div>
          <SectionHeader eyebrow="Contact details" title="Official details" />
          <p><Mail size={16} /> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
          <p><Phone size={16} /> <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a></p>
          <p><MapPin size={16} /> {siteConfig.address}</p>
          <p><strong>WhatsApp:</strong> {siteConfig.whatsapp}</p>
          <p><strong>Facebook:</strong> <a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer">{siteConfig.facebook}</a></p>
          <p><strong>X/Twitter:</strong> <a href={siteConfig.twitterUrl} target="_blank" rel="noreferrer">{siteConfig.twitter}</a></p>
          <LinkButton href="/partner">Partnership Inquiry</LinkButton>
        </div>
        <ContactForm />
      </section>
      <FaqSection />
    </>
  );
}
