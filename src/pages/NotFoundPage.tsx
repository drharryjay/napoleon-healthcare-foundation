import React from "react";
import { LinkButton } from "../components/LinkButton";

export function NotFoundPage() {
  return (
    <section className="section thank-you">
      <span className="eyebrow">404</span>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist or may have moved. Try one of the links below, or head back to the homepage.</p>
      <div className="button-row">
        <LinkButton href="/">Back to Home</LinkButton>
        <LinkButton href="/contact" variant="secondary">Contact NHF</LinkButton>
      </div>
    </section>
  );
}
