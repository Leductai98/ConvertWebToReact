import React from "react";
import FooterDetail from "./FooterDetail";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
export default function LayoutDetail() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <FooterDetail />
    </>
  );
}
