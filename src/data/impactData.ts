// Figures below are drawn from NHF's own records: the foundation proposal
// document (per-outreach reports for Ughelli, Buguma, and All Saints), the
// 2025/2026 programme report (Ovu, School of the Deaf, Ejemuojavwe), and the
// NHF Report on World Breastfeeding Week 2026.
//
// Derivations:
// - People reached: 350 + 1,500 + 2,813 + 420 + 45 + 75 + 137 = 5,340 → "5,300+"
//   (WBW 2026 contributes 137: 30 Ejemuojavwe + 34 Ogharefe + 73 DELSUTH IWC.
//   Mothers on the four DELSUTH wards who received infant care items are NOT
//   counted — the report does not give a headcount for them.)
// - General consultations: 350 + 1,500 + 2,813 + 75 + 31 = 4,769 → still "4,700+"
//   (WBW 2026 contributes 31: 16 on 4 Aug, 15 on 6 Aug. Note these are counted
//   consultations only — health-education attendance is tracked under people
//   reached, not here.)
// - Eye consultations: 132 + 550 + 819 = 1,501 → "1,500+"
// - Glasses distributed: 115 + 500 = 615 → "615+"
// - Dental care: 1,015 consultations + 127 scaling/polishing + 92 extractions → "1,000+"
// - Mosquito nets: 3,500+ (pre-existing verified figure; itemized events
//   account for 1,700, plus Rotary Family Health Day and Safe Motherhood
//   distributions)

export const impactStats = [
  { label: "Communities Reached", value: "10+", note: "Communities and institutions across Delta and Rivers States." },
  { label: "Patients Attended To", value: "5,300+", note: "Cumulative across all documented outreaches." },
  { label: "Health Professionals Involved", value: "70+", note: "Volunteer doctors, nurses, and allied health workers." },
  { label: "Mosquito Nets Distributed", value: "3,500+", note: "Long-lasting insecticide-treated nets." },
  { label: "Eye Care Provided", value: "1,500+", note: "Eye consultations, including 615+ glasses distributed." },
  { label: "Dental Care Provided", value: "1,000+", note: "Consultations, cleaning, and extractions." },
];

export const dashboardStats = [
  { label: "Documented outreaches", value: "9", note: "Community, school, church, and clinic-based programmes." },
  { label: "Communities served", value: "10+", note: "Communities and institutions across Delta and Rivers States." },
  { label: "People reached", value: "5,300+", note: "Cumulative attendance across documented outreaches." },
  { label: "Consultations conducted", value: "4,700+", note: "General medical consultations recorded across outreaches." },
  { label: "Eye care beneficiaries", value: "1,500+", note: "Eye consultations during outreach programmes." },
  { label: "Glasses distributed", value: "615+", note: "Reading and prescription glasses provided free of charge." },
  { label: "Dental care beneficiaries", value: "1,000+", note: "Consultations, cleaning, and extractions." },
  { label: "Mosquito nets distributed", value: "3,500+", note: "Long-lasting insecticide-treated nets." },
  { label: "Partners engaged", value: "10+", note: "Churches, Rotary clubs, schools, teaching hospitals, and health foundations." },
];

export interface OutreachStory {
  need: string;
  response: string;
  servicesDetail: string;
  reachedDetail: string;
  partnerDetail: string;
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
  story: OutreachStory;
  photos?: { src: string; alt: string }[];
}

export const outreaches: Outreach[] = [
  {
    title: "Ughelli Community Outreach — \"Good Health for All\"",
    location: "Ughelli, Delta State",
    partner: "Ughelli community and faith-based partners",
    services: "Consultations, screening, medications, dental and eye care, mosquito nets",
    reached: "350 people",
    status: "Completed outreach — 1 day",
    image: "/images/FB_IMG_1783012545155.jpg",
    story: {
      need: "A primary survey using records from local primary healthcare centres showed a high rate of preventable disease in children, women, men, and the elderly in the Ughelli area, alongside rising hypertension and diabetes and limited access to affordable care.",
      response: "NHF ran a one-day massive health campaign tagged \"Good Health for All\" for the Ughelli community, bringing free consultations, testing, treatment, and health commodities directly to residents.",
      servicesDetail: "350 general consultations; 100 dental consultations including 12 extractions and 20 scaling-and-polishing procedures; 132 eye consultations with 115 glasses distributed; blood sugar testing, blood pressure checks, malaria testing, hepatitis B and C testing, and HIV testing; free insecticide-treated net distribution and free medications.",
      reachedDetail: "350 people attended and received care free of charge.",
      partnerDetail: "Hosted with the Ughelli community and faith-based partners.",
      lessons: "NHF's follow-up team found 78% of patients at Ughelli, Ekete, and nearby communities complied with their medication regime — against a typical 22% compliance rate — helped by SMS reminders to take daily medication.",
      next: "Archived outreach. Follow-up findings on medication adherence now inform how NHF designs reminder and follow-up systems for current programmes.",
    },
  },
  {
    title: "Buguma Community Outreach",
    location: "Buguma, Asari-Toru LGA, Rivers State",
    partner: "I-Charity Club of Nigeria",
    services: "General care, screening, dental and eye care, pharmacy support, mosquito nets",
    reached: "1,500 people",
    status: "Completed outreach — 3 days",
    image: "/images/FB_IMG_1783012553411.jpg",
    story: {
      need: "Residents of Buguma in Asari-Toru LGA had limited access to affordable consultations, screening, and medications, with a high burden of preventable and non-communicable disease.",
      response: "NHF delivered a three-day free medical outreach for the community, commissioned by the I-Charity Club of Nigeria.",
      servicesDetail: "1,500 general consultations; 300 dental consultations including 50 extractions and 75 scaling-and-polishing procedures; 550 eye consultations with 500 glasses distributed; blood sugar, blood pressure, malaria, hepatitis B and C, and HIV testing; 700 insecticide-treated nets and free medications distributed.",
      reachedDetail: "1,500 people attended over three days.",
      partnerDetail: "Commissioned by the I-Charity Club of Nigeria, with community leadership support.",
      lessons: "Follow-up found 90% of Buguma patients complied with their medication regime — against a typical 15% rate — with SMS reminders improving daily adherence.",
      next: "Archived outreach. Adherence findings feed NHF's current follow-up model.",
    },
  },
  {
    title: "All Saints Anglican Church Ughelli Cathedral Outreach",
    location: "Ughelli Cathedral, Delta State",
    partner: "All Saints Anglican Church, Ughelli",
    services: "Medical consultations, screening, dental and eye care, medications, mosquito nets",
    reached: "2,813 people",
    status: "Completed outreach — 2 days",
    image: "/images/FB_IMG_1783012564264.jpg",
    story: {
      need: "The All Saints Anglican Church prayer convocation gathered congregations from Anglican churches across the locality — communities with substantial unmet needs for consultations, screening, and treatment.",
      response: "NHF delivered a two-day general free medical outreach at the Ughelli Cathedral convocation.",
      servicesDetail: "2,813 general consultations; 615 dental consultations including 30 extractions and 20 scaling-and-polishing procedures; 819 eye consultations; blood sugar, malaria, hepatitis B and C, and HIV testing; 1,000 insecticide-treated nets and free medications distributed.",
      reachedDetail: "2,813 people attended over two days — NHF's largest documented single outreach.",
      partnerDetail: "Hosted by All Saints Anglican Church, Ughelli, during its prayer convocation.",
      lessons: "Follow-up found 83% of convocation patients complied with their medication regime, against a typical 17% rate, supported by SMS medication reminders.",
      next: "Archived outreach. The church-partnership model remains one of NHF's most effective routes to reaching large congregations.",
    },
  },
  {
    title: "Rotary Family Health Day Support",
    location: "Four health centres, Rivers State (Model PHC Diobu, Pott Johnson HC, Ozuoba PHC, Woji PHC)",
    partner: "Rotary — Rivers State Family Health Day",
    services: "Consultations, testing, breast cancer screening, family planning, mosquito nets",
    reached: "4 health centres, 3 days",
    status: "Completed partner programme — 3 days",
    image: "/images/FB_IMG_1783012575381.jpg",
    story: {
      need: "The Rivers State Family Health Day needed clinical teams to deliver simultaneous free health services across four primary health centres.",
      response: "NHF provided medical teams for the three-day programme, running services simultaneously at Model Primary Health Centre Diobu, Pott Johnson Health Centre, Ozuoba Primary Health Centre, and Woji Primary Health Centre.",
      servicesDetail: "Medical consultation and drug administration; malaria, HIV, glucose, and hepatitis B and C testing; visual assessment and treatment; breast cancer screening; family planning and counselling with distribution of condoms and sanitary pads; free mosquito net distribution.",
      reachedDetail: "Delivered across four health centres simultaneously over three days; centre-level attendance was recorded by the host programme.",
      partnerDetail: "Delivered in service to Rotary's Rivers State Family Health Day.",
      lessons: "Running four sites simultaneously proved NHF can staff multi-site programmes when services are standardized in advance.",
      next: "Archived programme. The multi-site model informs how NHF scopes partner requests.",
    },
  },
  {
    title: "Safe Motherhood Project",
    location: "Eleme Primary Health Centre, Rivers State",
    partner: "Rotary Club of Trans-Amadi",
    services: "Consultations, testing, safe motherhood kits, mosquito nets",
    reached: "Eleme PHC community",
    status: "Completed partner programme",
    image: "/images/FB_IMG_1783012581401.jpg",
    story: {
      need: "Expectant and new mothers around Eleme PHC needed screening, education, and basic supplies to support safer pregnancies and deliveries.",
      response: "NHF delivered the Rotary Club of Trans-Amadi's Safe Motherhood Project at Eleme Primary Health Centre.",
      servicesDetail: "Medical consultation and drug administration; malaria, HIV, and glucose testing; pregnancy testing; free distribution of mosquito nets and safe motherhood kits.",
      reachedDetail: "Women of the Eleme PHC catchment community; attendance was recorded by the host programme.",
      partnerDetail: "Commissioned by the Rotary Club of Trans-Amadi.",
      lessons: "Pairing testing with take-home commodities (nets, safe motherhood kits) increased the practical value of each visit for expectant mothers.",
      next: "Archived programme. Maternal health remains a core NHF programme area.",
    },
  },
  {
    title: "Ovu School Health Programme",
    location: "Okuodi Primary School, Ovu, Ethiope-East LGA, Delta State",
    partner: "Okuodi Primary School",
    services: "Oral health education, medical consultations, oral hygiene kits, oral health research",
    reached: "420 children",
    status: "Completed outreach — 15 May 2025",
    image: "/images/outreach/01-ovu-school-health-presentation-website.webp",
    story: {
      need: "Pupils and staff at Okuodi Primary School needed oral health education and access to medical consultations not otherwise available to them at school.",
      response: "NHF ran a school health outreach on 15 May 2025 with an 8-person medical team, supported by 10 school staff.",
      servicesDetail: "Oral health education, medical consultations for pupils and staff, distribution of oral hygiene kits, and a research study on oral health.",
      reachedDetail: "420 children attended, alongside school staff and the 8-person NHF medical team.",
      partnerDetail: "Delivered in partnership with Okuodi Primary School's leadership and staff.",
      lessons: "Delivering oral health education alongside consultations and take-home hygiene kits gave pupils both the knowledge and the tools to act on it. Pairing the visit with an oral health research study also let NHF measure real needs it can target in future school programmes.",
      next: "NHF is following up on the oral health research findings and referral outcomes from the programme.",
    },
    photos: [
      { src: "/images/outreach/01-ovu-school-health-presentation-website.webp", alt: "NHF team presenting to pupils and staff at Okuodi Primary School, Ovu" },
      { src: "/images/outreach/02-ovu-school-health-group-website.webp", alt: "Pupils and NHF volunteers gathered during the Ovu School Health Programme" },
      { src: "/images/outreach/09-ovu-students-supplies-website.webp", alt: "Oral hygiene kits and supplies distributed to pupils at Ovu" },
      { src: "/images/outreach/10-ovu-outreach-team-website.webp", alt: "The NHF outreach team at Okuodi Primary School" },
      { src: "/images/outreach/ovu-e02.webp", alt: "Scene from the Ovu School Health Programme, May 2025" },
      { src: "/images/outreach/ovu-e03.webp", alt: "Scene from the Ovu School Health Programme, May 2025" },
      { src: "/images/outreach/ovu-e05.webp", alt: "Scene from the Ovu School Health Programme, May 2025" },
      { src: "/images/outreach/ovu-e06.webp", alt: "Scene from the Ovu School Health Programme, May 2025" },
    ],
  },
  {
    title: "School for the Deaf — International Day of Persons with Disabilities",
    location: "Christian Missionary School of the Deaf, Macpherson, Sapele, Delta State",
    partner: "Christian Missionary School of the Deaf",
    services: "Disability-inclusion talk, health Q&A, welfare packages",
    reached: "37 students, 4 teachers, 4 other staff",
    status: "Completed outreach — 3 December 2025",
    image: "/images/outreach/03-school-for-the-deaf-group-website.webp",
    story: {
      need: "The school — a mixed boarding and day school for deaf students (primary and JSS1), running since 2009 — welcomed a visit marking the International Day of Persons with Disabilities 2025, themed \"Fostering Disability-Inclusive Societies for Advancing Social Progress.\"",
      response: "NHF gave a talk encouraging students and staff to see themselves as a functional part of society, then answered health questions raised by staff about specific students — including asthma management, cerebral palsy with incontinence, and a recently noticed case of scoliosis. NHF also presented welfare packages to the school.",
      servicesDetail: "Disability-inclusion talk delivered through the school's sign-language interpreter, health guidance on asthma, cerebral palsy, and scoliosis management, and welfare package distribution.",
      reachedDetail: "37 students, 4 teachers, and 4 other staff at the school.",
      partnerDetail: "Hosted by proprietor Mr Daniel Nwaduke (Director) and Mrs Elizabeth Nwaduke (Admin Director). NHF was represented by Dr Felicity Odoh, Dr Oghenesiuvwe Nuvie Oyobere-Okupa, and Dr Harriet Akpughe (CEO).",
      lessons: "Communication is entirely in sign language, with the proprietor's son acting as interpreter — future outreaches to the school should plan for interpreter-led sessions from the outset.",
      next: "NHF is coordinating follow-up with the school on the specific health management questions raised: asthma, cerebral palsy, and scoliosis.",
    },
    photos: [
      { src: "/images/outreach/03-school-for-the-deaf-group-website.webp", alt: "NHF team with students at the Christian Missionary School of the Deaf, Sapele" },
      { src: "/images/outreach/11-school-for-the-deaf-partner-team-website.webp", alt: "NHF volunteers with school staff at the School of the Deaf" },
      { src: "/images/outreach/12-school-for-the-deaf-classroom-website.webp", alt: "Health education delivered in the classroom at the School of the Deaf" },
      { src: "/images/outreach/deaf-e02.webp", alt: "International Day of Persons with Disabilities visit, School of the Deaf, Sapele" },
      { src: "/images/outreach/deaf-e04.webp", alt: "International Day of Persons with Disabilities visit, School of the Deaf, Sapele" },
    ],
  },
  {
    title: "Ejemuojavwe Women's Health Outreach (Sapele Road, Oghara)",
    location: "Ejemuojavwe Primary Health Center, Oghara junction, Oghara, Delta State",
    partner: "MWAN Delta and Maden Healthcare Foundation",
    services: "Health talks, consultations, cervical cancer screening, blood donation drive, dental care, medication distribution",
    reached: "75 patients",
    status: "Completed outreach — 19 June 2026",
    image: "/images/outreach/13-sapele-registration-triage-website.webp",
    story: {
      need: "Women in the Oghara junction area needed accessible health talks and screening on cervical cancer, oral hygiene, and postpartum haemorrhage, alongside general medical care.",
      response: "On 19 June 2026, NHF ran a women's health outreach in collaboration with MWAN Delta and the Maden Healthcare Foundation, combining health education, a drama presentation by medical students, and clinical services.",
      servicesDetail: "Health talks on cervical cancer, oral health hygiene, and postpartum haemorrhage; drama by medical students; medical consultations; a blood donation drive; dental scaling and polishing; cervical cancer screening; and distribution of medication, toothbrushes, toothpaste, and floss.",
      reachedDetail: "75 patients attended in total. 12 received scaling and polishing. 22 were screened for cervical cancer, of whom 7 showed suspicious lesions requiring follow-up. 4 people donated blood.",
      partnerDetail: "Delivered with MWAN Delta (5 students) and Maden Healthcare Foundation (5 representatives). Team included 6 doctors, 1 dental technician, 1 medical laboratory scientist, 1 health assistant, 1 nurse, and 2 records staff.",
      lessons: "Combining health talks and a student drama presentation with hands-on screening drew strong engagement, and cervical cancer screening proved its value on the day: 7 of the 22 women screened showed suspicious lesions needing follow-up, care many might not otherwise have sought.",
      next: "The 7 patients with suspicious cervical lesions require confirmed referral and follow-up tracking.",
    },
    photos: [
      { src: "/images/outreach/13-sapele-registration-triage-website.webp", alt: "Patient registration and triage at the Ejemuojavwe women's health outreach" },
      { src: "/images/outreach/15-sapele-blood-pressure-screening-website.webp", alt: "Blood-pressure screening at the Ejemuojavwe women's health outreach" },
      { src: "/images/outreach/14-sapele-finger-prick-screening-website.webp", alt: "Laboratory finger-prick screening at the Ejemuojavwe women's health outreach" },
      { src: "/images/outreach/06-sapele-dental-care-website.webp", alt: "Dental care at the Ejemuojavwe women's health outreach" },
      { src: "/images/outreach/16-sapele-health-education-speaker-website.webp", alt: "Health education talk at the Ejemuojavwe women's health outreach" },
      { src: "/images/outreach/08-sapele-medication-support-website.webp", alt: "Pharmacy and medication support at the Ejemuojavwe women's health outreach" },
      { src: "/images/outreach/04-sapele-outreach-team-website.webp", alt: "NHF outreach team and partners at the Ejemuojavwe women's health outreach" },
      { src: "/images/outreach/sapele-e04.webp", alt: "Scene from the Ejemuojavwe women's health outreach, 19 June 2026" },
      { src: "/images/outreach/sapele-e05.webp", alt: "Scene from the Ejemuojavwe women's health outreach, 19 June 2026" },
      { src: "/images/outreach/sapele-e06.webp", alt: "Scene from the Ejemuojavwe women's health outreach, 19 June 2026" },
      { src: "/images/outreach/sapele-e07.webp", alt: "Scene from the Ejemuojavwe women's health outreach, 19 June 2026" },
    ],
  },
  {
    title: "World Breastfeeding Week 2026 — \"Strengthen What Works\"",
    location: "Ejemuojavwe PHC and Ogharefe PHC, Oghara, and the Infant Welfare Clinic, DELSUTH, Delta State",
    partner: "MWAN Delta (AIM-MNCNH project), Community Medicine Department DELSUTH, Maden Healthcare Foundation, and GladCare Health and Research Foundation",
    services: "Breastfeeding education, myth Q&A, positioning and attachment demonstrations, medical consultations, family planning counselling, infant care items",
    reached: "137 mothers",
    status: "Completed programme — 1–7 August 2026",
    image: "/images/outreach/wbw-01-mothers-group-phc.webp",
    story: {
      need: "Mothers around Oghara receive a great deal of conflicting advice about breastfeeding — that breast size determines how much milk you make, that a crying baby means the milk is not enough, that early difficulty means something is wrong. Perceived low milk supply is one of the commonest reasons breastfeeding stops earlier than a mother intended, and what is usually missing is not milk but accurate information and skilled, practical support.",
      response: "NHF marked World Breastfeeding Week from 1 to 7 August 2026 under the global theme \"Breastfeeding for a Sustainable Start in Life: Strengthen What Works\" — deliberately reinforcing the support mothers already have rather than introducing something separate from it. The week combined publicity and community mobilisation, two days of clinic-based outreach, and a social media campaign with community advocacy.",
      servicesDetail: "Health talks on breastfeeding and the value of breast milk; counselling on family planning; moderated question-and-answer sessions on the breastfeeding myths mothers actually reported hearing; practical breastfeeding demonstrations covering proper positioning and attachment; 31 medical consultations; and the distribution of 150 packs of diapers and 70 packs of wipes. Infant care items were also taken to mothers admitted to the Neonatal Intensive Care Unit, Maternity Ward, Labour Ward, and High Dependency Unit at DELSUTH.",
      reachedDetail: "137 mothers attended across three facilities — 30 at Ejemuojavwe PHC and 34 at Ogharefe PHC on 4 August, and 73 at the DELSUTH Infant Welfare and Immunization Clinic on 6 August. 31 mothers received medical consultation. Mothers on four inpatient wards at DELSUTH also received infant care items.",
      partnerDetail: "Delivered with MWAN Delta through its Advocacy and Implementation of Maternal, Newborn, Child Nutrition and Health (AIM-MNCNH) project, alongside the Community Medicine Department DELSUTH, Maden Healthcare Foundation, and GladCare Health and Research Foundation. The Community Medicine Department fielded 5 staff on the first outreach day and 16 on the second, supported by 8 nursing students, 5 MWAN doctors, and NHF's 7-person team.",
      lessons: "Reaching mothers on the wards mattered as much as the clinic sessions — mothers in the neonatal unit, labour ward, and high dependency unit are often under the most strain and the least able to come out to an outpatient talk. Pairing the myth Q&A with a hands-on positioning and attachment demonstration also proved more useful than a talk alone: most of the early difficulty mothers described was a question of technique, not of supply.",
      next: "NHF continues to work with MWAN Delta's AIM-MNCNH project and the Community Medicine Department DELSUTH on maternal and infant nutrition, with breastfeeding support delivered inside routine infant welfare and immunization clinic visits rather than only during awareness weeks.",
    },
    photos: [
      { src: "/images/outreach/wbw-01-mothers-group-phc.webp", alt: "Mothers and the NHF team with the World Breastfeeding Week banner outside the primary health centre, Oghara" },
      { src: "/images/outreach/wbw-02-team-banner-phc-gate.webp", alt: "NHF and partner team with the World Breastfeeding Week 2026 banner at the health centre gate, Oghara" },
      { src: "/images/outreach/wbw-03-health-talk-session.webp", alt: "Health talk on breastfeeding in session with mothers at a primary health centre in Oghara" },
      { src: "/images/outreach/wbw-04-breastfeeding-demonstration.webp", alt: "Breastfeeding demonstration session on positioning and attachment (faces softened for privacy)" },
      { src: "/images/outreach/wbw-05-gift-distribution.webp", alt: "Infant care items being distributed to a mother during World Breastfeeding Week 2026" },
      { src: "/images/outreach/wbw-06-delsuth-mothers-team.webp", alt: "Mothers and babies with the NHF and MWAN team at the Infant Welfare Clinic, DELSUTH, Oghara" },
      { src: "/images/outreach/wbw-07-diapers-mothers.webp", alt: "Mothers with diapers received during World Breastfeeding Week 2026, Oghara" },
      { src: "/images/outreach/wbw-08-team-placards.webp", alt: "Nursing students and NHF volunteers with foundation placards during World Breastfeeding Week 2026" },
      { src: "/images/outreach/wbw-09-banner-rollup-group.webp", alt: "NHF team and mothers with the foundation banner during World Breastfeeding Week 2026" },
      { src: "/images/outreach/wbw-10-neonatal-ward-gift.webp", alt: "Infant care items delivered to a mother on the neonatal ward at DELSUTH, Oghara" },
    ],
  },
];
