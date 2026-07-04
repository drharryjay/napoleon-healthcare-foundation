import React from "react";
import { Hero } from "../components/Hero";
import { SectionHeader } from "../components/SectionHeader";
import { DonationCard } from "../components/DonationCard";
import { donationCategories } from "../data/partnersData";

export function DonatePage() {
  return (
    <>
      <Hero title="Donate / Support" text="Every contribution supports outreach planning, medications, consumables, screening materials, logistics, health education, and follow-up reporting." image="/images/FB_IMG_1783012604139.jpg" />
      <section className="section">
        <SectionHeader eyebrow="Support categories" title="Choose a practical way to help" />
        <div className="card-grid">{donationCategories.map((category) => <DonationCard key={category} label={category} />)}</div>
      </section>
      <section className="section soft two-col">
        <div>
          <SectionHeader eyebrow="Payment placeholders" title="Donation details to be provided" />
          <p><strong>Bank details:</strong> To be provided.</p>
          <p><strong>Paystack/Flutterwave link:</strong> To be provided.</p>
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
