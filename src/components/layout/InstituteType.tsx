"use client";
import { institutions } from "@/utils/institutions";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const InstituteType = () => {
  return (
    <section className="institutions_types_container">
      <div className="institutions_types_wrapper">
        <h1 className="institutions_heading">
          Types of YES <br /> Institutions
        </h1>

        {/* Auto Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            1280: { slidesPerView: 3, spaceBetween: 40 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            480: { slidesPerView: 1.2, spaceBetween: 20 },
            0: { slidesPerView: 1, spaceBetween: 15 },
          }}
          style={{ paddingBottom: "20px" }}
        >
          {institutions.map((institution, index) => (
            <SwiperSlide key={index}>
              <div className="institution_card">
                <div className="institution_image_wrapper">
                  <Image
                    src={institution.image}
                    alt={institution.title}
                    fill
                    className="institution_image"
                  />
                </div>
                <p>{institution.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InstituteType;
