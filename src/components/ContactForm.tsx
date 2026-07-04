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
  return (
    <form
      className="form"
      name={type}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
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
      <button className="button button-primary" type="submit">Send Inquiry</button>
    </form>
  );
}
