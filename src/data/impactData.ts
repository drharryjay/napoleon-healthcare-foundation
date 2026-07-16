export const impactStats = [
  { label: "Communities Reached", value: "7", note: "Across the South-South region of Nigeria." },
  { label: "Patients Attended To", value: "4,500+", note: "Cumulative since inception." },
  { label: "Health Professionals Involved", value: "70+", note: "Volunteer doctors, nurses, and allied health workers." },
  { label: "Mosquito Nets Distributed", value: "3,500+", note: "Long-lasting insecticide-treated nets." },
  { label: "Eye Care Provided", value: "500+", note: "Glasses and vision screening." },
  { label: "Dental Care Provided", value: "100", note: "Consultations, cleaning, and extractions." },
];

const pendingNote = "Verified figure to be published once confirmed.";

export const dashboardStats = [
  { label: "Total outreaches", value: "Pending", note: pendingNote },
  { label: "Communities served", value: "7", note: "Across the South-South region of Nigeria." },
  { label: "People reached", value: "Pending", note: pendingNote },
  { label: "Consultations conducted", value: "Pending", note: pendingNote },
  { label: "Eye care beneficiaries", value: "500+", note: "Glasses and vision screening." },
  { label: "Dental care beneficiaries", value: "100", note: "Consultations, cleaning, and extractions." },
  { label: "Mosquito nets distributed", value: "3,500+", note: "Long-lasting insecticide-treated nets." },
  { label: "Medications dispensed", value: "Pending", note: pendingNote },
  { label: "Partners engaged", value: "Pending", note: pendingNote },
];

// Full per-outreach reporting, used on the Stories page. Only present for
// outreaches with a source report on file (NHF PROGRAGMME REPORT.docx) — the
// rest stay pending until Dr. Harriet confirms verified figures, rather than
// guessing at content.
export interface OutreachStory {
  need: string;
  response: string;
  servicesDetail: string;
  reachedDetail: string;
  partnerDetail: string;
  photosNote: string;
  lessons: string;
  next: string;
}

export interface Outreach {
  title: string;
  location: string;
  partner: string;
  services: string;
  reached: string;
  status: string;
  image: string;
  story?: OutreachStory;
}

export const outreaches: Outreach[] = [
  {
    title: "Ughelli Community Outreach",
    location: "Ughelli, Delta State",
    partner: "Community and faith-based partners",
    services: "Consultations, screening, medications, counselling, health education",
    reached: "To be verified",
    status: "Archived outreach",
    image: "/images/FB_IMG_1783012545155.jpg",
  },
  {
    title: "Buguma Community Outreach",
    location: "Buguma",
    partner: "Community leadership",
    services: "General care, screening, pharmacy support, follow-up guidance",
    reached: "To be verified",
    status: "Archived outreach",
    image: "/images/FB_IMG_1783012553411.jpg",
  },
  {
    title: "All Saints Anglican Church Ughelli Cathedral Outreach",
    location: "Ughelli Cathedral",
    partner: "All Saints Anglican Church",
    services: "Medical consultations, health education, screening, medications",
    reached: "To be verified",
    status: "Partner outreach",
    image: "/images/FB_IMG_1783012564264.jpg",
  },
  {
    title: "Rotary Family Health Day Support",
    location: "Nigeria",
    partner: "Rotary-supported programme",
    services: "Preventive screening, health talks, medication support",
    reached: "To be verified",
    status: "Partner support",
    image: "/images/FB_IMG_1783012575381.jpg",
  },
  {
    title: "Safe Motherhood Project",
    location: "Underserved communities",
    partner: "Maternal health partners",
    services: "Safe motherhood kits, family planning counselling, maternal health education",
    reached: "To be verified",
    status: "Programme area",
    image: "/images/FB_IMG_1783012581401.jpg",
  },
  {
    title: "Ovu School Health Programme",
    location: "Okuodi Primary School, Ovu, Ethiope-East LGA, Delta State",
    partner: "Okuodi Primary School",
    services: "Oral health education, medical consultations, distribution of oral hygiene kits, oral health research study",
    reached: "420 children",
    status: "Completed outreach — 15 May 2025",
    image: "/images/outreach/01-ovu-school-health-presentation-website.webp",
    story: {
      need: "Pupils and staff at Okuodi Primary School needed oral health education and access to medical consultations not otherwise available to them at school.",
      response: "NHF ran a school health outreach on 15 May 2025 with an 8-person medical team, supported by 10 school staff.",
      servicesDetail: "Oral health education, medical consultations for pupils and staff, distribution of oral hygiene kits, and a research study on oral health.",
      reachedDetail: "420 children attended, alongside school staff and the 8-person NHF medical team.",
      partnerDetail: "Delivered in partnership with Okuodi Primary School's leadership and staff.",
      photosNote: "Photos from this outreach are in the Gallery under \"Ovu School Health Programme.\"",
      lessons: "Detailed lessons-learned reporting for this outreach is being finalized.",
      next: "Follow-up on the oral health research findings and referral outcomes is being documented.",
    },
  },
  {
    title: "School for the Deaf — International Day of Persons with Disabilities",
    location: "Christian Missionary School of the Deaf, Macpherson, Sapele, Delta State",
    partner: "Christian Missionary School of the Deaf",
    services: "Disability-inclusion awareness talk, health Q&A on asthma, cerebral palsy, and scoliosis management, welfare package distribution",
    reached: "37 students, 4 teachers, 4 other staff",
    status: "Completed outreach — 3 December 2025",
    image: "/images/outreach/03-school-for-the-deaf-group-website.webp",
    story: {
      need: "The school — a mixed boarding and day school for deaf students (primary and JSS1), running since 2009 — welcomed a visit marking the International Day of Persons with Disabilities 2025, themed \"Fostering Disability-Inclusive Societies for Advancing Social Progress.\"",
      response: "NHF gave a talk encouraging students and staff to see themselves as a functional part of society, then answered health questions raised by staff about specific students — including asthma management, cerebral palsy with incontinence, and a recently noticed case of scoliosis. NHF also presented welfare packages to the school.",
      servicesDetail: "Disability-inclusion talk delivered through the school's sign-language interpreter, health guidance on asthma, cerebral palsy, and scoliosis management, and welfare package distribution.",
      reachedDetail: "37 students, 4 teachers, and 4 other staff at the school.",
      partnerDetail: "Hosted by proprietor Mr Daniel Nwaduke (Director) and Mrs Elizabeth Nwaduke (Admin Director). NHF was represented by Dr Felicity Odoh, Dr Oghenesiuvwe Nuvie Oyobere-Okupa, and Dr Harriet Akpughe (CEO).",
      photosNote: "Photos from this outreach are in the Gallery under \"School for the Deaf.\"",
      lessons: "Communication is entirely in sign language, with the proprietor's son acting as interpreter — future outreaches to the school should plan for interpreter-led sessions from the outset.",
      next: "Follow-up on the specific health management questions raised (asthma, cerebral palsy, scoliosis) is being coordinated with the school.",
    },
  },
  {
    title: "Ejemuojavwe Women's Health Outreach",
    location: "Ejemuojavwe Primary Health Center, Oghara junction, Oghara, Delta State",
    partner: "MWAN Delta and Maden Healthcare Foundation",
    services: "Health talks (cervical cancer, oral hygiene, postpartum haemorrhage), medical consultations, blood donation drive, scaling and polishing, cervical cancer screening, medication and hygiene product distribution",
    reached: "75 patients",
    status: "Completed outreach — date to be confirmed",
    image: "/images/FB_IMG_1783012537202.jpg",
    story: {
      need: "Women in the Oghara junction area needed accessible health talks and screening on cervical cancer, oral hygiene, and postpartum haemorrhage, alongside general medical care.",
      response: "NHF ran a women's health outreach in collaboration with MWAN Delta and the Maden Healthcare Foundation, combining health education, a drama presentation by medical students, and clinical services.",
      servicesDetail: "Health talks on cervical cancer, oral health hygiene, and postpartum haemorrhage; drama by medical students; medical consultations; a blood donation drive; dental scaling and polishing; cervical cancer screening; and distribution of medication, toothbrushes, toothpaste, and floss.",
      reachedDetail: "75 patients attended in total. 12 received scaling and polishing. 22 were screened for cervical cancer, of whom 7 showed suspicious lesions requiring follow-up. 4 people donated blood.",
      partnerDetail: "Delivered with MWAN Delta (5 students) and Maden Healthcare Foundation (5 representatives). Team included 6 doctors, 1 dental technician, 1 medical laboratory scientist, 1 health assistant, 1 nurse, and 2 records staff.",
      photosNote: "Photo documentation for this outreach is being organized.",
      lessons: "Detailed lessons-learned reporting for this outreach is being finalized.",
      next: "The 7 patients with suspicious cervical lesions require confirmed referral and follow-up tracking.",
    },
  },
];
