import React from "react";
import { ShieldCheck } from "lucide-react";

export function ConsentNotice() {
  return (
    <aside className="notice">
      <ShieldCheck size={22} />
      <p>NHF should only publish identifiable patient or community photos with appropriate consent, especially for children or vulnerable persons.</p>
    </aside>
  );
}
