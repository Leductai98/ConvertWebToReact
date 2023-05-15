import React, { useState, useEffect } from "react";
import "../assets/css/sign-in.css";
import SignInHeader from "./SignInComponent/SignInHeader";
import SignInContent from "./SignInComponent/SignInContent";
import SignInPopUp from "./SignInComponent/SignInPopUp";
import SignInToast from "./SignInComponent/SignInToast";
export default function SignIn() {
  document.title = "Đăng nhập - Tai";
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [passType, setPassType] = useState(false);
  const [formInfo, setFormInfo] = useState({
    email: "",
    pass: "",
  });
  const [error, setError] = useState({
    email: false,
    pass: false,
  });
  const [toast, setToast] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [removing, setRemoving] = useState("");

  const validateEmail = (email) => {
    const expression =
      /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;
    return expression.test(String(email).toLowerCase());
  };
  const handlePassType = () => {
    setPassType(!passType);
  };
  const handleValidateForm = (e) => {
    if (e.target.id === "email") {
      let result = validateEmail(e.target.value);
      setFormInfo({ ...formInfo, email: e.target.value });
      if (!result) {
        setError({ ...error, email: true });
      } else {
        setError({ ...error, email: false });
      }
    }
    if (e.target.id === "new-password") {
      let pass = e.target.value;
      setFormInfo({ ...formInfo, pass: e.target.value });
      if (pass.length < 6) {
        setError({ ...error, pass: true });
      } else {
        setError({ ...error, pass: false });
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInfo.email !== "" && formInfo.pass !== "") {
      if (user.length) {
        let result = "";
        user.forEach((item) => {
          if (item.email == formInfo.email && item.pass == formInfo.pass) {
            result = item;
          }
        });
        if (result != "") {
          setFormInfo({ email: "", pass: "" });
          localStorage.setItem("login", JSON.stringify(result));
          setTimeout(() => {
            setPopUp(true);
          }, 500);
          setTimeout(() => {
            if (localStorage.getItem("isDetail")) {
              location.href = localStorage.getItem("isDetail");
              localStorage.removeItem("isDetail");
              localStorage.removeItem("previousSignUp");
            } else {
              if (localStorage.getItem("previousSignUp")) {
                let y = location.href.replace("signin", "");
                location.href = y;
                localStorage.removeItem("previousSignUp");
              } else {
                history.back();
              }
            }
          }, 1500);
        } else {
          setToast([
            ...toast,
            {
              id: Math.random() * 100000,
              name: "Email hoặc mật khẩu không chính xác",
            },
          ]);
        }
      }
    } else {
      setToast([
        ...toast,
        { id: Math.random() * 100000, name: "Vui lòng điền đủ thông tin" },
      ]);
    }
  };
  const handleCloseToast = (id) => {
    let result = toast.filter((item) => item.id !== id);
    console.log(result);
    setToast(result);
  };
  useEffect(() => {
    setToast(toast.filter((item) => item.id !== removing));
  }, [removing]);
  useEffect(() => {
    if (toast.length) {
      const id = toast[toast.length - 1].id;
      setTimeout(() => {
        setRemoving(id);
      }, 2000);
    }
  }, [toast]);
  return (
    <>
      <SignInHeader />
      <SignInContent
        error={error}
        formInfo={formInfo}
        passType={passType}
        onPassType={handlePassType}
        onValidateForm={handleValidateForm}
        onSubmit={handleSubmit}
      />
      <SignInPopUp popUp={popUp} />
      <SignInToast toast={toast} onCloseToast={handleCloseToast} />
    </>
  );
}
