import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { generatePath } from "react-router";
import { useNavigate } from "react-router-dom";
import SignUpHeader from "./SignUpComponent/SignUpHeader";
import "../assets/css/sign-up.css";
import SignUpContent from "./SignUpComponent/SignUpContent";
import SignUpPopUp from "./SignUpComponent/SignUpPopUp";
import SignUpToast from "./SignUpComponent/SignUpToast";
export default function SignUp() {
  document.title = "Đăng ký - Tai";
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [userLogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem("login")) ?? []
  );
  const [passType, setPassType] = useState(false);
  const [passAgainType, setPassAgainType] = useState(false);
  const [formInfo, setFormInfo] = useState({
    email: "",
    newPassword: "",
    passAgain: "",
  });
  const [error, setError] = useState({
    email: false,
    emailExist: false,
    newPassword: false,
    passAgain: false,
  });
  const [toast, setToast] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [removing, setRemoving] = useState("");
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
      setFormInfo({ ...formInfo, email: e.target.value });
      if (!result) {
        setError({ ...error, email: true });
      } else {
        if (user != null) {
          if (
            user.every((item) => {
              console.log(e.target.value);
              return item.email !== e.target.value;
            })
          ) {
            setError({ ...error, email: false, emailExist: false });
          } else {
            setError({ ...error, email: true, emailExist: true });
          }
        } else {
          setError({ ...error, email: false, emailExist: false });
        }
      }
    }
    if (e.target.id === "new-password") {
      let pass = e.target.value;
      setFormInfo({ ...formInfo, newPassword: e.target.value });
      if (pass.length < 6) {
        setError({ ...error, newPassword: true });
      } else {
        setError({ ...error, newPassword: false });
        if (formInfo.passAgain !== "") {
          if (pass === formInfo.passAgain) {
            setError({ ...error, newPassword: false, passAgain: false });
          } else {
            setError({ ...error, newPassword: false, passAgain: true });
          }
        }
      }
    }
    if (e.target.id === "pass-again") {
      let pass = formInfo.newPassword;
      let passAgain = e.target.value;
      setFormInfo({ ...formInfo, passAgain: e.target.value });
      if (passAgain !== pass) {
        setError({ ...error, passAgain: true });
      } else {
        setError({ ...error, passAgain: false });
      }
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      formInfo.email !== "" &&
      formInfo.newPassword !== "" &&
      formInfo.passAgain !== ""
    ) {
      if (!error.email && !error.newPassword && !error.passAgain) {
        let valueEmail = formInfo.email;
        let valuePass = formInfo.newPassword;

        let result = {
          email: valueEmail,
          pass: valuePass,
          name: `Người dùng ${Math.floor(Math.random() * 10000)}`,
        };
        let result2 = user ?? [];
        result2.push(result);
        localStorage.setItem("user", JSON.stringify(result2));
        setFormInfo({ email: "", newPassword: "", passAgain: "" });
        setTimeout(() => {
          setPopUp(true);
        }, 500);
        setTimeout(() => {
         
          navigate("/signin");
        }, 1500);
      }
    } else {
      let id = Math.random() * 100000;
      setToast([...toast, { id: id, name: "Vui lòng điền đủ thông tin" }]);
    }
  };
  const handleCloseToast = (id) => {
    let result = toast.filter((item) => item.id !== id);
    console.log(result);
    setToast(result);
  };
  const handleSignIn = (e) => {
    if (userLogin.length) {
      e.preventDefault();
      setToast([
        ...toast,
        { id: Math.random() * 100000, name: "Bạn đang đăng nhập rồi" },
      ]);
    }
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
      <SignUpHeader />
      <SignUpContent
        passType={passType}
        onPassType={handlePassType}
        passAgainType={passAgainType}
        onPassAgainType={handlePassAgainType}
        formInfo={formInfo}
        error={error}
        onValidateForm={handleValidateForm}
        onSubmit={handleSubmitForm}
        onSignIn={handleSignIn}
      />
      <SignUpPopUp popUp={popUp} />
      <SignUpToast
        toast={toast}
        onCloseToast={handleCloseToast}
        setToast={setToast}
      />
    </>
  );
}
