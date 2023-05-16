import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import "../assets/css/room_detail.css";
import "../assets/css/room_detail_responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
