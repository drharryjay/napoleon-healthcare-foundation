import React from "react";
import { SectionHeader } from "./SectionHeader";
import { faqs } from "../data/faqData";

// FAQPage structured data, generated from the same list that renders visibly
// below — so the schema always matches the on-page content (a requirement for
// valid FAQ structured data). This helps search engines and AI assistants
// extract direct question-and-answer pairs about NHF.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function FaqSection() {
  return (
    <section className="section soft">
      <SectionHeader eyebrow="Frequently asked questions" title="Common questions about NHF" />
      <div className="faq-list">
        {faqs.map((faq) => (
          <details className="faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
