import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useDocumentMeta } from "./hooks/useDocumentMeta";
import { useScrollToTop } from "./hooks/useScrollToTop";
// HomePage stays eagerly loaded — it's the landing page and should render
// without a second network round-trip. Every other route is code-split so
// first-visit JS stays small.
import { HomePage } from "./pages/HomePage";

const lazyPage = <T extends Record<string, React.ComponentType<never>>>(
  loader: () => Promise<T>,
  name: keyof T
) => React.lazy(() => loader().then((m) => ({ default: m[name] as React.ComponentType })));

const AboutPage = lazyPage(() => import("./pages/AboutPage"), "AboutPage");
const WhatWeDoPage = lazyPage(() => import("./pages/WhatWeDoPage"), "WhatWeDoPage");
const ImpactPage = lazyPage(() => import("./pages/ImpactPage"), "ImpactPage");
const StoriesPage = lazyPage(() => import("./pages/StoriesPage"), "StoriesPage");
const HealthEducationPage = lazyPage(() => import("./pages/HealthEducationPage"), "HealthEducationPage");
const HealthManagementAnimationPage = lazyPage(() => import("./pages/HealthManagementAnimationPage"), "HealthManagementAnimationPage");
const PartnerPage = lazyPage(() => import("./pages/PartnerPage"), "PartnerPage");
const VolunteerPage = lazyPage(() => import("./pages/VolunteerPage"), "VolunteerPage");
const DonatePage = lazyPage(() => import("./pages/DonatePage"), "DonatePage");
const GalleryPage = lazyPage(() => import("./pages/GalleryPage"), "GalleryPage");
const ContactPage = lazyPage(() => import("./pages/ContactPage"), "ContactPage");
const LegalPage = React.lazy(() =>
  import("./pages/LegalPage").then((m) => ({ default: m.LegalPage }))
);
const ThankYouPage = lazyPage(() => import("./pages/ThankYouPage"), "ThankYouPage");

function Layout() {
  useDocumentMeta();
  useScrollToTop();
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <React.Suspense fallback={<div className="route-loading" role="status" aria-label="Loading page" />}>
          <Outlet />
        </React.Suspense>
      </main>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/health-education" element={<HealthEducationPage />} />
        <Route path="/health-management-animation" element={<HealthManagementAnimationPage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/medical-disclaimer" element={<LegalPage type="medical" />} />
        <Route path="/photo-consent" element={<LegalPage type="photo" />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
