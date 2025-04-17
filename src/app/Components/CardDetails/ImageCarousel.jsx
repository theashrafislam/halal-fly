"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const images = [
  "/hero-section.jpg",
  "/hero-section.jpg",
  "/hero-section.jpg",
  "/hero-section.jpg",
  "/hero-section.jpg"
];

const ImageCarousel = () => {
  return (
    <div className="bg-[#F2FBFA] py-8 px-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                src={src}
                alt={`image-${index}`}
                className="w-full h-[220px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;