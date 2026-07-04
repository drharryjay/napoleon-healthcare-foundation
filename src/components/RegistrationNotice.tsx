import React from "react";
import { BadgeCheck, FileText, Users } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { trustees } from "../data/trusteesData";
import { SectionHeader } from "./SectionHeader";

export function RegistrationNotice() {
  return (
    <section className="section soft trust-section">
      <SectionHeader eyebrow="Registered &amp; accountable" title="A legally registered Nigerian NGO" />
      <div className="card-grid three">
        <article className="service-card">
          <div className="icon-badge"><BadgeCheck size={22} /></div>
          <h3>Registered charity</h3>
          <p>
            {siteConfig.name} is registered with the {siteConfig.registration.authority} as{" "}
            {siteConfig.registration.label} ({siteConfig.registration.number}), incorporated{" "}
            {siteConfig.registration.date} in {siteConfig.registration.location}.
          </p>
        </article>
        <article className="service-card">
          <div className="icon-badge"><Users size={22} /></div>
          <h3>Governed by trustees</h3>
          <p>NHF is overseen by {trustees.length} incorporated trustees who are accountable for the Foundation's activities and use of funds.</p>
        </article>
        <article className="service-card">
          <div className="icon-badge"><FileText size={22} /></div>
          <h3>Committed to transparent reporting</h3>
          <p>Outreach reports, service summaries, and partner acknowledgements are documented for every supported activity. Financial reporting details will be published once verified figures are finalized.</p>
        </article>
      </div>
    </section>
  );
}
