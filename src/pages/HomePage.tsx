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
import { PhotoSlideshow } from "../components/PhotoSlideshow";
import { impactStats } from "../data/impactData";
import { homeServices } from "../data/servicesData";

// Slideshows that aren't tied to one programme rotate a single photo from each
// outreach, newest first, so a visitor sees the range of NHF's work rather than
// four frames of the same day.
const aboutPhotos = [
  { src: "/images/outreach/ogbe-04-consultation-nhf-banner.webp", alt: "Volunteer doctors consulting community members beside the NHF banner at the Ogbe-Ijaw Market outreach" },
  { src: "/images/outreach/wbw-06-delsuth-mothers-team.webp", alt: "Mothers and babies with the NHF and MWAN team at the Infant Welfare Clinic, DELSUTH, Oghara" },
  { src: "/images/outreach/04-sapele-outreach-team-website.webp", alt: "NHF outreach team and partners at the Ejemuojavwe women's health outreach" },
  { src: "/images/outreach/03-school-for-the-deaf-group-website.webp", alt: "NHF team with students at the Christian Missionary School of the Deaf, Sapele" },
  { src: "/images/outreach/02-ovu-school-health-group-website.webp", alt: "Pupils and NHF volunteers gathered during the Ovu School Health Programme" },
  { src: "/images/FB_IMG_1783012564264.jpg", alt: "NHF clinician consulting a patient during a community medical outreach" },
];

const ovuFeaturePhotos = [
  { src: "/images/outreach/01-ovu-school-health-presentation-website.webp", alt: "NHF team presenting to pupils and staff during the Ovu School Health Programme" },
  { src: "/images/outreach/02-ovu-school-health-group-website.webp", alt: "Pupils and NHF volunteers gathered during the Ovu School Health Programme" },
  { src: "/images/outreach/09-ovu-students-supplies-website.webp", alt: "Oral hygiene kits and supplies distributed to pupils at Ovu" },
  { src: "/images/outreach/ovu-e03.webp", alt: "Scene from the Ovu School Health Programme, May 2025" },
  { src: "/images/outreach/ovu-e04.webp", alt: "Scene from the Ovu School Health Programme, May 2025" },
];

// Latest outreach: leads with the doctors consulting, then screening and glasses.
const latestFeaturePhotos = [
  { src: "/images/outreach/ogbe-05-one-to-one-consultation.webp", alt: "Dr Harriet Akpughe, NHF CEO, consulting a woman at the Ogbe-Ijaw Market outreach" },
  { src: "/images/outreach/ogbe-04-consultation-nhf-banner.webp", alt: "Volunteer doctors consulting community members at tables beside the NHF banner, Ogbe-Ijaw Market" },
  { src: "/images/outreach/ogbe-02-blood-glucose-test.webp", alt: "A volunteer checks an elderly woman's blood sugar with a finger-prick test at the Ogbe-Ijaw Market outreach" },
  { src: "/images/outreach/ogbe-06-reading-glasses-fitted.webp", alt: "A man is fitted with free reading glasses while holding an NHF placard, Ogbe-Ijaw Market" },
  { src: "/images/outreach/ogbe-01-outreach-tent.webp", alt: "NHF and partner teams under the outreach tent beside the NHF banner, Ogbe-Ijaw Market" },
];

// Photo band closing the page — a spread across several different outreaches
// rather than a single programme, so the last thing a visitor sees is range.
const closingBandPhotos = [
  { src: "/images/outreach/ogbe-10-busy-outreach-tent.webp", alt: "Registration, screening and dispensing under the busy outreach tent, Ogbe-Ijaw Market" },
  { src: "/images/outreach/wbw-09-banner-rollup-group.webp", alt: "NHF team and mothers during World Breastfeeding Week 2026, Oghara" },
  { src: "/images/outreach/15-sapele-blood-pressure-screening-website.webp", alt: "Blood-pressure screening at the Ejemuojavwe women's health outreach" },
  { src: "/images/outreach/12-school-for-the-deaf-classroom-website.webp", alt: "Health education delivered in the classroom at the School of the Deaf" },
  { src: "/images/outreach/09-ovu-students-supplies-website.webp", alt: "Oral hygiene kits and supplies distributed to pupils at Ovu" },
];


export function HomePage() {
  return (
    <>
      <Hero
        title="Bringing Healthcare Closer to Communities"
        text="Napoleon Healthcare Foundation provides free medical outreach, preventive health education, screening, and compassionate care for underserved communities in Nigeria."
        eyebrow="Serving with compassion"
        images={[
          "/images/outreach/ogbe-02-blood-glucose-test.webp",
          "/images/outreach/wbw-01-mothers-group-phc.webp",
          "/images/outreach/13-sapele-registration-triage-website.webp",
          "/images/outreach/03-school-for-the-deaf-group-website.webp",
          "/images/outreach/02-ovu-school-health-group-website.webp",
          "/images/FB_IMG_1783012553411.jpg",
          "/images/FB_IMG_1783012529277.jpg",
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
          <div className="framed-photo slideshow-host">
            <PhotoSlideshow photos={aboutPhotos} sizes="(max-width: 840px) 100vw, 50vw" interval={5500} />
          </div>
        </Reveal>
      </section>
      <GuidingPrinciples />
      <Reveal className="feature-wrap">
        <section className="feature">
          <div className="feature-media">
            <PhotoSlideshow photos={ovuFeaturePhotos} sizes="(max-width: 840px) 100vw, 50vw" />
          </div>
          <div className="feature-copy">
            <span className="eyebrow">Featured outreach</span>
            <h2>Ovu School Health Programme</h2>
            <p>420 children reached with oral health education, medical consultations, and hygiene kits at Okuodi Primary School, Ovu — one of several recent NHF community outreaches.</p>
            <LinkButton href="/stories">Read the Full Story</LinkButton>
          </div>
        </section>
      </Reveal>
      <section className="section soft">
        <SectionHeader eyebrow="What we do" title="Practical healthcare support at community level" />
        <Reveal className="card-grid">
          {homeServices.map((service, index) => <ServiceCard key={service.title} title={service.title} summary={service.summary} index={index} />)}
        </Reveal>
      </section>
      <Reveal className="feature-wrap">
        <section className="feature reverse">
          <div className="feature-copy">
            <span className="eyebrow">Latest outreach · 24 October 2026</span>
            <h2>Free Medical Outreach, Ogbe-Ijaw Market</h2>
            <p>96 consultations and 84 pairs of free reading glasses in Warri South, with 38 chest X-rays, 52 blood glucose tests, 34 lipid profiles and 44 voluntary HIV tests, delivered with Kings and Queens Helping Hand Foundation and Endybekx Initiative for Children and Women Empowerment.</p>
            <LinkButton href="/stories">Read the Full Story</LinkButton>
          </div>
          <div className="feature-media">
            <PhotoSlideshow photos={latestFeaturePhotos} sizes="(max-width: 840px) 100vw, 50vw" />
          </div>
        </section>
      </Reveal>
      <RegistrationNotice />
      <Reveal className="video-band">
        <h2>A week with the mothers of Oghara</h2>
        <p>Scenes from World Breastfeeding Week 2026 — health talks, demonstrations, and gift distribution across Ejemuojavwe PHC, Ogharefe PHC, and the Infant Welfare Clinic at DELSUTH.</p>
        <video
          controls
          preload="none"
          playsInline
          poster="/video/wbw-2026-poster.webp"
          aria-label="Video: Napoleon Healthcare Foundation during World Breastfeeding Week 2026 in Oghara, Delta State"
        >
          <source src="/video/wbw-2026.mp4" type="video/mp4" />
          Your browser cannot play this video. It shows NHF's World Breastfeeding Week 2026 outreach in Oghara, Delta State.
        </video>
      </Reveal>
      <PartnerCTA />
      <figure className="photo-band">
        <PhotoSlideshow photos={closingBandPhotos} sizes="100vw" />
        <figcaption>Ten years of showing up — communities, schools, and clinics across Delta and Rivers States.</figcaption>
      </figure>
      <VolunteerCTA />
    </>
  );
}
