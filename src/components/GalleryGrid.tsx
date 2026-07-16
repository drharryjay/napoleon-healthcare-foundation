import React from "react";
import { X, ZoomIn } from "lucide-react";
import { galleryItems } from "../data/galleryData";
import { optimizedPhoto } from "../lib/images";

export function GalleryGrid() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const triggerRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = React.useRef<HTMLButtonElement | null>(null);
  const lastTriggerIndex = React.useRef<number | null>(null);

  const close = React.useCallback(() => {
    setOpenIndex(null);
    if (lastTriggerIndex.current !== null) {
      triggerRefs.current[lastTriggerIndex.current]?.focus();
    }
  }, []);

  const open = (index: number) => {
    lastTriggerIndex.current = index;
    setOpenIndex(index);
  };

  React.useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close]);

  const active = openIndex !== null ? galleryItems[openIndex] : null;

  return (
    <>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => {
          const opt = item.optimized ? optimizedPhoto(item.image) : null;
          return (
            <figure key={item.image}>
              <button
                ref={(el) => { triggerRefs.current[index] = el; }}
                type="button"
                className="gallery-trigger"
                onClick={() => open(index)}
                aria-label={`View larger image: ${item.alt}`}
              >
                <img
                  src={opt ? opt.src : item.image}
                  srcSet={opt?.srcSet}
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <div className="gallery-hover" aria-hidden="true">
                <ZoomIn size={26} />
              </div>
              <figcaption>{item.category}</figcaption>
            </figure>
          );
        })}
      </div>
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.category} onClick={close}>
          <button ref={closeRef} type="button" className="lightbox-close" onClick={close} aria-label="Close image">
            <X size={22} />
          </button>
          <img
            src={active.optimized ? optimizedPhoto(active.image).src : active.image}
            alt={active.alt}
            width={active.width}
            height={active.height}
            onClick={(event) => event.stopPropagation()}
          />
          <p className="lightbox-caption" onClick={(event) => event.stopPropagation()}>{active.caption}</p>
        </div>
      )}
    </>
  );
}
