import React from "react";
import "../assets/css/sign-in.css";
import SignInHeader from "./SignInComponent/SignInHeader";
import SignInContent from "./SignInComponent/SignInContent";
import SignInPopUp from "./SignInComponent/SignInPopUp";
import SignInToast from "./SignInComponent/SignInToast";
export default function SignIn() {
  document.title = "Đăng nhập - Tai";
  return (
    <>
      <SignInHeader />
      <SignInContent />
      <SignInPopUp />
      <SignInToast />
    </>
  );
}
