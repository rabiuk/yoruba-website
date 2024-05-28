"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/legacy/image";
import carouselData, { Slide } from "./carouselData";

const Carousel = () => {
  const data: Slide[] = carouselData;
  
  if (!Array.isArray(data) || !data.length) {
    return null;
  }

  return (
    <Swiper
      navigation={false}
      allowTouchMove={false}
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 10000 }}
      className="mySwiper"
    >
      {data.map((slide) => (
        <SwiperSlide key={slide.id} className="SwiperSlide">
          <div className="slide-container min-h-screen w-full flex items-center justify-center bg-no-repeat bg-cover relative">
            <Image
              src={slide.slideImage}
              alt={slide.slideTitle}
              layout="fill"
              priority={true}
              className="object-cover"
            />
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="overlay-content text-white text-center">
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
