import React from "react";

import ImageBackGround from "./HomeComponent/ImageBackGround";
import HomeHeader from "./HomeComponent/HomeHeader";
import Filter from "./HomeComponent/Filter";
import BookingBanner from "./HomeComponent/BookingBanner";
import Room from "./HomeComponent/Room";
import Button from "./HomeComponent/Button";

export default function Home() {
  return (
    <>
      <ImageBackGround />
      <HomeHeader />
      <Filter />
      <Room />
      <Button />
      <BookingBanner />
    </>
  );
}
