import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ArticleCard } from "../components/ArticleCard";
import { ConsentNotice } from "../components/ConsentNotice";
import { NewsletterForm } from "../components/NewsletterForm";
import { HealthNewsLinks } from "../components/HealthNewsLinks";
import { articles, categories } from "../data/articlesData";
import { optimizedPhoto } from "../lib/images";

const educationBand = optimizedPhoto("/images/FB_IMG_1783012537202.jpg");

export function HealthEducationPage() {
  return (
    <>
      <Hero title="Health Education Hub" text="Public health education resources for prevention, early detection, and healthier families." image="/images/FB_IMG_1783012575381.jpg" />
      <section className="section soft">
        <SectionHeader eyebrow="Categories" title="Topics for community education" />
        <div className="tag-cloud">{categories.map((category) => <span key={category}>{category}</span>)}</div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Articles" title="Ready-to-expand article cards" />
        <div className="card-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </section>
      <figure className="photo-band">
        <img
          src={educationBand.src}
          srcSet={educationBand.srcSet}
          sizes="100vw"
          width={1600}
          height={600}
          alt="NHF vision screening and health education station during a community outreach"
          loading="lazy"
          decoding="async"
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
      <section className="section"><ConsentNotice /></section>
    </>
  );
}
