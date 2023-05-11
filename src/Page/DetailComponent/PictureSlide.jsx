import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function PictureSlide({ data, url }) {
  let htmlCode = data.map((item) => (
    <SwiperSlide>
      <img src={url + item.link} alt="" />
    </SwiperSlide>
  ));
  return (
    <div className="room__picture-list-wrap">
      <label htmlFor="picture-list" className="cover-detail-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          fill="white"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </label>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          el: ".swiper-pagination",
          type: "fraction",
        }}
        navigation
        className="swiper mySwiper"
      >
        {htmlCode}
      </Swiper>
    </div>
  );
}
