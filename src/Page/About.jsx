import React, { useEffect } from "react";
import AboutBanner from "./AboutComponent/AboutBanner";
import "../assets/css/about-us.css";
import AboutContent from "./AboutComponent/AboutContent";
export default function About() {
  document.title = "Về chúng tôi - Tai";
 
  return (
    <>
      <AboutBanner />
      <AboutContent />
    </>
  );
}
