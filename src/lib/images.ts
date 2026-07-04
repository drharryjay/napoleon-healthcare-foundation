// Maps an original outreach photo path ("/images/FB_IMG_x.jpg") to its
// optimized WebP variants produced by scripts/optimize-images.mjs.
// All photos used on the site have optimized variants; the original JPEGs
// stay in public/images as archival fallbacks but are never loaded by pages.

export function optimizedPhoto(jpgPath: string) {
  const base = jpgPath.replace(/^\/images\//, "").replace(/\.jpg$/i, "");
  const full = `/images/optimized/${base}.webp`;
  const small = `/images/optimized/${base}-640.webp`;
  return {
    src: full,
    srcSet: `${small} 640w, ${full} 1200w`,
    // Hero/gallery images render at roughly half the viewport on desktop,
    // full width on mobile.
    sizes: "(max-width: 840px) 100vw, 50vw",
  };
}
