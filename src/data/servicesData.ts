export const services = [
  {
    title: "General Medical Consultations",
    summary: "Free outpatient consultations, diagnosis, treatment, counselling, and referral where necessary.",
  },
  {
    title: "Eye Care",
    summary: "Visual assessment, eye consultation, treatment support, and referral for advanced ophthalmic care where needed.",
  },
  {
    title: "Dental Care",
    summary: "Dental consultation, oral health education, scaling or polishing where available, extractions where indicated, and referral.",
  },
  {
    title: "Laboratory Screening",
    summary: "Blood pressure checks, blood glucose screening, malaria testing, hepatitis screening, HIV counselling/testing where applicable, and other outreach-based screening.",
  },
  {
    title: "Maternal and Child Health",
    summary: "Health education, family planning counselling, safe motherhood support, pregnancy-related screening, and distribution of safe motherhood kits where available.",
  },
  {
    title: "Pharmacy and Medication Support",
    summary: "Free or subsidized medications during outreach programmes, drug counselling, and adherence support.",
  },
  {
    title: "Health Education",
    summary: "Community health talks on prevention, early detection, hygiene, malaria prevention, maternal health, chronic disease prevention, and healthy living.",
  },
  {
    title: "Community Follow-Up",
    summary: "Post-outreach follow-up, referral guidance, adherence reminders, and impact documentation.",
  },
];

// Home page shows a shorter, marketing-friendly title for some services than
// What We Do does. Each entry names the underlying `services` title its
// summary should come from, so the two lists can never drift out of sync by
// array position (see HomePage.tsx history for the bug this replaced).
const homeServiceDisplay: { title: string; sourceTitle: string }[] = [
  { title: "General Medical Consultations", sourceTitle: "General Medical Consultations" },
  { title: "Eye Care & Visual Screening", sourceTitle: "Eye Care" },
  { title: "Dental Care", sourceTitle: "Dental Care" },
  { title: "Laboratory Screening", sourceTitle: "Laboratory Screening" },
  { title: "Maternal & Child Health", sourceTitle: "Maternal and Child Health" },
  { title: "Health Education & Prevention", sourceTitle: "Health Education" },
];

export const homeServices = homeServiceDisplay.map(({ title, sourceTitle }) => ({
  title,
  summary: services.find((service) => service.title === sourceTitle)?.summary ?? "",
}));
