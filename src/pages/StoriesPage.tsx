import React from "react";
import { ChevronDown, MapPin, Users } from "lucide-react";
import { Hero } from "../components/Hero";
import { PhotoSlideshow } from "../components/PhotoSlideshow";
import { outreaches } from "../data/impactData";
import { optimizedPhoto } from "../lib/images";

const storyFields: { label: string; key: keyof (typeof outreaches)[number]["story"] }[] = [
  { label: "Community need", key: "need" },
  { label: "NHF response", key: "response" },
  { label: "Services provided", key: "servicesDetail" },
  { label: "People reached", key: "reachedDetail" },
  { label: "Partner support", key: "partnerDetail" },
  { label: "Lessons learned", key: "lessons" },
  { label: "Next steps", key: "next" },
];

export function StoriesPage() {
  return (
    <>
      <Hero title="Outreach Stories" text="Documented accounts of NHF outreach work — open any outreach below to read what happened, who was reached, and what we learned." image="/images/FB_IMG_1783012564264.jpg" />
      <section className="section">
        <div className="story-accordion">
          {outreaches.map((outreach, index) => (
            <details className="story-entry" key={outreach.title} open={index === outreaches.length - 3}>
              <summary>
                <span className="story-entry-heading">
                  <span className="status">{outreach.status}</span>
                  <strong>{outreach.title}</strong>
                  <span className="story-entry-meta">
                    <MapPin size={15} aria-hidden="true" /> {outreach.location}
                    <Users size={15} aria-hidden="true" /> {outreach.reached}
                  </span>
                </span>
                <ChevronDown className="story-entry-chevron" size={20} aria-hidden="true" />
              </summary>
              <div className="story-entry-body">
                {storyFields.map(({ label, key }) => (
                  <p key={label}>
                    <strong>{label}:</strong> {outreach.story[key]}
                  </p>
                ))}
                {outreach.photos && outreach.photos.length > 0 && (
                  <div className="story-photos">
                    {outreach.photos.map((photo) => {
                      const opt = optimizedPhoto(photo.src);
                      return (
                        <img
                          key={photo.src}
                          src={opt.src}
                          srcSet={opt.srcSet}
                          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                          alt={photo.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>
      <figure className="photo-band">
        <PhotoSlideshow
          photos={[
            { src: "/images/FB_IMG_1783012593613.jpg", alt: "NHF team member with a foundation banner at a community outreach" },
            { src: "/images/outreach/02-ovu-school-health-group-website.webp", alt: "Pupils and NHF volunteers gathered during the Ovu School Health Programme" },
            { src: "/images/outreach/04-sapele-outreach-team-website.webp", alt: "NHF outreach team and partners at the Sapele Medical Outreach" },
          ]}
          sizes="100vw"
        />
        <figcaption>Behind every story is a team of volunteers who showed up for their community.</figcaption>
      </figure>
    </>
  );
}
