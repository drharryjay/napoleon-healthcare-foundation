import React from "react";
import { ZoomIn } from "lucide-react";
import { galleryItems } from "../data/galleryData";
import { optimizedPhoto } from "../lib/images";

export function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {galleryItems.map((item) => {
        const opt = optimizedPhoto(item.image);
        return (
          <figure key={item.category}>
            <img
              src={opt.src}
              srcSet={opt.srcSet}
              sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
              width={640}
              height={480}
              alt={item.alt}
              loading="lazy"
              decoding="async"
            />
            <div className="gallery-hover">
              <ZoomIn size={26} />
            </div>
            <figcaption>{item.category}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
