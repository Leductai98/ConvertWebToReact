import React from "react";
import { NavLink } from "react-router-dom";
export default function UserMenuMobile({
  userLogin,
  userMenuMobileDisplay,
  onUserMenuMobileDisplay,
  onSignOut,
  onCloseUserMenuMobile,
}) {
  return (
    <>
      <label
        className={`overlay-mobile ${userMenuMobileDisplay ? "active" : ""}`}
        htmlFor="mobile-menu"
        onClick={() => {
          onUserMenuMobileDisplay();
        }}
      />
      <div
        className={`menu ${userMenuMobileDisplay ? "active" : ""}`}
        onClick={() => {
          onUserMenuMobileDisplay();
        }}
      >
        {userLogin !== null ? (
          <>
            <label
              className="close-mobile-menu"
              htmlFor="mobile-menu"
              onClick={() => {
                onUserMenuMobileDisplay();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </label>
            <div className="avatar">
              {userLogin !== null ? (
                <img
                  src="/starscourge-radahn_elden-ring_bandai-namco.jpg"
                  alt=""
                />
              ) : (
                <img src="/userDetail.png" alt="" />
              )}

              <p>{userLogin.name}</p>
            </div>
            <ul className="menu-list">
              <li>
                <NavLink to="/user" className="menu-item">
                  Tài khoản
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage" className="menu-item end-user">
                  Chuyến đi
                </NavLink>
              </li>
              <li>
                <NavLink to="/favorite" className="menu-item end-user">
                  Danh sách yêu thích
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-item" style={{ cursor: "default" }}>
                  Trở thành chủ nhà
                </NavLink>
              </li>
              <li className="menu-item-languages">
                Ngôn ngữ: <span>Tiếng Việt</span>
              </li>
              <li>
                <NavLink to="/help" className="menu-item">
                  Trợ giúp
                </NavLink>
              </li>
              <li
                className="menu-item"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  onSignOut();
                }}
              >
                Đăng xuất
              </li>
            </ul>
          </>
        ) : (
          <>
            {" "}
            <label className="close-mobile-menu" htmlFor="mobile-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </label>
            <div className="avatar">
              <img src="/userDetail.png" alt="" />
              <p>Khách</p>
            </div>
            <ul className="menu-list">
              <li>
                <NavLink to="/signin" className="menu-item">
                  Đăng nhập
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" className="menu-item end-user">
                  Đăng ký
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-item" style={{ cursor: "default" }}>
                  Trở thành chủ nhà
                </NavLink>
              </li>
              <li className="menu-item-languages">
                Ngôn ngữ: <span>Tiếng Việt</span>
              </li>
              <li>
                <NavLink to="/help" className="menu-item">
                  Trợ giúp
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
