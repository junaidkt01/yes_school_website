// // components/layout/InstituteType.tsx
// "use client";

// import { institutions } from "@/utils/institutions";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const InstituteType = () => {
//   return (
//     <section className="institutions_types_container">
//       <div className="institutions_types_wrapper">
//         <h1 className="institutions_heading">
//           Types of YES <br /> Institutions
//         </h1>

//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           spaceBetween={30}
//           slidesPerView={3}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             1280: { slidesPerView: 3, spaceBetween: 40 },
//             1024: { slidesPerView: 2.4, spaceBetween: 32 },
//             768: { slidesPerView: 2.2, spaceBetween: 28 },
//             480: { slidesPerView: 1.4, spaceBetween: 22 },
//             0: { slidesPerView: 1.1, spaceBetween: 18 },
//           }}
//           className="institution_slider"
//         >
//           {institutions.map((institution, index) => (
//             <SwiperSlide key={index}>
//               <div className="institution_card">
//                 <div className="institution_image_wrapper">
//                   <Image
//                     src={institution.image}
//                     alt={institution.title}
//                     fill
//                     className="institution_image"
//                   />
//                 </div>
//                 <p className="institution_title">{institution.title}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default InstituteType;

"use client";

import { institutions } from "@/utils/institutions";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const InstituteType = () => {
  return (
    <section className="institutions_types_container">
      <div className="institutions_types_wrapper">
        <h1 className="institutions_heading">
          Types of YES <br /> Institutions
        </h1>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 }, // mobile
            768: { slidesPerView: 2 }, // tablet
            1024: { slidesPerView: 3 }, // desktop
          }}
          className="institutes_swiper"
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
                <p className="institution_title">{institution.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InstituteType;
