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
      className="mySwiper h-full w-full"
    >
      {data.map((slide) => (
        <SwiperSlide key={slide.id} className="carousel-slide h-full w-full">
          <div className="slide-container relative h-full w-full">
            <Image
              src={slide.slideImage}
              alt={slide.slideTitle}
              layout="fill"
              priority={true}
              className="slide-image object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
