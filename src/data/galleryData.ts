// Every image below was manually checked against its actual content — none of
// the NHF logo graphic duplicates or social-media profile screenshots that
// were previously mixed into this list are used here.
//
// `optimized: true` items are original outreach JPEGs run through
// src/lib/images.ts (responsive WebP variants). `optimized: false` items are
// the professionally curated WebP files already sized for the web
// (see NHF PICTURES/WEBSITE ENHANCED/PROFESSIONAL SELECTS) — no further
// processing needed, so they're referenced directly.
export interface GalleryItem {
  category: string;
  image: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  optimized: boolean;
}

export const galleryItems: GalleryItem[] = [
  { category: "Medical Consultations", image: "/images/FB_IMG_1783012564264.jpg", alt: "NHF staff conducting a medical consultation during a community outreach", caption: "NHF staff conducting a medical consultation during a community outreach.", width: 640, height: 480, optimized: true },
  { category: "Eye Care", image: "/images/FB_IMG_1783012529277.jpg", alt: "NHF volunteer fitting a community member with glasses during an eye care outreach", caption: "NHF volunteer fitting a community member with glasses during an eye care outreach.", width: 640, height: 480, optimized: true },
  { category: "Dental Care", image: "/images/FB_IMG_1783012545155.jpg", alt: "NHF dental team providing dental care during a community outreach", caption: "NHF dental team providing dental care during a community outreach.", width: 640, height: 480, optimized: true },
  { category: "Pharmacy Unit", image: "/images/FB_IMG_1783012581401.jpg", alt: "NHF pharmacy table with medications during a community outreach", caption: "NHF pharmacy table with medications during a community outreach.", width: 640, height: 480, optimized: true },
  { category: "Laboratory Screening", image: "/images/FB_IMG_1783012604139.jpg", alt: "NHF staff conducting laboratory screening during a community outreach", caption: "NHF staff conducting laboratory screening during a community outreach.", width: 640, height: 480, optimized: true },
  { category: "Health Education", image: "/images/FB_IMG_1783012537202.jpg", alt: "NHF vision screening and health education station during a community outreach", caption: "NHF vision screening and health education station during a community outreach.", width: 640, height: 480, optimized: true },
  { category: "Partner Activities", image: "/images/FB_IMG_1783012553411.jpg", alt: "Community members gathered during an NHF partner-supported outreach", caption: "Community members gathered during an NHF partner-supported outreach.", width: 640, height: 480, optimized: true },
  { category: "Team and Volunteers", image: "/images/FB_IMG_1783012593613.jpg", alt: "NHF team member with a foundation banner at a community outreach", caption: "NHF team member with a foundation banner at a community outreach.", width: 640, height: 480, optimized: true },

  { category: "Ovu School Health Programme", image: "/images/outreach/01-ovu-school-health-presentation-website.webp", alt: "NHF team presenting to pupils and staff at Okuodi Primary School, Ovu", caption: "NHF team presenting to pupils and staff during the Ovu School Health Programme, Okuodi Primary School — 15 May 2025.", width: 1448, height: 1086, optimized: false },
  { category: "Ovu School Health Programme", image: "/images/outreach/02-ovu-school-health-group-website.webp", alt: "Pupils and NHF volunteers gathered during the Ovu School Health Programme", caption: "Pupils and NHF volunteers gathered during the Ovu School Health Programme — 15 May 2025.", width: 1448, height: 1086, optimized: false },
  { category: "Ovu School Health Programme", image: "/images/outreach/09-ovu-students-supplies-website.webp", alt: "Health supplies distributed to pupils during the Ovu School Health Programme", caption: "Oral hygiene kits and health supplies distributed to pupils — Ovu School Health Programme, 15 May 2025.", width: 1448, height: 1086, optimized: false },
  { category: "Ovu School Health Programme", image: "/images/outreach/10-ovu-outreach-team-website.webp", alt: "The NHF outreach team at the Ovu School Health Programme", caption: "The NHF outreach team at Okuodi Primary School — Ovu School Health Programme, 15 May 2025.", width: 1046, height: 1504, optimized: false },

  { category: "School for the Deaf", image: "/images/outreach/03-school-for-the-deaf-group-website.webp", alt: "NHF team with students at the Christian Missionary School of the Deaf, Sapele", caption: "NHF team with students at the Christian Missionary School of the Deaf, Sapele — International Day of Persons with Disabilities, 3 December 2025.", width: 1448, height: 1086, optimized: false },
  { category: "School for the Deaf", image: "/images/outreach/11-school-for-the-deaf-partner-team-website.webp", alt: "NHF volunteers and partners at the School for the Deaf outreach", caption: "NHF volunteers with school staff at the Christian Missionary School of the Deaf, Sapele — 3 December 2025.", width: 1448, height: 1086, optimized: false },
  { category: "School for the Deaf", image: "/images/outreach/12-school-for-the-deaf-classroom-website.webp", alt: "Health education delivered in the classroom at the School for the Deaf", caption: "Health education delivered in the classroom, marking the International Day of Persons with Disabilities — 3 December 2025.", width: 1448, height: 1086, optimized: false },

  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/04-sapele-outreach-team-website.webp", alt: "NHF outreach team and partners at the Ejemuojavwe women's health outreach", caption: "The NHF outreach team and partners at the Ejemuojavwe women's health outreach.", width: 1600, height: 900, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/05-sapele-clinical-screening-website.webp", alt: "Clinical and laboratory screening during the Ejemuojavwe women's health outreach", caption: "Clinical and laboratory screening during the Ejemuojavwe women's health outreach.", width: 1448, height: 1086, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/06-sapele-dental-care-website.webp", alt: "Dental care provided during the Ejemuojavwe women's health outreach", caption: "Dental care provided during the Ejemuojavwe women's health outreach.", width: 1600, height: 961, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/07-sapele-health-counselling-website.webp", alt: "Health counselling and follow-up during the Ejemuojavwe women's health outreach", caption: "Health counselling and follow-up during the Ejemuojavwe women's health outreach.", width: 1448, height: 1086, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/08-sapele-medication-support-website.webp", alt: "Pharmacy and medication support during the Ejemuojavwe women's health outreach", caption: "Pharmacy and medication support during the Ejemuojavwe women's health outreach.", width: 1600, height: 900, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/13-sapele-registration-triage-website.webp", alt: "Registration and triage during the Ejemuojavwe women's health outreach", caption: "Patient registration and triage during the Ejemuojavwe women's health outreach.", width: 1593, height: 987, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/14-sapele-finger-prick-screening-website.webp", alt: "Laboratory finger-prick screening during the Ejemuojavwe women's health outreach", caption: "Laboratory finger-prick screening during the Ejemuojavwe women's health outreach.", width: 1448, height: 1086, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/15-sapele-blood-pressure-screening-website.webp", alt: "Blood-pressure screening during the Ejemuojavwe women's health outreach", caption: "Blood-pressure screening during the Ejemuojavwe women's health outreach.", width: 1536, height: 1024, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/16-sapele-health-education-speaker-website.webp", alt: "A community health education talk during the Ejemuojavwe women's health outreach", caption: "A community health education talk during the Ejemuojavwe women's health outreach.", width: 891, height: 1600, optimized: false },

  { category: "Ovu School Health Programme", image: "/images/outreach/ovu-e01.webp", alt: "Scene from the Ovu School Health Programme, Okuodi Primary School", caption: "Ovu School Health Programme, Okuodi Primary School — 15 May 2025.", width: 1600, height: 1200, optimized: false },
  { category: "School for the Deaf", image: "/images/outreach/deaf-e01.webp", alt: "International Day of Persons with Disabilities visit at the School of the Deaf, Sapele", caption: "International Day of Persons with Disabilities — Christian Missionary School of the Deaf, Sapele, 3 December 2025.", width: 1200, height: 1600, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/sapele-e04.webp", alt: "Scene from the Ejemuojavwe women's health outreach", caption: "Women's health outreach at Ejemuojavwe PHC, Oghara — 19 June 2026.", width: 1600, height: 1200, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/sapele-e05.webp", alt: "Scene from the Ejemuojavwe women's health outreach", caption: "Women's health outreach at Ejemuojavwe PHC, Oghara — 19 June 2026.", width: 1600, height: 1200, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/sapele-e06.webp", alt: "Scene from the Ejemuojavwe women's health outreach", caption: "Women's health outreach at Ejemuojavwe PHC, Oghara — 19 June 2026.", width: 1600, height: 1200, optimized: false },
  { category: "Ejemuojavwe Women's Outreach", image: "/images/outreach/sapele-e07.webp", alt: "Scene from the Ejemuojavwe women's health outreach", caption: "Women's health outreach at Ejemuojavwe PHC, Oghara — 19 June 2026.", width: 1600, height: 1200, optimized: false },
];
