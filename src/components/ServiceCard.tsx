import React from "react";
import { Activity, Baby, ClipboardPlus, Eye, HandHeart, Microscope, SmilePlus, Stethoscope } from "lucide-react";

const icons = [Stethoscope, Eye, SmilePlus, Microscope, Baby, ClipboardPlus, Activity, HandHeart];

export function ServiceCard({ title, summary, index }: { title: string; summary: string; index: number }) {
  const Icon = icons[index % icons.length];
  return (
    <article className="service-card">
      <div className="icon-badge"><Icon size={22} /></div>
      <h3>{title}</h3>
      <p>{summary}</p>
    </article>
  );
}
