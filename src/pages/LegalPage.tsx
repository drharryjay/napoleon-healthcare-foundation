import React from "react";
import { Hero } from "../components/Hero";

type LegalType = "privacy" | "medical" | "photo";

const content: Record<LegalType, { title: string; text: string }> = {
  privacy: {
    title: "Privacy Policy",
    text: "NHF collects personal information only for contact, volunteer coordination, partnership communication, donation communication, and outreach-related activities. Personal information should be handled responsibly and used only for the purpose for which it was submitted.",
  },
  medical: {
    title: "Medical Disclaimer",
    text: "Health content on this website is for education only and does not replace consultation with a qualified healthcare professional. People with symptoms, urgent concerns, or ongoing conditions should seek appropriate medical care.",
  },
  photo: {
    title: "Photo Consent Statement",
    text: "NHF should only publish identifiable patient or community photos with appropriate consent, especially for children or vulnerable persons. Outreach documentation should protect dignity, privacy, and safety.",
  },
};

export function LegalPage({ type }: { type: LegalType }) {
  const page = content[type];
  return (
    <>
      <Hero title={page.title} text={page.text} image="/images/FB_IMG_1783012593613.jpg" />
      <section className="section legal-copy">
        <p>{page.text}</p>
        <p>Detailed legal language should be reviewed by the Foundation's governance or legal adviser before launch.</p>
      </section>
    </>
  );
}
