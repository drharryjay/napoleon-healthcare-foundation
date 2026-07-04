import React from "react";
import { HeartPulse } from "lucide-react";
import { LinkButton } from "../components/LinkButton";

export function ThankYouPage() {
  return (
    <section className="section thank-you">
      <HeartPulse size={40} />
      <h1>Thank you</h1>
      <p>Your message has been received. Someone from Napoleon Healthcare Foundation will respond as soon as possible.</p>
      <LinkButton href="/">Back to Home</LinkButton>
    </section>
  );
}
