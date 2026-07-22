// Google Analytics 4 (GA4), loaded only after cookie consent.
//
// GA4 uses cookies, so we do NOT load it until the visitor accepts via the
// CookieConsent banner. gtag.js is injected as an external script from
// googletagmanager.com (allowed by the CSP `script-src`); every gtag() call
// runs from this bundled module, so there is no inline <script> and the strict
// Content-Security-Policy stays intact. If the visitor declines, nothing here
// runs and no analytics cookies are set.

export const GA_MEASUREMENT_ID = "G-GJQS7CQS9F";
const CONSENT_KEY = "nhf-cookie-consent";

export type Consent = "accepted" | "declined";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __nhfGaLoaded?: boolean;
  }
}

/** The visitor's stored analytics-cookie decision, or null if not asked yet. */
export function getConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent): void {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* localStorage unavailable (e.g. private mode) — the choice just won't persist */
  }
}

/** Inject gtag.js and initialise GA4. Safe to call more than once (guarded). */
export function loadGA(): void {
  if (typeof window === "undefined" || window.__nhfGaLoaded) return;
  window.__nhfGaLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
}

/** Record a page view for single-page-app route changes (no-op until GA loads). */
export function trackPageView(path: string): void {
  if (typeof window === "undefined" || !window.__nhfGaLoaded || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
