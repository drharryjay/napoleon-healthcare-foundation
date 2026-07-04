import React from "react";
import { LinkButton } from "./LinkButton";

export function PartnerCTA() {
  return (
    <section className="split-cta">
      <div>
        <span className="eyebrow">Partnership</span>
        <h2>Partner with NHF</h2>
        <p>We work with churches, Rotary groups, corporate sponsors, community leaders, healthcare professionals, and public institutions to bring healthcare closer to those who need it most.</p>
      </div>
      <LinkButton href="/partner">Start a Partnership</LinkButton>
    </section>
  );
}
