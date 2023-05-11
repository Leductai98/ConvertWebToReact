import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function RoomItem({ data, urlImage }) {
  return (
    <div className="booking__room--list--item col-index l-3 m-6 c-12">
      <div className="booking__room-list-picture">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {data.picture.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={urlImage + item.link} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link
        to={`/detail/${data.id}`}
        style={{ display: "block", textDecoration: "none", color: "inherit" }}
        className="list--item-wrap"
      >
        <div className="booking__room--list--item--rate">
          <img src="Star.png" alt="" />
          <p>{data.rate}</p>
        </div>
        <div className="booking__room--list--item--name">{data.name}</div>
        <div className="booking__room--list--item--des">
          {data.status} | {data.location}
        </div>
        <div className="booking__room--list--item--prices">
          <span>đ {data.price}/</span>
          đêm
        </div>
      </Link>
    </div>
  );
}
