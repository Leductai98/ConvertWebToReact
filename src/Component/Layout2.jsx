import React from "react";

import "../assets/css/swiper_index.css";
import "../assets/css/grid_system.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
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
