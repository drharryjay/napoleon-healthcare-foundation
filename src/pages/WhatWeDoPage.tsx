import React from "react";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/servicesData";
import { optimizedPhoto } from "../lib/images";

const serviceBand = optimizedPhoto("/images/FB_IMG_1783012604139.jpg");

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
          width={1600}
          height={600}
          alt="NHF staff conducting laboratory screening during a community outreach"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Screening, treatment, and follow-up delivered on the ground, at no cost to the community.</figcaption>
      </figure>
    </>
  );
}
