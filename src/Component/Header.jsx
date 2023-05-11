import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Header() {
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
            <div className="row g-0">
              <div className="col-5 d-flex align-items-center">
                <div className="become-host" style={{ cursor: "default" }}>
                  Trở thành chủ nhà
                </div>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <div className="language d-flex gap-2 align-items-end ">
                  <div className="language-icon">
                    <img src="/Group (5).png" alt="" />
                  </div>
                  <div className="language-des">VN</div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center">
                <div className="user-wrap">
                  <div className="user">
                    <div className="user-button">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.33325 11H14.6666M1.33325 1H14.6666H1.33325ZM1.33325 6H7.99992H1.33325Z"
                          stroke="#304659"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="user-icon">
                      <svg
                        width="32"
                        height="31"
                        viewBox="0 0 32 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2899 0.489258C7.64987 0.489258 0.637695 7.30525 0.637695 15.7035C0.637695 24.1018 7.64987 30.9178 16.2899 30.9178C24.9299 30.9178 31.942 24.1018 31.942 15.7035C31.942 7.30525 24.9299 0.489258 16.2899 0.489258ZM16.2899 5.05354C18.8881 5.05354 20.9855 7.09225 20.9855 9.61782C20.9855 12.1434 18.8881 14.1821 16.2899 14.1821C13.6916 14.1821 11.5942 12.1434 11.5942 9.61782C11.5942 7.09225 13.6916 5.05354 16.2899 5.05354ZM16.2899 26.6578C12.3768 26.6578 8.9177 24.7104 6.89856 21.7588C6.94552 18.7312 13.1594 17.0728 16.2899 17.0728C19.4047 17.0728 25.6342 18.7312 25.6812 21.7588C23.662 24.7104 20.2029 26.6578 16.2899 26.6578Z"
                          fill="#304659"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="user__overlay"></div>
                  <div className="user__menu">
                    <NavLink
                      to="/signin"
                      style={{ color: "inherit", textDecoration: " none" }}
                      className="user__menu-login"
                    >
                      Đăng nhập
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="user__menu-signup"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Đăng ký
                    </NavLink>
                    <div
                      className="user__menu-become-host"
                      style={{ cursor: "default" }}
                    >
                      Cho thuê chỗ ở
                    </div>
                    <NavLink
                      to="/help"
                      style={{ textDecoration: "none", color: "inherit" }}
                      className="user__menu-help"
                    >
                      Trợ giúp
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <label className="col-2 d-md-none menu-icon" htmlFor="mobile-menu">
            <img src="/list.svg" alt="" />
          </label>
          <input
            className="input-mobile-menu"
            type="checkbox"
            id="mobile-menu"
          />
          <label className="overlay-mobile" htmlFor="mobile-menu"></label>
          <div className="menu">
            <label className="close-mobile-menu" htmlFor="mobile-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </label>
            <div className="avatar">
              <img src="/Frame (7).png" alt="" />
              <p>Khách</p>
            </div>
            <ul className="menu-list">
              <label htmlFor="mobile-menu">
                <NavLink to="/signin" className="menu-item">
                  Đăng nhập
                </NavLink>
              </label>
              <label htmlFor="mobile-menu">
                <NavLink to="/signup" className="menu-item end-user">
                  Đăng ký
                </NavLink>
              </label>
              <li>
                <NavLink className="menu-item">Trở thành chủ nhà</NavLink>
              </li>
              <li className="menu-item-languages">
                Ngôn ngữ: <span>Tiếng Việt</span>
              </li>
              <label htmlFor="mobile-menu">
                <NavLink to="/help" className="menu-item">
                  Trợ giúp
                </NavLink>
              </label>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
