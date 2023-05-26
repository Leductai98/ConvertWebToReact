import React, { useContext, useEffect } from "react";

import { actions } from "./HomeComponent/HomeContext&Reducer";
import ImageBackGround from "./HomeComponent/ImageBackGround";
import HomeHeader from "./HomeComponent/HomeHeader";
import Filter from "./HomeComponent/Filter";
import BookingBanner from "./HomeComponent/BookingBanner";
import Room from "./HomeComponent/Room";
import Button from "./HomeComponent/Button";
import { useState } from "react";
import { HomeProvider } from "./HomeComponent/HomeContext&Reducer";

const urlImage = `https://api-git-main-leductai98.vercel.app`;
const getRoom = async () => {
  const res = await fetch("https://api-sandy-zeta.vercel.app/room-list");
  return res.json();
};
const promise = getRoom();
export default function Home() {
  document.title = "Nhà nghỉ dưỡng & Căn hộ cho thuê - Tai";
  const [filterInfo, setFilterInfo] = useState({ location: "" });
  const [homeRoomList, setHomeRoomList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    promise
      .then((data) => {
        setHomeRoomList(data);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading)
    return (
      <div className="detail--loading--img">
        <img src="/Spinner-1s-200px.svg" alt="" />
      </div>
    );
  return (
    <>
      <HomeProvider>
        <ImageBackGround />
        <HomeHeader filterInfo={filterInfo} setFilterInfo={setFilterInfo} />
        {isLoading ? (
          <div className="detail--loading--img">
            <img src="/Spinner-1s-200px.svg" alt="" />
          </div>
        ) : (
          <>
            <Filter />
            <Room homeRoomList={homeRoomList} urlImage={urlImage} />
            <Button />
          </>
        )}

        <BookingBanner />
      </HomeProvider>
    </>
  );
}
