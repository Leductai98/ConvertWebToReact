import React from "react";

import "../assets/css/swiper_index.css";
import "../grid_system.css";
import "../style.css";
import "../responsive.css";
import { Outlet } from "react-router-dom";
import Footer2 from "./Footer2";

export default function Layout2() {
  return (
    <>
      <Outlet />
      <Footer2 />
     
    </>
  );
}
