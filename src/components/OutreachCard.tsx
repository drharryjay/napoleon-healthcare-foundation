import React from "react";
import { MapPin, Users } from "lucide-react";
import { outreaches } from "../data/impactData";
import { LinkButton } from "./LinkButton";

export function OutreachCard({ outreach }: { outreach: (typeof outreaches)[number] }) {
  return (
    <article className="outreach-card">
      <img src={outreach.image} alt={`${outreach.title} gallery placeholder`} />
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
