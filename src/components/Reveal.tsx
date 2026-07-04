import React from "react";
import { useReveal } from "../hooks/useReveal";

export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, className: revealClass } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`${revealClass} ${className}`}>
      {children}
    </div>
  );
}
