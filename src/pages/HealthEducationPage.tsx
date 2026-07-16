import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ArticleCard } from "../components/ArticleCard";
import { NewsletterForm } from "../components/NewsletterForm";
import { HealthNewsLinks } from "../components/HealthNewsLinks";
import { PhotoSlideshow } from "../components/PhotoSlideshow";
import { articles, categories } from "../data/articlesData";

export function HealthEducationPage() {
  return (
    <>
      <Hero title="Health Education Hub" text="Public health education resources for prevention, early detection, and healthier families." image="/images/FB_IMG_1783012575381.jpg" />
      <section className="section soft">
        <SectionHeader eyebrow="Categories" title="Topics for community education" />
        <div className="tag-cloud">{categories.map((category) => <span key={category}>{category}</span>)}</div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Articles" title="Health education articles" />
        <div className="card-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </section>
      <figure className="photo-band">
        <PhotoSlideshow
          photos={[
            { src: "/images/outreach/09-ovu-students-supplies-website.webp", alt: "Oral hygiene kits and health supplies distributed to pupils during the Ovu School Health Programme" },
            { src: "/images/outreach/12-school-for-the-deaf-classroom-website.webp", alt: "Health education delivered in the classroom at the School of the Deaf, Sapele" },
            { src: "/images/outreach/ovu-e05.webp", alt: "Scene from the Ovu School Health Programme, May 2025" },
          ]}
          sizes="100vw"
        />
        <figcaption>Health education in action — prevention taught where people live, work, and gather.</figcaption>
      </figure>
      <section className="split-cta">
        <div>
          <span className="eyebrow">Newsletter</span>
          <h2>Get NHF Updates &amp; Public Health News</h2>
          <p>Subscribe for news on upcoming outreaches, health education campaigns, and public health events.</p>
        </div>
        <NewsletterForm variant="dark" />
      </section>
      <section className="section soft">
        <SectionHeader eyebrow="Health news" title="Trusted public health updates" text="Follow ongoing disease surveillance and public health news from these official sources." />
        <HealthNewsLinks />
      </section>
    </>
  );
}
