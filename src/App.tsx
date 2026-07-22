import React from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import { useDocumentMeta } from "./hooks/useDocumentMeta";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { trackPageView } from "./lib/analytics";
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
const PartnerPage = lazyPage(() => import("./pages/PartnerPage"), "PartnerPage");
const VolunteerPage = lazyPage(() => import("./pages/VolunteerPage"), "VolunteerPage");
const DonatePage = lazyPage(() => import("./pages/DonatePage"), "DonatePage");
const GalleryPage = lazyPage(() => import("./pages/GalleryPage"), "GalleryPage");
const ContactPage = lazyPage(() => import("./pages/ContactPage"), "ContactPage");
const LegalPage = React.lazy(() =>
  import("./pages/LegalPage").then((m) => ({ default: m.LegalPage }))
);
const ThankYouPage = lazyPage(() => import("./pages/ThankYouPage"), "ThankYouPage");
const NotFoundPage = lazyPage(() => import("./pages/NotFoundPage"), "NotFoundPage");

function Layout() {
  useDocumentMeta();
  useScrollToTop();

  // Send a GA page view on each in-app route change. The first view is sent by
  // GA's own config call when it loads, so skip the initial run to avoid
  // double-counting. No-ops entirely until the visitor accepts analytics.
  const { pathname } = useLocation();
  const firstView = React.useRef(true);
  React.useEffect(() => {
    if (firstView.current) {
      firstView.current = false;
      return;
    }
    trackPageView(pathname);
  }, [pathname]);

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
      <CookieConsent />
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
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/medical-disclaimer" element={<LegalPage type="medical" />} />
        <Route path="/photo-consent" element={<LegalPage type="photo" />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
