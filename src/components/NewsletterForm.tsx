import React from "react";
import { Mail } from "lucide-react";

export function NewsletterForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("bot-field")) return;

    setStatus("submitting");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setStatus(response.ok ? "success" : "error");
      if (response.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className={`newsletter-success ${variant}`}>Thank you — you're subscribed to NHF updates.</p>;
  }

  return (
    <form className={`newsletter-form ${variant}`} name="newsletter" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden-field">
        <label>
          Leave this field blank
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <label className="sr-only" htmlFor={`newsletter-email-${variant}`}>Email address</label>
      <Mail size={18} aria-hidden="true" />
      <input id={`newsletter-email-${variant}`} type="email" name="email" required placeholder="Your email address" />
      <button className="button button-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "error" && <p className="form-error wide">Something went wrong. Please try again.</p>}
    </form>
  );
}
