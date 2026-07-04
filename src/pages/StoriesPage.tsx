import React from "react";
import { Hero } from "../components/Hero";
import { outreaches } from "../data/impactData";

const storyFields = ["Community need", "NHF response", "Services provided", "People reached", "Partner support", "Photos", "Lessons learned", "Next steps"];

export function StoriesPage() {
  return (
    <>
      <Hero title="Outreach Stories" text="Story templates are ready for community need, NHF response, services provided, people reached, partner support, photos, lessons learned, and next steps." image="/images/FB_IMG_1783012564264.jpg" />
      <section className="section">
        <div className="story-list">
          {outreaches.slice(0, 3).map((story) => (
            <article key={story.title} className="story-card">
              <h2>{story.title}</h2>
              <div className="story-fields">
                {storyFields.map((field) => (
                  <p key={field}><strong>{field}:</strong> Placeholder content to be replaced with verified outreach reporting.</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
