import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


const urlImage = `https://api-git-main-leductai98.vercel.app`;
const getFilter = async () => {
  const res = await fetch(`https://api-sandy-zeta.vercel.app/filter`);
  const data = await res.json();
  return data;
};
const promise = getFilter();
export default function Filter() {
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    promise.then((data) => {
      setFilterList(data);
    });
  }, []);
  return (
    <section className="filter">
      <Swiper
        className="filter__list"
        modules={[Navigation]}
        spaceBetween={0}
        navigation
        breakpoints={{
          0: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 0 },
          500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 7,
            slidesPerGroup: 7,
            spaceBetween: 0,
          },
        }}
      >
        {filterList.map((item) => (
          <SwiperSlide
            key={item.id}
            className="filter__item "
            data-type={item.name}
          >
            <div className="filter__item--picture">
              <img src={urlImage + item.picture} alt="" loanding="lazy" />
            </div>
            <div className="filter__item--des">
              <span>{item.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
