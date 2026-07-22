import React from "react";
import { BadgeCheck, ChevronDown, FileText, Users } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { trustees } from "../data/trusteesData";
import { SectionHeader } from "./SectionHeader";

const points = [
  {
    icon: BadgeCheck,
    title: "Registered charity",
    text: `${siteConfig.name} is registered with the ${siteConfig.registration.authority} as ${siteConfig.registration.label} (${siteConfig.registration.number}), incorporated ${siteConfig.registration.date} in ${siteConfig.registration.location}.`,
  },
  {
    icon: Users,
    title: "Governed by trustees",
    text: `NHF is overseen by ${trustees.length} incorporated trustees who are accountable for the Foundation's activities and use of funds.`,
  },
  {
    icon: FileText,
    title: "Committed to transparent reporting",
    text: "Every supported activity is documented through outreach reports, service summaries, and partner acknowledgements, and NHF maintains financial records that are accountable to its trustees and the partners who fund its work.",
  },
];

export function RegistrationNotice() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="section soft trust-section">
      <SectionHeader eyebrow="Registered &amp; accountable" title="A registered Nigerian NGO" />
      <div className="card-grid three">
        {points.map((point, index) => {
          const Icon = point.icon;
          const open = openIndex === index;
          return (
            <article className="service-card expandable-card" key={point.title}>
              <button
                type="button"
                className="expandable-card-toggle"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <div className="icon-badge"><Icon size={22} /></div>
                <h3>{point.title}</h3>
                <ChevronDown size={18} className={open ? "expandable-card-chevron is-open" : "expandable-card-chevron"} />
              </button>
              {open && <p>{point.text}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
