import React from "react";
import { Clock } from "lucide-react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { DonationCard } from "../components/DonationCard";
import { donationCategories } from "../data/partnersData";

export function DonatePage() {
  return (
    <>
      <Hero title="Donate / Support" text="Every contribution supports outreach planning, medications, consumables, screening materials, logistics, health education, and follow-up reporting." image="/images/FB_IMG_1783012604139.jpg" />
      <section className="section">
        <div className="donate-pending-card">
          <Clock size={28} aria-hidden="true" />
          <div>
            <h3>Online Donation — Coming Soon</h3>
            <p>Secure online payment via Paystack is pending final approval. This button will activate as soon as it's live.</p>
          </div>
          <button className="button button-primary" type="button" disabled aria-disabled="true">
            Donate Online <span className="pending-tag">Pending Approval</span>
          </button>
        </div>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Support categories" title="Choose a practical way to help" />
        <div className="card-grid">{donationCategories.map((category) => <DonationCard key={category} label={category} />)}</div>
      </section>
      <section className="section soft two-col">
        <div>
          <SectionHeader eyebrow="Payment placeholders" title="Donation details to be provided" />
          <p><strong>Bank details:</strong> To be provided.</p>
          <p><strong>Paystack link:</strong> Pending approval — will be added once active.</p>
          <p><strong>Donation contact person:</strong> To be provided.</p>
        </div>
        <div>
          <SectionHeader eyebrow="Accountability" title="Transparent documentation" />
          <p>NHF is committed to transparent documentation of supported activities, including outreach reports, service summaries, partner acknowledgements, and follow-up reporting where applicable.</p>
        </div>
      </section>
    </>
  );
}
