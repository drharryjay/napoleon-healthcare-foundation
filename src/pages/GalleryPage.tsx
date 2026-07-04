import React from "react";
import { Hero } from "../components/Hero";
import { GalleryGrid } from "../components/GalleryGrid";
import { ConsentNotice } from "../components/ConsentNotice";

export function GalleryPage() {
  return (
    <>
      <Hero title="Gallery" text="Photo categories are ready for consultation, eye care, dental care, pharmacy, screening, health education, partners, teams, and volunteers." image="/images/FB_IMG_1783012611366.jpg" />
      <section className="section">
        <GalleryGrid />
      </section>
      <section className="section"><ConsentNotice /></section>
    </>
  );
}
