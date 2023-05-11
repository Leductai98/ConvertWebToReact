import React from "react";
import FooterDetail from "./FooterDetail";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function LayoutDetail() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterDetail />
    </>
  );
}
