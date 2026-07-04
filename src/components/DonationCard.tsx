import React from "react";
import { HandHeart } from "lucide-react";

export function DonationCard({ label }: { label: string }) {
  return (
    <article className="donation-card">
      <HandHeart size={24} />
      <h3>{label}</h3>
      <p>Donation pathway placeholder. Connect this card to Paystack, Flutterwave, bank transfer instructions, or a campaign form.</p>
    </article>
  );
}
