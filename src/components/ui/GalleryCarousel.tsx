"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const GalleryCarousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const images = [
    { id: 1, src: "/gallery/yes_care4.jpg", alt: "Colorful clothing" },
    { id: 2, src: "/gallery/yes_care2.jpg", alt: "Book in library" },
    { id: 3, src: "/carousal/gallery/carousal_6.png", alt: "Workspace" },
    { id: 4, src: "/gallery/yes_care5.jpg", alt: "Workspace" },
    { id: 5, src: "/gallery/yes_care6.jpg", alt: "Workspace" },
    { id: 6, src: "/gallery/yes_care7.jpg", alt: "Workspace" },
    { id: 7, src: "/gallery/yes_care8.jpg", alt: "Workspace" },
  ];

  return (
    <div className="gallery_wrapper">
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
       onBeforeInit={(swiper) => {
  if (!swiper.params) return;
  if (!swiper.params.navigation) swiper.params.navigation = {};
  
  const navigation = swiper.params.navigation as NavigationOptions;
  navigation.prevEl = prevRef.current;
  navigation.nextEl = nextRef.current;
}}

onSwiper={(swiper) => {
  setTimeout(() => {
    if (!swiper.params) return;
    if (!swiper.params.navigation) swiper.params.navigation = {};

    const navigation = swiper.params.navigation as NavigationOptions;
    navigation.prevEl = prevRef.current;
    navigation.nextEl = nextRef.current;

    if (swiper.navigation && swiper.navigation.init) {
      swiper.navigation.init();
      swiper.navigation.update();
    }
  });
}}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1080: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="premium_swiper"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="gallery_slide">
              <Image
                src={item.src}
                alt={item.alt}
                width={386}
                height={484}
                className="gallery_image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="gallery_bottom_nav">
        <button ref={prevRef} className="bottom_nav_btn" aria-label="Previous">
          <ChevronLeft size={22} />
        </button>
        <button ref={nextRef} className="bottom_nav_btn active" aria-label="Next">
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default GalleryCarousel;



