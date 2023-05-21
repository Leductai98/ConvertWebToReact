import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserMenuPc from "../Page/HomeComponent/UserMenuPc";
import UserMenuMobile from "../Page/HomeComponent/UserMenuMobile";
export default function Header() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem("login"))
  );
  const [userMenuDisplay, setUserMenuDisplay] = useState(false);
  const [userMenuMobileDisplay, setUserMenuMobileDisplay] = useState(false);
  const handleUserMenuDisplay = () => {
    setUserMenuDisplay(!userMenuDisplay);
  };
  const handleUserMenuMobileDisplay = () => {
    setUserMenuMobileDisplay(!userMenuMobileDisplay);
  };
  const handleSignOut = () => {
    setUserLogin(null);
    localStorage.removeItem("login");
    navigate("/");
  };
  return (
    <div className="container">
      <div className="header">
        <div className="row h-100">
          <div className="col-lg-8 col-md-6 col-10 d-flex justify-content-start">
            <NavLink to="/" className="icon d-lg-block">
              <img src="/Group (4).png" alt="" />
            </NavLink>
          </div>
          <div className="col-lg-4 col-md-6 d-none d-md-block d-flex justify-content-end">
            <div className="row g-0 justify-content-end">
              <div className="col-4 d-flex justify-content-end align-items-center">
                <div className="user-wrap">
                  <div
                    className={`user ${userMenuDisplay ? "active" : ""}`}
                    onClick={() => {
                      handleUserMenuDisplay();
                    }}
                  >
                    <div className="user-icon">
                      {userLogin !== null ? (
                        <img
                          src="/man-with-rainbow-haircut-rainbow-shirt.jpg"
                          alt=""
                        />
                      ) : (
                        <img src="/userDetail.png" />
                      )}
                    </div>
                  </div>
                  <UserMenuPc
                    userLogin={userLogin}
                    userMenuDisplay={userMenuDisplay}
                    onUserMenuDisplay={handleUserMenuDisplay}
                    onSignOut={handleSignOut}
                  />
                </div>
              </div>
            </div>
          </div>
          <label
            className="col-2 d-md-none menu-icon"
            htmlFor="mobile-menu"
            onClick={() => {
              handleUserMenuMobileDisplay();
            }}
          >
            <img src="/list.svg" alt="" />
          </label>
          <input
            className="input-mobile-menu"
            type="checkbox"
            id="mobile-menu"
          />
          <UserMenuMobile
            userLogin={userLogin}
            userMenuMobileDisplay={userMenuMobileDisplay}
            onUserMenuMobileDisplay={handleUserMenuMobileDisplay}
            onSignOut={handleSignOut}
          />
        </div>
      </div>
    </div>
  );
}
