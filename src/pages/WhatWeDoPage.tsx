import React from "react";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/servicesData";
import { optimizedPhoto } from "../lib/images";

const serviceBand = optimizedPhoto("/images/outreach/05-sapele-clinical-screening-website.webp");

export function WhatWeDoPage() {
  return (
    <>
      <Hero title="What We Do" text="NHF delivers community-based healthcare services that combine clinical care, prevention, education, and follow-up." image="/images/FB_IMG_1783012545155.jpg" />
      <section className="section">
        <div className="card-grid">
          {services.map((service, index) => <ServiceCard key={service.title} title={service.title} summary={service.summary} index={index} />)}
        </div>
      </section>
      <figure className="photo-band">
        <img
          src={serviceBand.src}
          srcSet={serviceBand.srcSet}
          sizes="100vw"
          width={1448}
          height={1086}
          alt="Clinical and laboratory screening during the Sapele Medical Outreach"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Screening, treatment, and follow-up delivered on the ground, at no cost to the community.</figcaption>
      </figure>
    </>
  );
}
