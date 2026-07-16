import React from "react";
import { Hero } from "../components/Hero";
import { outreaches } from "../data/impactData";
import { optimizedPhoto } from "../lib/images";

const storiesBand = optimizedPhoto("/images/FB_IMG_1783012593613.jpg");

const storyFields: { label: string; key: "need" | "response" | "servicesDetail" | "reachedDetail" | "partnerDetail" | "photosNote" | "lessons" | "next" }[] = [
  { label: "Community need", key: "need" },
  { label: "NHF response", key: "response" },
  { label: "Services provided", key: "servicesDetail" },
  { label: "People reached", key: "reachedDetail" },
  { label: "Partner support", key: "partnerDetail" },
  { label: "Photos", key: "photosNote" },
  { label: "Lessons learned", key: "lessons" },
  { label: "Next steps", key: "next" },
];

export function StoriesPage() {
  return (
    <>
      <Hero title="Outreach Stories" text="Verified accounts of NHF outreach work, added as each report is confirmed. Outreaches still awaiting verified figures are marked accordingly below." image="/images/FB_IMG_1783012564264.jpg" />
      <section className="section">
        <div className="story-list">
          {outreaches.map((outreach) => (
            <article key={outreach.title} className="story-card">
              <h2>{outreach.title}</h2>
              <div className="story-fields">
                {storyFields.map(({ label, key }) => (
                  <p key={label}>
                    <strong>{label}:</strong>{" "}
                    {outreach.story ? outreach.story[key] : "Verified outreach reporting for this field is pending confirmation."}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <figure className="photo-band">
        <img
          src={storiesBand.src}
          srcSet={storiesBand.srcSet}
          sizes="100vw"
          width={1600}
          height={600}
          alt="NHF team member with a foundation banner at a community outreach"
          loading="lazy"
          decoding="async"
        />
        <figcaption>Behind every story is a team of volunteers who showed up for their community.</figcaption>
      </figure>
    </>
  );
}
