# Napoleon Healthcare Foundation Website

Modern responsive frontend for Napoleon Healthcare Foundation, a Nigerian community-health NGO focused on free medical outreach, preventive health education, screening, eye care, dental care, maternal and child health support, and community-based healthcare services.

## Stack

- Vite
- React
- TypeScript
- CSS custom properties and responsive component styles
- Lucide React icons

## Run Locally

```bash
npm install
npm run dev
```

PowerShell on some Windows systems blocks `npm.ps1`. If that happens, run:

```bash
npm.cmd install
npm.cmd run dev
```

## Build

```bash
npm run build
```

The production output will be created in `dist/`.

## Editable Content

Most website content is stored in `src/data/`:

- `siteConfig.ts`: organization name, placeholder domain, email, phone, address, social links, navigation, hero images
- `servicesData.ts`: service titles and descriptions
- `impactData.ts`: editable impact metrics and outreach cards
- `articlesData.ts`: health education categories and article cards
- `galleryData.ts`: gallery categories and image paths
- `partnersData.ts`: partner audiences, partnership options, and donation categories

Sensitive or unverified details are intentionally marked `To be provided.` Do not add CAC number, bank details, address, or donor claims until verified by NHF leadership.

## Replace Images

Website images live in `public/images/`. Replace a file with the same filename, or update image paths in the relevant data file. Use descriptive alt text for all new images.

## Forms

Forms currently use placeholder `action="#"` values. They are ready to connect to:

- Google Forms
- Formspree
- Netlify Forms
- WordPress/Sanity/Strapi-backed endpoints
- A custom CRM or backend API

## Donation Setup

The Donate page contains placeholders for:

- Bank details
- Paystack or Flutterwave link
- Donation contact person
- Accountability statement

Add only verified payment details.

## Pages Included

- Home
- About NHF
- What We Do
- Our Impact
- Outreach Stories
- Health Education Hub
- Partner With Us
- Volunteer
- Donate / Support
- Gallery
- Contact
- Privacy Policy
- Medical Disclaimer
- Photo Consent Statement

## Deployment

This project is ready for Vercel, Netlify, or any static host that supports Vite builds.

Suggested temporary deployment flow:

1. Push the project to GitHub.
2. Import it into Vercel or Netlify.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Connect `https://napoleonhealthcarefoundation.org` after the domain is recovered or purchased.
