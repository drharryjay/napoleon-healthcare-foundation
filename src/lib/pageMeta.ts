import { siteConfig } from "../data/siteConfig";

export const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Napoleon Healthcare Foundation | Bringing Healthcare Closer to Communities",
    description: siteConfig.metaDescription,
  },
  "/about": {
    title: "About NHF | Napoleon Healthcare Foundation",
    description: "Learn about Napoleon Healthcare Foundation's mission, vision, values, registration, and community-health approach.",
  },
  "/what-we-do": {
    title: "What We Do | Napoleon Healthcare Foundation",
    description: "NHF services include free consultations, screening, eye care, dental care, maternal health support, and health education.",
  },
  "/impact": {
    title: "Our Impact | Napoleon Healthcare Foundation",
    description: "Explore editable impact metrics and outreach records for Napoleon Healthcare Foundation.",
  },
  "/stories": {
    title: "Outreach Stories | Napoleon Healthcare Foundation",
    description: "Community outreach story templates documenting need, response, services, partners, lessons, and next steps.",
  },
  "/health-education": {
    title: "Health Education Hub | Napoleon Healthcare Foundation",
    description: "Public health education articles on prevention, early detection, and healthy living.",
  },
  "/partner": {
    title: "Partner With NHF | Napoleon Healthcare Foundation",
    description: "Partner with NHF to sponsor outreach, medications, screening, eye care, dental care, and health education.",
  },
  "/volunteer": {
    title: "Volunteer | Napoleon Healthcare Foundation",
    description: "Doctors, nurses, pharmacists, laboratory scientists, dentists, public health teams, media, data, and logistics volunteers can support NHF.",
  },
  "/donate": {
    title: "Donate and Support | Napoleon Healthcare Foundation",
    description: "Support NHF outreach planning, medications, consumables, screening materials, logistics, education, and follow-up reporting.",
  },
  "/gallery": {
    title: "Gallery | Napoleon Healthcare Foundation",
    description: "NHF photo gallery placeholders for consultations, eye care, dental care, pharmacy, laboratory screening, education, partners, and volunteers.",
  },
  "/contact": {
    title: "Contact | Napoleon Healthcare Foundation",
    description: "Contact NHF for outreach, partnership, volunteering, donation, and public health collaboration inquiries.",
  },
  "/privacy": {
    title: "Privacy Policy | Napoleon Healthcare Foundation",
    description: "NHF privacy policy for contact, volunteer, partnership, donation, and outreach-related communication.",
  },
  "/medical-disclaimer": {
    title: "Medical Disclaimer | Napoleon Healthcare Foundation",
    description: "NHF health education content is for public information and does not replace medical consultation.",
  },
  "/photo-consent": {
    title: "Photo Consent Statement | Napoleon Healthcare Foundation",
    description: "NHF photo consent statement for responsible publication of patient and community images.",
  },
};

export const defaultPageMeta = pageMeta["/"];
