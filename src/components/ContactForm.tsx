import React from "react";

type FormType = "contact" | "partner" | "volunteer";

const fieldSets: Record<FormType, string[]> = {
  contact: ["Full name", "Email", "Phone", "Subject", "Message"],
  partner: ["Organization name", "Contact person", "Email", "Phone", "Type of partnership", "Location/community of interest", "Message"],
  volunteer: ["Full name", "Profession", "Specialty", "Phone number", "Email", "Location", "Availability", "Area of interest"],
};

function slugField(label: string) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ContactForm({ type = "contact" }: { type?: FormType }) {
  const fields = fieldSets[type];
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");

  // Netlify Forms officially recommends submitting via fetch() for JS
  // frameworks rather than relying on the native full-page POST redirect,
  // which otherwise lands on Netlify's own generic "Thank you!" page
  // instead of this site's branded confirmation.
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("bot-field")) return; // honeypot triggered, silently drop

    setStatus("submitting");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        <h3>Thank you</h3>
        <p>Your message has been received. Someone from Napoleon Healthcare Foundation will respond as soon as possible.</p>
      </div>
    );
  }

  return (
    <form
      className="form"
      name={type}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={type} />
      <p className="hidden-field">
        <label>
          Leave this field blank
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      {fields.map((field) => (
        <label key={field} className={field === "Message" ? "wide" : ""}>
          <span>{field}</span>
          {field === "Message" ? (
            <textarea name={slugField(field)} rows={5} placeholder="Tell us more." />
          ) : (
            <input name={slugField(field)} placeholder="Your answer" />
          )}
        </label>
      ))}
      {type === "volunteer" && (
        <label className="checkbox wide">
          <input type="checkbox" name="consent" />
          <span>By submitting this form, you consent to Napoleon Healthcare Foundation contacting you regarding volunteer and outreach-related activities.</span>
        </label>
      )}
      {status === "error" && (
        <p className="form-error wide">Something went wrong sending your message. Please try again, or email {" "}
          <a href="mailto:info@napoleonhealthcarefoundation.org">info@napoleonhealthcarefoundation.org</a> directly.
        </p>
      )}
      <button className="button button-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
