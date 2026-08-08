// Build-time prerendering for the Napoleon Healthcare Foundation site.
//
// WHY THIS EXISTS
// The site is a client-rendered React single-page app. Without this step, the
// raw HTML that every URL returns is the homepage shell — the same title,
// description and canonical link on every page — and the real per-page content
// and metadata only appear AFTER a browser runs the JavaScript. Search engines
// that execute JS (Googlebot) eventually see the right thing, but many AI
// crawlers (GPTBot, ClaudeBot, PerplexityBot) and social scrapers do NOT run
// JS, so they would read every page as a copy of the homepage.
//
// WHAT THIS DOES
// After `vite build` produces `dist/`, this script serves that build locally,
// opens each sitemap URL in a headless browser, lets the app render fully
// (correct <title>, meta description, canonical link, Open Graph tags and the
// real page body), then saves the finished HTML as that page's own file:
//   /about  ->  dist/about.html
// Flat .html files (rather than about/index.html) matter: Netlify then serves
// /about directly at 200, whereas a directory would 301-redirect /about to
// /about/. Flat files keep the served URL identical to the canonical link and
// the sitemap entry (both no trailing slash), so crawlers see one clean URL.
// Every crawler — JS or not — gets correct, page-specific HTML, and the saved
// pages still boot into the normal live React app for real visitors (the
// script tags are preserved).
//
// SAFETY
// If the headless browser cannot start (e.g. a hosting-environment hiccup),
// this script logs a loud warning and exits successfully so the deploy still
// ships the normal SPA build — a prerender problem must never block a deploy.
//
// HISTORY (2026-08-08)
// That safety net hid a real failure for weeks: on Netlify no Chrome was
// available, so every deploy silently shipped the SPA shell and crawlers saw an
// empty page at every URL, while local builds looked perfect. Two things changed
// as a result: netlify.toml now installs Chrome explicitly into a cached
// PUPPETEER_CACHE_DIR, and the warnings below are deliberately loud and end with
// a one-line summary that says plainly whether pages were written. If you are
// reading a build log, search for "PRERENDER".

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { preview } from "vite";

const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(projectRoot, "dist");
const PORT = 4183;

/** Read the route paths straight from the published sitemap so the two never drift. */
async function routesFromSitemap() {
  const xml = await readFile(path.join(projectRoot, "public", "sitemap.xml"), "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  return locs.map((loc) => new URL(loc).pathname);
}

/** Map a route path to the flat .html file it should be written as inside dist/. */
function outputFileFor(route) {
  if (route === "/") return path.join(distDir, "index.html");
  const slug = route.replace(/^\/+/, "").replace(/\/+$/, "");
  return path.join(distDir, `${slug}.html`);
}

/**
 * Report that no pages were prerendered, as loudly as a build log allows.
 * Still exits 0 — a prerender problem must not block a deploy — but nobody
 * should be able to scroll past this and assume the deploy was complete.
 */
function fail(reason) {
  const line = "!".repeat(72);
  console.warn(`\n${line}`);
  console.warn("PRERENDER FAILED — SHIPPING AN UN-PRERENDERED SPA SHELL.");
  console.warn(`Reason: ${reason}`);
  console.warn("");
  console.warn("Every URL will return an empty page to crawlers that do not run");
  console.warn("JavaScript (GPTBot, ClaudeBot, PerplexityBot, social scrapers).");
  console.warn("Real visitors are unaffected — React still renders in the browser.");
  console.warn("");
  console.warn("Fix: ensure Chrome is installed into PUPPETEER_CACHE_DIR before the");
  console.warn("build. See the [build] block in netlify.toml.");
  console.warn(`${line}\n`);
}

async function run() {
  const routes = await routesFromSitemap();
  console.log(`[prerender] ${routes.length} routes to prerender.`);

  // Serve the freshly built dist/ (SPA fallback is on by default, so every
  // client route resolves to the app rather than a 404).
  const server = await preview({
    preview: { port: PORT, strictPort: true },
    logLevel: "warn",
  });
  const base = `http://localhost:${PORT}`;

  // Import puppeteer lazily so a missing/broken install degrades gracefully.
  let puppeteer;
  try {
    puppeteer = (await import("puppeteer")).default;
  } catch (err) {
    await server.httpServer.close();
    fail(`puppeteer could not be imported: ${err.message}`);
    return;
  }

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
      // The default 30s protocol timeout is not enough on a cold or busy
      // machine: "Network.enable timed out" was intermittently killing whole
      // runs, and once cost a page ("13/14 prerendered") without anything
      // obviously going wrong.
      protocolTimeout: 180000,
    });
  } catch (err) {
    await server.httpServer.close();
    fail(`Chrome could not be launched: ${err.message}`);
    return;
  }

  /** Render one route to HTML. Throws if the app never produced real content. */
  async function render(route) {
    const page = await browser.newPage();
    try {
      await page.goto(`${base}${route}`, { waitUntil: "networkidle2", timeout: 45000 });
      // Wait until the app has actually rendered real content (not just the
      // Suspense loading placeholder) and set a page title.
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          return (
            document.title &&
            root &&
            root.textContent &&
            root.textContent.trim().length > 200
          );
        },
        { timeout: 45000 }
      );
      return "<!doctype html>\n" + (await page.content()).replace(/^<!doctype html>/i, "").trimStart();
    } finally {
      await page.close();
    }
  }

  let ok = 0;
  try {
    for (const route of routes) {
      // One retry: the failures seen in practice are transient CDP timeouts on
      // a busy machine, not anything wrong with the page itself.
      let html;
      for (let attempt = 1; attempt <= 2; attempt += 1) {
        try {
          html = await render(route);
          break;
        } catch (err) {
          if (attempt === 2) {
            console.warn(`[prerender] ✗ ${route} — ${err.message}`);
          } else {
            console.warn(`[prerender] … ${route} failed (${err.message}) — retrying`);
          }
        }
      }
      if (!html) continue;

      const outFile = outputFileFor(route);
      await mkdir(path.dirname(outFile), { recursive: true });
      await writeFile(outFile, html, "utf8");
      console.log(`[prerender] ✓ ${route}`);
      ok += 1;
    }
  } finally {
    await browser.close();
    await server.httpServer.close();
  }

  if (ok === 0) {
    fail("the browser started but no route rendered successfully");
  } else if (ok < routes.length) {
    console.warn(
      `\n[PRERENDER] PARTIAL — ${ok}/${routes.length} pages prerendered. ` +
        `The routes marked ✗ above will serve an un-prerendered shell to crawlers.\n`
    );
  } else {
    console.log(`[PRERENDER] OK — ${ok}/${routes.length} pages prerendered.`);
  }
}

run().catch((err) => {
  // Never fail the deploy over prerendering; ship the normal SPA build instead.
  fail(err.message);
  process.exit(0);
});
