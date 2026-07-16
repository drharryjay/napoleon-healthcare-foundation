// Maps an original outreach photo path ("/images/FB_IMG_x.jpg") to its
// optimized WebP variants produced by scripts/optimize-images.mjs.
// All photos used on the site have optimized variants; the original JPEGs
// stay in public/images as archival fallbacks but are never loaded by pages.
//
// Photos already delivered as single, web-sized WebP files (the curated
// "professional selects" under /images/outreach/) don't have a -640 variant
// to build a srcSet from — pass them through unchanged instead of guessing
// at a non-existent optimized path.

export function optimizedPhoto(imagePath: string) {
  if (imagePath.endsWith(".webp")) {
    return { src: imagePath, srcSet: undefined as string | undefined, sizes: undefined as string | undefined };
  }
  const base = imagePath.replace(/^\/images\//, "").replace(/\.jpg$/i, "");
  const full = `/images/optimized/${base}.webp`;
  const small = `/images/optimized/${base}-640.webp`;
  return {
    src: full,
    srcSet: `${small} 640w, ${full} 1200w` as string | undefined,
    // Hero/gallery images render at roughly half the viewport on desktop,
    // full width on mobile.
    sizes: "(max-width: 840px) 100vw, 50vw" as string | undefined,
  };
}
