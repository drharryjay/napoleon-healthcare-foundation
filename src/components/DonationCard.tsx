import React from "react";
import { HandHeart } from "lucide-react";

export function DonationCard({ label, description }: { label: string; description: string }) {
  return (
    <article className="donation-card">
      <HandHeart size={24} />
      <h3>{label}</h3>
      <p>{description}</p>
    </article>
  );
}
