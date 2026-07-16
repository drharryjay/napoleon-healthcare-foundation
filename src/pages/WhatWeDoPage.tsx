import React from "react";
import { Hero } from "../components/Hero";
import { PhotoSlideshow, SlidePhoto } from "../components/PhotoSlideshow";
import { services } from "../data/servicesData";

// Action photos for each service, drawn from NHF's own outreach photography.
// Keyed by the service title in servicesData so the two lists can't drift.
const servicePhotos: Record<string, SlidePhoto[]> = {
  "General Medical Consultations": [
    { src: "/images/FB_IMG_1783012564264.jpg", alt: "NHF staff conducting a medical consultation during a community outreach" },
    { src: "/images/outreach/sapele-e04.webp", alt: "Consultations in progress at the Sapele Medical Outreach" },
    { src: "/images/outreach/13-sapele-registration-triage-website.webp", alt: "Patient registration and triage during the Sapele Medical Outreach" },
  ],
  "Eye Care": [
    { src: "/images/FB_IMG_1783012529277.jpg", alt: "NHF volunteer fitting a community member with glasses during an eye care outreach" },
    { src: "/images/FB_IMG_1783012537202.jpg", alt: "NHF vision screening station during a community outreach" },
  ],
  "Dental Care": [
    { src: "/images/outreach/06-sapele-dental-care-website.webp", alt: "Dental care provided during the Sapele Medical Outreach" },
    { src: "/images/FB_IMG_1783012545155.jpg", alt: "NHF dental team providing dental care during a community outreach" },
  ],
  "Laboratory Screening": [
    { src: "/images/outreach/05-sapele-clinical-screening-website.webp", alt: "Clinical and laboratory screening during the Sapele Medical Outreach" },
    { src: "/images/outreach/14-sapele-finger-prick-screening-website.webp", alt: "Laboratory finger-prick screening during the Sapele Medical Outreach" },
    { src: "/images/outreach/15-sapele-blood-pressure-screening-website.webp", alt: "Blood-pressure screening during the Sapele Medical Outreach" },
  ],
  "Maternal and Child Health": [
    { src: "/images/outreach/07-sapele-health-counselling-website.webp", alt: "Health counselling during the Sapele Medical Outreach" },
    { src: "/images/FB_IMG_1783012553411.jpg", alt: "Community members gathered during an NHF outreach" },
  ],
  "Pharmacy and Medication Support": [
    { src: "/images/outreach/08-sapele-medication-support-website.webp", alt: "Pharmacy and medication support during the Sapele Medical Outreach" },
    { src: "/images/FB_IMG_1783012581401.jpg", alt: "NHF pharmacy table with medications during a community outreach" },
  ],
  "Health Education": [
    { src: "/images/outreach/16-sapele-health-education-speaker-website.webp", alt: "A community health education talk during the Sapele Medical Outreach" },
    { src: "/images/outreach/01-ovu-school-health-presentation-website.webp", alt: "NHF team presenting to pupils and staff during the Ovu School Health Programme" },
    { src: "/images/outreach/12-school-for-the-deaf-classroom-website.webp", alt: "Health education delivered in the classroom at the School of the Deaf, Sapele" },
  ],
  "Community Follow-Up": [
    { src: "/images/outreach/04-sapele-outreach-team-website.webp", alt: "NHF outreach team and partners at the Sapele Medical Outreach" },
    { src: "/images/outreach/10-ovu-outreach-team-website.webp", alt: "The NHF outreach team at the Ovu School Health Programme" },
  ],
};

export function WhatWeDoPage() {
  return (
    <>
      <Hero title="What We Do" text="NHF delivers community-based healthcare services that combine clinical care, prevention, education, and follow-up." image="/images/outreach/05-sapele-clinical-screening-website.webp" />
      <section className="section">
        <div className="service-rows">
          {services.map((service) => {
            const photos = servicePhotos[service.title] ?? [];
            return (
              <article className="service-row" key={service.title}>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.summary}</p>
                </div>
                {photos.length > 0 && (
                  <div className="service-row-media">
                    <PhotoSlideshow photos={photos} sizes="(max-width: 840px) 100vw, 50vw" interval={6000} />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
