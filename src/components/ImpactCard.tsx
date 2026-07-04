import React from "react";

export function ImpactCard({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <article className="impact-card">
      <strong>{value}</strong>
      <span>{label}</span>
      {note && <small>{note}</small>}
    </article>
  );
}
