import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "../data/siteConfig";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Napoleon Healthcare Foundation home">
        <img src="/logo/nhf-logo-160.png" alt="" width="54" height="54" />
        <span>
          <strong>{siteConfig.name}</strong>
          <small>{siteConfig.tagline}</small>
        </span>
      </Link>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        {navigation.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === "/"}
            onClick={() => setOpen(false)}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
        <Link className="nav-donate" to="/donate" onClick={() => setOpen(false)}>
          Support
        </Link>
      </nav>
    </header>
  );
}
