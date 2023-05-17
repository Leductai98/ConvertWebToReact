import React from "react";

import ImageBackGround from "./HomeComponent/ImageBackGround";
import HomeHeader from "./HomeComponent/HomeHeader";
import Filter from "./HomeComponent/Filter";
import BookingBanner from "./HomeComponent/BookingBanner";
import Room from "./HomeComponent/Room";
import Button from "./HomeComponent/Button";
import { useState } from "react";
import { HomeProvider } from "./HomeComponent/HomeContext&Reducer";
export default function Home() {
  const [filterInfo, setFilterInfo] = useState({ location: "" });
  return (
    <>
      <HomeProvider>
        <ImageBackGround />
        <HomeHeader filterInfo={filterInfo} setFilterInfo={setFilterInfo} />
        <Filter />
        <Room />
        <Button />
        <BookingBanner />
      </HomeProvider>
    </>
  );
}
