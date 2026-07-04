import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { ArticleCard } from "../components/ArticleCard";
import { ConsentNotice } from "../components/ConsentNotice";
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
        <SectionHeader eyebrow="Articles" title="Ready-to-expand article cards" />
        <div className="card-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </section>
      <section className="section"><ConsentNotice /></section>
    </>
  );
}
