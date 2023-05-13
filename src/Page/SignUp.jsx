import React, { useState } from "react";
import SignUpHeader from "./SignUpComponent/SignUpHeader";
import "../assets/css/sign-up.css";
import SignUpContent from "./SignUpComponent/SignUpContent";
import SignUpPopUp from "./SignUpComponent/SignUpPopUp";
import SignUpToast from "./SignUpComponent/SignUpToast";
export default function SignUp() {
  document.title = "Đăng ký - Tai";
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [passType, setPassType] = useState(false);
  const [passAgainType, setPassAgainType] = useState(false);
  const [formInfo, setFormInfo] = useState({});
  const [error, setError] = useState({
    email: false,
    emailExist: false,
    newPassword: false,
    passAgain: false,
  });

  const handlePassType = () => {
    setPassType(!passType);
  };
  const handlePassAgainType = () => {
    setPassAgainType(!passAgainType);
  };
  const validateEmail = (email) => {
    const expression =
      /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;
    return expression.test(String(email).toLowerCase());
  };

  const handleValidateForm = (e) => {
    if (e.target.id === "email") {
      let result = validateEmail(e.target.value);
      if (!result) {
        setError({ ...error, email: true });
      } else {
        if (user != null) {
          if (
            user.every((item) => {
              return item.email !== mail;
            })
          ) {
            setError({ ...error, email: false });
          } else {
            setError({ ...error, email: true, emailExist: true });
          }
        } else {
          setError({ ...error, email: false, emailExist: false });
          setFormInfo({ ...formInfo, email: e.target.value });
        }
      }
    }
    if (e.target.id === "new-password") {
      let pass = e.target.value;
      if (pass.length < 6) {
        setError({ ...error, newPassword: true });
      } else {
        setError({ ...error, newPassword: false });
        setFormInfo({ ...formInfo, newPassword: e.target.value });
      }
    }
    if (e.target.id === "pass-again") {
      let pass = formInfo.newPassword;
      let passAgain = e.target.value;
      if (passAgain !== pass) {
        setError({ ...error, passAgain: true });
      } else {
        setError({ ...error, passAgain: false });
        setFormInfo({ ...formInfo, passAgain: e.target.value });
      }
    }
  };
  return (
    <>
      <SignUpHeader />
      <SignUpContent
        passType={passType}
        onPassType={handlePassType}
        passAgainType={passAgainType}
        onPassAgainType={handlePassAgainType}
        error={error}
        onValidateForm={handleValidateForm}
      />
      <SignUpPopUp />
      <SignUpToast />
    </>
  );
}
