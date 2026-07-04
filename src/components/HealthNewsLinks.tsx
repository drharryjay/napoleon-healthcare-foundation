import React from "react";
import { ExternalLink, Globe2 } from "lucide-react";
import { healthNewsLinks } from "../data/newsData";

export function HealthNewsLinks() {
  return (
    <div className="card-grid three">
      {healthNewsLinks.map((source) => (
        <a className="service-card news-link-card" key={source.name} href={source.url} target="_blank" rel="noreferrer">
          <div className="icon-badge"><Globe2 size={22} /></div>
          <h3>{source.name}</h3>
          <p>{source.description}</p>
          <span className="news-link-cta">Visit site <ExternalLink size={14} /></span>
        </a>
      ))}
    </div>
  );
}
