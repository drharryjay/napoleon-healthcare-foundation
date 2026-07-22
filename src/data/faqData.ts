// Frequently asked questions shown on the Contact page and mirrored as
// FAQPage structured data (see src/components/FaqSection.tsx). Every answer is
// drawn from NHF's verified facts — registration, service records, volunteer
// roles, and donation categories — not invented. Keep the visible text and the
// schema in sync: they must match for the structured data to be valid.

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Is Napoleon Healthcare Foundation a registered charity?",
    answer:
      "Yes. Napoleon Healthcare Foundation is registered with the Corporate Affairs Commission of Nigeria as Incorporated Trustees (CAC/IT/NO 85319), incorporated on 4 March 2016, and is governed by a board of trustees accountable for its activities and use of funds.",
  },
  {
    question: "Where does Napoleon Healthcare Foundation work?",
    answer:
      "NHF runs free community health outreaches across Delta and Rivers States in Nigeria's South-South region, reaching communities, schools, churches, and primary health centres.",
  },
  {
    question: "What services does NHF provide at its outreaches?",
    answer:
      "NHF provides free medical consultations; screening for blood pressure, blood sugar, malaria, hepatitis B and C, and HIV; eye care and reading or prescription glasses; dental care; maternal and child health support; cervical cancer screening; health education; and the distribution of free medications and insecticide-treated mosquito nets.",
  },
  {
    question: "How can I volunteer with NHF?",
    answer:
      "Doctors, nurses, pharmacists, laboratory scientists, dentists, and public health, media, data, and logistics volunteers can all support NHF outreaches. You can apply through the Volunteer page or contact the team directly.",
  },
  {
    question: "How can I donate to or support NHF?",
    answer:
      "You can sponsor medications, laboratory tests, eye or dental care, mosquito nets, safe motherhood kits, transport and logistics, or a full community outreach. To arrange a gift, reach the team by email, phone, or WhatsApp; every supported activity is documented through outreach reports and partner acknowledgements.",
  },
  {
    question: "Is the health information on this website medical advice?",
    answer:
      "No. NHF's health education content is for general public information only and does not replace consultation with a qualified healthcare professional. If you have symptoms or an urgent health concern, seek care from a qualified provider or the nearest hospital without delay.",
  },
];
