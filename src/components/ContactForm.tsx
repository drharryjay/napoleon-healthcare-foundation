import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { partnershipOptions } from "../data/partnersData";
import { volunteerAvailabilityOptions, volunteerInterestAreas, volunteerRoles } from "../data/volunteerData";

type FormType = "contact" | "partner" | "volunteer";
type FieldKind = "text" | "email" | "tel" | "textarea" | "select";

interface FieldDef {
  label: string;
  kind: FieldKind;
  required?: boolean;
  autoComplete?: string;
  options?: string[];
}

const fieldSets: Record<FormType, FieldDef[]> = {
  contact: [
    { label: "Full name", kind: "text", required: true, autoComplete: "name" },
    { label: "Email", kind: "email", required: true, autoComplete: "email" },
    { label: "Phone", kind: "tel", autoComplete: "tel" },
    { label: "Subject", kind: "text" },
    { label: "Message", kind: "textarea", required: true },
  ],
  partner: [
    { label: "Organization name", kind: "text", required: true, autoComplete: "organization" },
    { label: "Contact person", kind: "text", required: true, autoComplete: "name" },
    { label: "Email", kind: "email", required: true, autoComplete: "email" },
    { label: "Phone", kind: "tel", autoComplete: "tel" },
    { label: "Type of partnership", kind: "select", required: true, options: partnershipOptions },
    { label: "Location/community of interest", kind: "text" },
    { label: "Message", kind: "textarea", required: true },
  ],
  volunteer: [
    { label: "Full name", kind: "text", required: true, autoComplete: "name" },
    { label: "Profession", kind: "select", required: true, options: volunteerRoles },
    { label: "Specialty", kind: "text" },
    { label: "Phone number", kind: "tel", required: true, autoComplete: "tel" },
    { label: "Email", kind: "email", required: true, autoComplete: "email" },
    { label: "Location", kind: "text" },
    { label: "Availability", kind: "select", options: volunteerAvailabilityOptions },
    { label: "Area of interest", kind: "select", options: volunteerInterestAreas },
  ],
};

const consentText: Record<FormType, string> = {
  contact: "By submitting this form, you consent to Napoleon Healthcare Foundation contacting you about this inquiry, in line with our",
  partner: "By submitting this form, you consent to Napoleon Healthcare Foundation contacting you about this partnership inquiry, in line with our",
  volunteer: "By submitting this form, you consent to Napoleon Healthcare Foundation contacting you regarding volunteer and outreach-related activities, in line with our",
};

const submitLabel: Record<FormType, string> = {
  contact: "Send Message",
  partner: "Request Partnership Meeting",
  volunteer: "Submit Volunteer Application",
};

const submittingLabel: Record<FormType, string> = {
  contact: "Sending...",
  partner: "Sending request...",
  volunteer: "Submitting application...",
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
      {fields.map((field) => {
        const name = slugField(field.label);
        return (
          <label key={field.label} className={field.kind === "textarea" ? "wide" : ""}>
            <span>{field.label}{field.required && <span aria-hidden="true"> *</span>}</span>
            {field.kind === "textarea" ? (
              <textarea name={name} rows={5} placeholder="Tell us more." required={field.required} />
            ) : field.kind === "select" ? (
              <select name={name} required={field.required} defaultValue="">
                <option value="" disabled>Select an option</option>
                {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            ) : (
              <input
                type={field.kind}
                name={name}
                placeholder="Your answer"
                required={field.required}
                autoComplete={field.autoComplete}
              />
            )}
          </label>
        );
      })}
      <label className="checkbox wide">
        <input type="checkbox" name="consent" required />
        <span>
          {consentText[type]} <Link to="/privacy">privacy policy</Link>.
        </span>
      </label>
      <p className="form-response-time wide">
        <Clock size={16} aria-hidden="true" /> We aim to respond within a few business days.
      </p>
      {status === "error" && (
        <p className="form-error wide">Something went wrong sending your message. Please try again, or email {" "}
          <a href="mailto:info@napoleonhealthcarefoundation.org">info@napoleonhealthcarefoundation.org</a> directly.
        </p>
      )}
      <button className="button button-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? submittingLabel[type] : submitLabel[type]}
      </button>
    </form>
  );
}
