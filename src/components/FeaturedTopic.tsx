import React from "react";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import type { HealthTopic } from "../data/healthTopics";
import { disclaimer } from "../data/articlesData";

/**
 * A long-form health education topic: numbered guidance sections, a red-flag
 * panel, and the sources it is drawn from. Written for a lay audience, so the
 * layout stays a single readable column rather than a card grid.
 */
export function FeaturedTopic({ topic }: { topic: HealthTopic }) {
  return (
    <section className="section topic">
      <SectionHeader eyebrow={topic.eyebrow} title={topic.title} text={topic.intro} />

      <ol className="topic-sections">
        {topic.sections.map((section) => (
          <li key={section.heading}>
            <h3>{section.heading}</h3>
            <p>{section.body}</p>
            {section.points && (
              <ul>
                {section.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>

      <aside className="topic-warning" role="note">
        <h3>
          <AlertTriangle size={20} aria-hidden="true" />
          {topic.warning.heading}
        </h3>
        <p>{topic.warning.intro}</p>
        <ul>
          {topic.warning.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <p className="topic-warning-footer">{topic.warning.footer}</p>
      </aside>

      <div className="topic-sources">
        <h3>Where this guidance comes from</h3>
        <ul>
          {topic.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.label} <ExternalLink size={13} aria-hidden="true" />
              </a>
              <span>{source.publisher}</span>
            </li>
          ))}
        </ul>
        <small>{disclaimer}</small>
      </div>
    </section>
  );
}
