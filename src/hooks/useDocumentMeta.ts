import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { defaultPageMeta, pageMeta } from "../lib/pageMeta";
import { siteConfig } from "../data/siteConfig";

function setMeta(selector: string, attr: "content" | "href", value: string, create?: () => HTMLElement) {
  let el = document.head.querySelector(selector);
  if (!el && create) {
    el = create();
    document.head.appendChild(el);
  }
  el?.setAttribute(attr, value);
}

/**
 * Keeps title, description, Open Graph tags, and the canonical URL in sync
 * with the current route. (Client-side only — crawlers that execute JS, and
 * all social scrapers hitting "/", get correct data; the base index.html
 * carries the homepage defaults.)
 */
export function useDocumentMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] ?? defaultPageMeta;
    const url = `${siteConfig.domain}${pathname === "/" ? "/" : pathname}`;

    document.title = meta.title;
    setMeta("meta[name='description']", "content", meta.description);
    setMeta("meta[property='og:title']", "content", meta.title);
    setMeta("meta[property='og:description']", "content", meta.description);
    setMeta("meta[property='og:url']", "content", url, () => {
      const el = document.createElement("meta");
      el.setAttribute("property", "og:url");
      return el;
    });
    setMeta("link[rel='canonical']", "href", url);
  }, [pathname]);
}
