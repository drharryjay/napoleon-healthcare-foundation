import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useDocumentMeta } from "./hooks/useDocumentMeta";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { WhatWeDoPage } from "./pages/WhatWeDoPage";
import { ImpactPage } from "./pages/ImpactPage";
import { StoriesPage } from "./pages/StoriesPage";
import { HealthEducationPage } from "./pages/HealthEducationPage";
import { HealthManagementAnimationPage } from "./pages/HealthManagementAnimationPage";
import { PartnerPage } from "./pages/PartnerPage";
import { VolunteerPage } from "./pages/VolunteerPage";
import { DonatePage } from "./pages/DonatePage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import { ThankYouPage } from "./pages/ThankYouPage";

function Layout() {
  useDocumentMeta();
  useScrollToTop();
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
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
