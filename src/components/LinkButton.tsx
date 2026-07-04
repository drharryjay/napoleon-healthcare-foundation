import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function LinkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <Link className={`button button-${variant}`} to={href}>
      <span>{children}</span>
      <ChevronRight size={18} aria-hidden="true" />
    </Link>
  );
}
