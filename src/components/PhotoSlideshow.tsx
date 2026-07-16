import React from "react";
import { optimizedPhoto } from "../lib/images";

export interface SlidePhoto {
  src: string;
  alt: string;
}

/**
 * Crossfading photo slideshow. Fills its parent — the parent element sets the
 * height (fixed height or aspect-ratio) and position: relative. Auto-advance
 * pauses entirely for users with prefers-reduced-motion, who simply see the
 * first photo.
 */
export function PhotoSlideshow({
  photos,
  interval = 5000,
  sizes,
  eager = false,
}: {
  photos: SlidePhoto[];
  interval?: number;
  sizes?: string;
  eager?: boolean;
}) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (photos.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % photos.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [photos.length, interval]);

  return (
    <div className="slideshow">
      {photos.map((photo, index) => {
        const opt = optimizedPhoto(photo.src);
        return (
          <img
            key={photo.src}
            src={opt.src}
            srcSet={opt.srcSet}
            sizes={sizes ?? opt.sizes}
            alt={photo.alt}
            className={index === active ? "is-active" : ""}
            aria-hidden={index === active ? undefined : true}
            loading={index === 0 && eager ? "eager" : "lazy"}
            decoding="async"
          />
        );
      })}
    </div>
  );
}
