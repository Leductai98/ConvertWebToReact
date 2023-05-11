import React from "react";
import SignUpHeader from "./SignUpComponent/SignUpHeader";
import "../assets/css/sign-up.css";
import SignUpContent from "./SignUpComponent/SignUpContent";
import SignUpPopUp from "./SignUpComponent/SignUpPopUp";
import SignUpToast from "./SignUpComponent/SignUpToast";
export default function SignUp() {
  document.title = "Đăng ký - Tai";
  return (
    <>
      <SignUpHeader />
      <SignUpContent />
      <SignUpPopUp />
      <SignUpToast />
    </>
  );
}
