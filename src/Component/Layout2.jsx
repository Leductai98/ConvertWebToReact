import React from "react";

import "../assets/css/swiper_index.css";
import "../grid_system.css";
import "../style.css";
import "../responsive.css";
import { Outlet } from "react-router-dom";
import Footer2 from "./Footer2";
import ScrollToTop from "./ScrollToTop";
export default function Layout2() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <Footer2 />
    </>
  );
}
