import React from "react";
import { ZoomIn } from "lucide-react";
import { galleryItems } from "../data/galleryData";

export function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {galleryItems.map((item) => (
        <figure key={item.category}>
          <img src={item.image} alt={item.alt} loading="lazy" />
          <div className="gallery-hover">
            <ZoomIn size={26} />
          </div>
          <figcaption>{item.category}</figcaption>
        </figure>
      ))}
    </div>
  );
}
