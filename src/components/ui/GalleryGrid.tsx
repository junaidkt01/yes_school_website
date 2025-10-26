"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "./GalleryCarousal.scss";
import { images } from "@/utils/galleryImages";



const GalleryGrid = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preload = images.map(
      (imgObj) =>
        new Promise((resolve) => {
          const img = new window.Image();
          img.src = imgObj.src;
          img.onload = resolve;
        })
    );

    Promise.all(preload).then(() => setLoaded(true));
  }, []);

  return (
    <div className="collage-container">
      {images.map(({ id, src, alt }, index) => (
        <div key={id} className={`photo-item item-${index + 1} ${!loaded ? "loading" : ""}`}>
          {loaded ? (
            <Image src={src} alt={`Gallery ${alt}`} fill className="photo" />
          ) : (
            <div className="photo loading" />
          )}
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;

