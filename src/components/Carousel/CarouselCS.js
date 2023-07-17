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
      allowTouchMove={false}
      // modules={[Navigation, Autoplay]}
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 10000 }}
      className="mySwiper"
    >
      {data.map((slide) => {
        const { id, slideImage } = slide;
        return (
          <SwiperSlide key={id} className="SwiperSlide">
            <div
              className="background__image w-screen h-screen bg-center bg-cover"
              style={{ backgroundImage: `url(${slideImage})` }}
            >
              <div className="overlay bg-black bg-opacity-70 absolute top-0 right-0 bottom-0 left-0"></div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselCS;
