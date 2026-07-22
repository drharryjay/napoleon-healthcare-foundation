import React from "react";
import { Hero } from "../components/Hero";
import { siteConfig } from "../data/siteConfig";

type LegalType = "privacy" | "medical" | "photo";

interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

interface LegalContent {
  title: string;
  heroText: string;
  sections: LegalSection[];
}

const content: Record<LegalType, LegalContent> = {
  privacy: {
    title: "Privacy Policy",
    heroText: "How Napoleon Healthcare Foundation collects, uses, and protects personal information submitted through this website.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          `${siteConfig.name} (${siteConfig.shortName}) is a Nigerian NGO registered as ${siteConfig.registration.label} (${siteConfig.registration.number}) with the ${siteConfig.registration.authority}. For any question about this policy or your personal information, contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
        ],
      },
      {
        heading: "Information we collect",
        paragraphs: ["We collect personal information you choose to submit through our contact, partnership, volunteer, and newsletter forms, which may include:"],
        list: [
          "Name, organization name, and job title or profession",
          "Email address and phone number",
          "Location or community of interest",
          "The content of your message, inquiry, or application",
          "For volunteers: specialty, availability, and area of interest",
        ],
      },
      {
        heading: "Why we collect it and our lawful basis",
        paragraphs: [
          "We process this information based on your consent (given when you submit a form) and our legitimate interest in responding to inquiries, coordinating volunteers and partners, and maintaining accurate records of our outreach activities. We use personal information only for the purpose for which it was submitted: replying to your message, coordinating a partnership or volunteer engagement, or sending newsletter updates you subscribed to.",
        ],
      },
      {
        heading: "Who we share it with",
        paragraphs: [
          "We do not sell or rent personal information to third parties. Form submissions are processed through Netlify, our website hosting and forms provider, which stores submissions on our behalf as a data processor. We disclose personal information to other parties only where required by law or to protect the rights, safety, or property of NHF or others.",
        ],
      },
      {
        heading: "International transfers",
        paragraphs: [
          "Because our hosting provider (Netlify) operates infrastructure outside Nigeria, personal information submitted through this site may be processed or stored outside the country. Any such transfer will be handled in line with the cross-border data transfer requirements of the Nigeria Data Protection Act 2023.",
        ],
      },
      {
        heading: "How long we keep it",
        paragraphs: [
          "We retain personal information only for as long as necessary to fulfil the purpose it was collected for — responding to your inquiry, maintaining the volunteer or partner relationship, or complying with legal or reporting obligations — after which it is securely deleted. We review the information we hold periodically and remove records that are no longer needed.",
        ],
      },
      {
        heading: "Children and vulnerable persons",
        paragraphs: [
          "This website is not directed at children, and we do not knowingly collect personal information from children through our forms. Photos or health information relating to children or vulnerable persons encountered during outreach are handled under our separate Photo Consent Statement, with additional safeguards.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "We use reasonable technical and organizational measures — including HTTPS encryption and restricted access to submitted data — to protect personal information against unauthorized access, loss, or misuse.",
        ],
      },
      {
        heading: "Your rights under the Nigeria Data Protection Act 2023",
        paragraphs: ["Subject to applicable law, you have the right to:"],
        list: [
          "Access the personal information we hold about you",
          "Request correction of inaccurate or incomplete information",
          "Request deletion or restriction of your information",
          "Object to or withdraw consent for further processing",
          "Lodge a complaint with the Nigeria Data Protection Commission (NDPC) if you believe your rights have been infringed",
        ],
      },
      {
        heading: "Exercising your rights",
        paragraphs: [`To exercise any of these rights, or with any privacy question, contact us at ${siteConfig.email}. We will respond within a reasonable timeframe.`],
      },
      {
        heading: "Changes to this policy",
        paragraphs: ["We may update this policy as our data practices evolve. Material changes will be reflected on this page with an updated effective date."],
      },
    ],
  },
  medical: {
    title: "Medical Disclaimer",
    heroText: "Health content on this website is for education only and does not replace professional medical care.",
    sections: [
      {
        heading: "Educational purpose only",
        paragraphs: [
          "Health information published on this website — including articles, outreach summaries, and statistics — is provided for general public education. It is not medical advice, diagnosis, or treatment, and it is not a substitute for consultation with a qualified healthcare professional.",
        ],
      },
      {
        heading: "No doctor-patient relationship",
        paragraphs: [
          "Reading this website, submitting a contact form, or attending an NHF outreach event does not, by itself, create a doctor-patient relationship. Clinical decisions about your health should be made with a licensed healthcare provider who has assessed your specific situation.",
        ],
      },
      {
        heading: "If you have symptoms or an urgent concern",
        paragraphs: [
          "If you have symptoms, an urgent health concern, or an ongoing medical condition, seek appropriate care from a qualified healthcare professional or the nearest hospital without delay. In a medical emergency, go to the nearest emergency department or call your local emergency services immediately — do not wait for a response from NHF.",
        ],
      },
      {
        heading: "External sources",
        paragraphs: [
          "Where this website links to external health authorities such as WHO, NCDC, or Africa CDC, those links are provided for information only. NHF does not control and is not responsible for the content of external websites.",
        ],
      },
      {
        heading: "Accuracy",
        paragraphs: [
          "We aim to keep health education content accurate and up to date, and review it periodically. Medical knowledge evolves, so always confirm current guidance with a qualified professional before making health decisions.",
        ],
      },
    ],
  },
  photo: {
    title: "Photo Consent Statement",
    heroText: "How Napoleon Healthcare Foundation handles consent for photos and videos taken during outreach activities.",
    sections: [
      {
        heading: "Our approach to consent",
        paragraphs: [
          "NHF documents its outreach activities through photos and video for reporting, website content, and social media. We seek consent from identifiable individuals — or from a parent or guardian where the individual is a child or otherwise unable to give consent — before publishing images that clearly show their face or other identifying details.",
        ],
      },
      {
        heading: "Extra care for children and patients",
        paragraphs: [
          "We take particular care with photos of children, patients receiving clinical care, and other vulnerable individuals. Where consent cannot be confirmed, we favor images that protect the dignity and privacy of the people involved — for example, wider group shots or images that do not focus on an identifiable individual's face.",
        ],
      },
      {
        heading: "How images are used",
        paragraphs: [
          "Consented images may appear on this website, in NHF's social media channels, and in reports shared with partners, donors, and regulators, for the purpose of documenting and communicating our community health work. We do not sell outreach photos or license them for third-party commercial use.",
        ],
      },
      {
        heading: "Requesting removal",
        paragraphs: [
          `If you, or your child or dependent, appear in a photo on this website and would like it removed or reviewed, contact us at ${siteConfig.email} with the page or image in question, and we will address your request promptly.`,
        ],
      },
    ],
  },
};

const heroImages: Record<LegalType, string> = {
  privacy: "/images/FB_IMG_1783012593613.jpg",
  medical: "/images/FB_IMG_1783012537202.jpg",
  photo: "/images/FB_IMG_1783012611366.jpg",
};

export function LegalPage({ type }: { type: LegalType }) {
  const page = content[type];
  return (
    <>
      <Hero title={page.title} text={page.heroText} image={heroImages[type]} />
      <section className="section legal-copy">
        <p className="legal-effective-date">Effective date: 22 July 2026</p>
        {page.sections.map((section) => (
          <div className="legal-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.list && (
              <ul className="check-list">
                {section.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
