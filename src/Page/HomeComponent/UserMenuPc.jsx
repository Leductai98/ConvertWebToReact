import React from "react";
import { NavLink } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
export default function UserMenuPc({
  userLogin,
  userMenuDisplay,
  onUserMenuDisplay,
  onSignOut,
}) {
  return (
    <>
      <div
        className={`user__overlay ${
          userMenuDisplay ? "user__display-block" : ""
        }`}
        onClick={() => {
          onUserMenuDisplay();
        }}
      />
      <div
        className={`user__menu ${userMenuDisplay ? "user__display-flex" : ""}`}
        onClick={() => {
          onUserMenuDisplay();
        }}
      >
        {userLogin !== null ? (
          <>
            <NavLink
              to="/user"
              style={{
                color: "inherit",
                fontWeight: 400,
                textDecoration: "none",
              }}
              className="user__menu-login"
            >
              Tài khoản
            </NavLink>
            <NavLink
              to="/manage"
              className="user__menu-become-host"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Chuyến đi
            </NavLink>
            <NavLink
              to="/favorite"
              style={{ color: "inherit", textDecoration: "none" }}
              className="user__menu-signup"
            >
              Danh sách yêu thích
            </NavLink>
            <NavLink
              to="/help"
              style={{ color: "inherit", textDecoration: "none" }}
              className="user__menu-help"
            >
              Trợ giúp
            </NavLink>
            <div
              className="user__menu-become-host"
              onClick={() => {
                onSignOut();
              }}
            >
              Đăng xuất
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/signin"
              style={{ color: "inherit", textDecoration: "none" }}
              className="user__menu-login"
            >
              Đăng nhập
            </NavLink>
            <NavLink
              to="/signup"
              style={{ color: "inherit", textDecoration: "none" }}
              className="user__menu-signup"
            >
              Đăng ký
            </NavLink>
            <NavLink to="/about" className="user__menu-become-host">
              Về chúng tôi
            </NavLink>
            <NavLink
              to="/help"
              style={{ color: "inherit", textDecoration: "none" }}
              className="user__menu-help"
            >
              Trợ giúp
            </NavLink>
          </>
        )}
      </div>
    </>
  );
}
