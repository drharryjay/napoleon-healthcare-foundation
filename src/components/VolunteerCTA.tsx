import React from "react";
import { LinkButton } from "./LinkButton";

export function VolunteerCTA() {
  return (
    <section className="split-cta alt">
      <div>
        <span className="eyebrow">Volunteer</span>
        <h2>Volunteer Your Skills</h2>
        <p>Doctors, nurses, pharmacists, laboratory scientists, dentists, optometrists, public health professionals, media volunteers, and logistics volunteers can support NHF outreaches.</p>
      </div>
      <LinkButton href="/volunteer" variant="secondary">Become a Volunteer</LinkButton>
    </section>
  );
}
