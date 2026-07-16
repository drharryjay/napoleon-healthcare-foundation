import React from "react";
import { Hero } from "../components/Hero";
import { LinkButton } from "../components/LinkButton";
import { SectionHeader } from "../components/SectionHeader";
import { ImpactCard } from "../components/ImpactCard";
import { ServiceCard } from "../components/ServiceCard";
import { GuidingPrinciples } from "../components/GuidingPrinciples";
import { RegistrationNotice } from "../components/RegistrationNotice";
import { PartnerCTA } from "../components/PartnerCTA";
import { VolunteerCTA } from "../components/VolunteerCTA";
import { Reveal } from "../components/Reveal";
import { impactStats } from "../data/impactData";
import { homeServices } from "../data/servicesData";
import { optimizedPhoto } from "../lib/images";

const featureImage = optimizedPhoto("/images/outreach/01-ovu-school-health-presentation-website.webp");
const aboutImage = optimizedPhoto("/images/FB_IMG_1783012564264.jpg");

export function HomePage() {
  return (
    <>
      <Hero
        title="Bringing Healthcare Closer to Communities"
        text="Napoleon Healthcare Foundation provides free medical outreach, preventive health education, screening, and compassionate care for underserved communities in Nigeria."
        eyebrow="Serving with compassion"
        images={[
          "/images/FB_IMG_1783012553411.jpg",
          "/images/FB_IMG_1783012529277.jpg",
          "/images/FB_IMG_1783012545155.jpg",
          "/images/FB_IMG_1783012564264.jpg",
          "/images/FB_IMG_1783012581401.jpg",
        ]}
      >
        <LinkButton href="/donate">Support an Outreach</LinkButton>
        <LinkButton href="/volunteer" variant="secondary">Volunteer With Us</LinkButton>
        <LinkButton href="/partner" variant="ghost">Partner With Us</LinkButton>
      </Hero>
      <Reveal className="impact-strip">
        {impactStats.map((stat) => <ImpactCard key={stat.label} {...stat} />)}
      </Reveal>
      <section className="section route-section">
        <Reveal className="two-col">
          <div>
            <SectionHeader
              eyebrow="About NHF"
              title="A Nigerian community-health NGO focused on dignity and measurable impact"
              text="Napoleon Healthcare Foundation is committed to improving access to compassionate, preventive, and essential healthcare services for underserved communities. Through medical outreaches, health education, screening, treatment, follow-up, and strategic partnerships, NHF serves communities with dignity and measurable impact."
            />
            <LinkButton href="/about">Learn More About NHF</LinkButton>
          </div>
          <img
            className="framed-photo"
            src={aboutImage.src}
            srcSet={aboutImage.srcSet}
            sizes={aboutImage.sizes}
            width={1200}
            height={800}
            alt="NHF clinician consulting a patient during a community medical outreach"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </section>
      <GuidingPrinciples />
      <section className="section soft">
        <SectionHeader eyebrow="What we do" title="Practical healthcare support at community level" />
        <Reveal className="card-grid">
          {homeServices.map((service, index) => <ServiceCard key={service.title} title={service.title} summary={service.summary} index={index} />)}
        </Reveal>
      </section>
      <Reveal className="feature-wrap">
        <section className="feature">
          <img src={featureImage.src} srcSet={featureImage.srcSet} sizes={featureImage.sizes} width={1448} height={1086} alt="NHF team presenting to pupils and staff during the Ovu School Health Programme" loading="lazy" decoding="async" />
          <div>
            <span className="eyebrow">Featured outreach</span>
            <h2>Ovu School Health Programme</h2>
            <p>420 children reached with oral health education, medical consultations, and hygiene kits at Okuodi Primary School, Ovu — one of several recent NHF community outreaches.</p>
            <LinkButton href="/stories">Read the Full Story</LinkButton>
          </div>
        </section>
      </Reveal>
      <RegistrationNotice />
      <PartnerCTA />
      <VolunteerCTA />
    </>
  );
}
