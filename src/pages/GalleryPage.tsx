import React from "react";
import { Hero } from "../components/Hero";
import { GalleryGrid } from "../components/GalleryGrid";

export function GalleryPage() {
  return (
    <>
      <Hero title="Gallery" text="Photos from NHF outreach programmes — consultations, eye care, dental care, pharmacy, screening, health education, and volunteer teams in the field. Click any photo to view it larger." image="/images/FB_IMG_1783012611366.jpg" />
      <section className="section">
        <GalleryGrid />
      </section>
    </>
  );
}
