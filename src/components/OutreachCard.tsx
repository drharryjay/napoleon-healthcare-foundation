import React from "react";
import { MapPin, Users } from "lucide-react";
import { outreaches } from "../data/impactData";
import { LinkButton } from "./LinkButton";
import { optimizedPhoto } from "../lib/images";

export function OutreachCard({ outreach }: { outreach: (typeof outreaches)[number] }) {
  const opt = optimizedPhoto(outreach.image);
  return (
    <article className="outreach-card">
      <img src={opt.src} srcSet={opt.srcSet} sizes="(max-width: 640px) 100vw, 210px" width={640} height={480} alt={`${outreach.title} outreach photo`} loading="lazy" decoding="async" />
      <div>
        <span className="status">{outreach.status}</span>
        <h3>{outreach.title}</h3>
        <p><MapPin size={16} /> {outreach.location}</p>
        <p><Users size={16} /> {outreach.partner}</p>
        <p>{outreach.services}</p>
        <p><strong>Number reached:</strong> {outreach.reached}</p>
        <LinkButton href="/stories" variant="ghost">Read Story</LinkButton>
      </div>
    </article>
  );
}
