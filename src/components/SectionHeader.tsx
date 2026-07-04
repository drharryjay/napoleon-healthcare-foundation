import React from "react";
import { useReveal } from "../hooks/useReveal";

export function SectionHeader({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`section-header ${className}`}>
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
