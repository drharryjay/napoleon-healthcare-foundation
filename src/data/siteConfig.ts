export const siteConfig = {
  name: "Napoleon Healthcare Foundation",
  shortName: "NHF",
  tagline: "Bringing healthcare closer to communities.",
  missionLine: "Dedicated to improving the health status of Nigerians in line with SDG Goal 3 (Good Health and Well-being).",
  domain: "https://napoleonhealthcarefoundation.org",
  email: "info@napoleonhealthcarefoundation.org",
  phone: "0703 248 2265",
  whatsapp: "0703 248 2265",
  address: "PMB 07, Oghara, Delta State, Nigeria.",
  facebook: "Napoleon HealthCare Foundation",
  facebookUrl: "https://web.facebook.com/Napoleonhealthcare",
  twitter: "@Napoleon_NF",
  twitterUrl: "https://x.com/Napoleon_NF",
  instagram: "Coming soon.",
  registration: {
    number: "CAC/IT/NO 85319",
    label: "Incorporated Trustees",
    date: "4 March 2016",
    authority: "Corporate Affairs Commission, Federal Republic of Nigeria",
    location: "Abuja",
  },
  donationLink: "/donate",
  metaDescription:
    "Napoleon Healthcare Foundation is a Nigerian community-health NGO providing free medical outreach, preventive health education, screening, eye care, dental care, and compassionate healthcare services for underserved communities.",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  { label: "Health Hub", href: "/health-education" },
  { label: "Partner", href: "/partner" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// Each entry is a real outreach photo, not a logo graphic or social-media
// screenshot (those now live in source-assets/, out of the deploy).
// Paths here are the original JPEGs; rendering components convert them to
// optimized WebP via src/lib/images.ts (regenerate with scripts/optimize-images.mjs).
export const heroImages = [
  "/images/FB_IMG_1783012553411.jpg", // community outreach assembly hall
  "/images/FB_IMG_1783012529277.jpg", // eye care: glasses distribution
  "/images/FB_IMG_1783012537202.jpg", // eye care: vision screening station
];
