import React from "react";
import { Link } from "react-router-dom";
import { getConsent, setConsent, loadGA } from "../lib/analytics";

// Cookie-consent banner that gates Google Analytics. It starts hidden; a
// client-side effect decides whether to show it. Returning visitors who already
// accepted get GA loaded silently; those who declined (or the banner itself)
// never load analytics cookies.
export function CookieConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = getConsent();
    if (consent === "accepted") loadGA();
    else if (consent === null) setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    setConsent("accepted");
    loadGA();
    setVisible(false);
  };
  const decline = () => {
    setConsent("declined");
    setVisible(false);
  };

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <p>
        We use cookies to understand how visitors use our site so we can improve it. See our{" "}
        <Link to="/privacy">Privacy Policy</Link>.
      </p>
      <div className="cookie-consent-actions">
        <button type="button" className="cookie-consent-decline" onClick={decline}>Decline</button>
        <button type="button" className="button button-primary" onClick={accept}>Accept</button>
      </div>
    </div>
  );
}
