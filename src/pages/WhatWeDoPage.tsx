import React from "react";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { services } from "../data/servicesData";

export function WhatWeDoPage() {
  return (
    <>
      <Hero title="What We Do" text="NHF delivers community-based healthcare services that combine clinical care, prevention, education, and follow-up." image="/images/FB_IMG_1783012545155.jpg" />
      <section className="section">
        <div className="card-grid">
          {services.map((service, index) => <ServiceCard key={service.title} title={service.title} summary={service.summary} index={index} />)}
        </div>
      </section>
    </>
  );
}
