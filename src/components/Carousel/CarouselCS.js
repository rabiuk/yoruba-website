"use client";
import "swiper/css";
import "swiper/css/navigation";
import CarouselSlide from "./CarouselSlide";
import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation } from "swiper";
import { Autoplay } from "swiper";

const CarouselCS = ({ data }) => {
  if (!Array.isArray(data) || !data.length) {
    return null;
  }
  return (
    <Swiper
      navigation={false}
      // modules={[Navigation, Autoplay]}
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 10000 }}
      className="mySwiper"
    >
      {data.map((slide) => {
        // const { id, slideTitle, slideDescription, slideImage } = slide;
        const { id, slideImage } = slide;
        return (
          <SwiperSlide key={id}>
            <CarouselSlide
              // slideTitle={slideTitle}
              // slideDescription={slideDescription}
              slideImage={slideImage}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselCS;
