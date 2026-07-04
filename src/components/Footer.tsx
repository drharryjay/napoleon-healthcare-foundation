import React from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Facebook, Instagram, Mail, MessageCircle, Phone, Twitter } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { LinkButton } from "./LinkButton";
import { NewsletterForm } from "./NewsletterForm";

const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "").replace(/^0/, "234");

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div>
          <h3>Stay Updated</h3>
          <p>Get news on our outreaches, health education campaigns, and public health updates.</p>
        </div>
        <NewsletterForm variant="dark" />
      </div>
      <div className="footer-grid">
        <div>
          <img className="footer-mark" src="/logo/nhf-logo.png" alt="" />
          <h2>{siteConfig.name}</h2>
          <p>{siteConfig.missionLine}</p>
          <LinkButton href="/donate" variant="secondary">Support an Outreach</LinkButton>
          <p className="footer-registration">
            <BadgeCheck size={16} />
            {siteConfig.registration.number} &middot; {siteConfig.registration.label}, est.{" "}
            {siteConfig.registration.date.split(" ").slice(-1)[0]}
          </p>
        </div>
        <div>
          <h3>For Partners</h3>
          <Link to="/partner">Partner With Us</Link>
          <Link to="/what-we-do">What We Do</Link>
          <Link to="/impact">Our Impact</Link>
        </div>
        <div>
          <h3>For Volunteers &amp; Donors</h3>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/donate">Donate / Support</Link>
          <Link to="/health-education">Health Education Hub</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div>
          <h3>Contact &amp; Compliance</h3>
          <a className="footer-contact-link" href={`mailto:${siteConfig.email}`}><Mail size={16} /> {siteConfig.email}</a>
          <a className="footer-contact-link" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}><Phone size={16} /> {siteConfig.phone}</a>
          <a className="footer-contact-link" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          <a className="footer-contact-link" href={siteConfig.twitterUrl} target="_blank" rel="noreferrer"><Twitter size={16} /> {siteConfig.twitter}</a>
          <span className="footer-social-pending"><Facebook size={16} /> {siteConfig.facebook}</span>
          <span className="footer-social-pending"><Instagram size={16} /> {siteConfig.instagram}</span>
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/medical-disclaimer">Medical disclaimer</Link>
          <Link to="/photo-consent">Photo consent statement</Link>
        </div>
      </div>
      <p className="fine-print">© {new Date().getFullYear()} {siteConfig.name}. Registered with the {siteConfig.registration.authority} ({siteConfig.registration.number}).</p>
    </footer>
  );
}
