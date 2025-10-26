// app/gallery/page.tsx
"use client";

import GalleryCarousel from "@/components/ui/GalleryCarousel";
import GalleryGrid from "@/components/ui/GalleryGrid";



const page = () => {
  return (
    <>
      <section className="gallery_section">
        <GalleryCarousel />
      </section>

      <section className="wrapper_section">
         <div style={{margin:"40px 0px"}}>
        <GalleryGrid/>
        </div>
      </section>
    </>
  );
};

export default page;




