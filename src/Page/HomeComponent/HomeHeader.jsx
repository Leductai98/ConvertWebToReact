import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import { Vietnamese } from "flatpickr/dist/l10n/vn.js";
export default function HomeHeader() {
  document.title = "Nhà nghỉ dưỡng & Căn hộ cho thuê - Tai";

  return (
    <section className="header-index">
      <div className="header-wrap">
        <div className="nav">
          <NavLink to="/" className="nav__icon">
            <img src="/Group.png" alt="" />
          </NavLink>
          <NavLink to="/" className="nav__icon-tablet-mobile">
            <img src="/Group (4).png" alt="" />
          </NavLink>
          <div className="header__search on-tablet-mobile">
            <div className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <div className="header__search--location">
              <div className="header__search--location--des">
                <div className="header__search--location--des--header">
                  <div className="location-input-wrap-mobile">
                    <input
                      className="input-location-mobile"
                      type="search"
                      placeholder="Địa điểm"
                      autoComplete="off"
                    />
                    <div className="location-menu-overlay-mobile" />
                    <div className="location-menu">
                      <div className="location-list">
                        <div className="location-item">
                          <div className="location-item-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={22}
                              height={22}
                              fill="currentColor"
                              className="bi bi-geo-alt"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                          </div>
                          <div className="location-item-text">Hà Nội</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header__search--location--des--icon">
                  <img src="/chevron_forward.png" alt="" />
                </div>
              </div>
              <input
                type="search"
                className="header__search--location--input"
                placeholder="Điểm đến của bạn"
              />
            </div>
            <div className="header__search--day-on-tablet">
              <Flatpickr
                options={{
                  locale: Vietnamese,
                  allowInput: true,
                  mode: "range",
                  minDate: "today",
                  dateFormat: "d-m-Y",
                }}
                id="input-start-end"
                type="text"
                placeholder="Ngày"
                className="input-mobile"
                autoComplete="off"
              />
            </div>
            <div className="people-wrap">
              <label
                htmlFor="guest-menu-input-mobile"
                className="header__search--people"
                id="header__search--people-pc"
              >
                <div className="header__search--people--placeholder-mobile">
                  <div className="guest-adult-child-mobile">1 khách</div>
                  <div className="guest-baby-mobile">, 1 em bé</div>
                  <div className="guest-pet-mobile">, 1 thú cưng</div>
                </div>
              </label>
              <input type="checkbox" name="" id="guest-menu-input-mobile" />
              <label
                className="guest-menu-overlay-mobile"
                htmlFor="guest-menu-input-mobile"
              />
              <div className="guest-menu-mobile-index">
                <div className="guest-list">
                  <div className="guest-item">
                    <div className="item-left">
                      <div className="item-left-header">Người lớn</div>
                      <div className="item-left-des">Từ 13 tuổi trở lên</div>
                    </div>
                    <div className="item-right">
                      <div
                        className="item-right-reduce-mobile"
                        data-type="adult"
                      >
                        -
                      </div>
                      <div
                        className="item-right-quantity-mobile"
                        data-type="adult"
                        data-max={16}
                      >
                        1
                      </div>
                      <div
                        className="item-right-increase-mobile"
                        data-type="adult"
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="guest-item">
                    <div className="item-left">
                      <div className="item-left-header">Trẻ em</div>
                      <div className="item-left-des">Độ tuổi 2 - 12</div>
                    </div>
                    <div className="item-right">
                      <div
                        className="item-right-reduce-mobile"
                        data-type="child"
                      >
                        -
                      </div>
                      <div
                        className="item-right-quantity-mobile"
                        data-type="child"
                        data-max={15}
                      >
                        0
                      </div>
                      <div
                        className="item-right-increase-mobile"
                        data-type="child"
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="guest-item">
                    <div className="item-left">
                      <div className="item-left-header">Em bé</div>
                      <div className="item-left-des">Dưới 2 tuổi</div>
                    </div>
                    <div className="item-right">
                      <div
                        className="item-right-reduce-mobile"
                        data-type="baby"
                      >
                        -
                      </div>
                      <div
                        className="item-right-quantity-mobile"
                        data-type="baby"
                        data-max={5}
                      >
                        0
                      </div>
                      <div
                        className="item-right-increase-mobile"
                        data-type="baby"
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="guest-item">
                    <div className="item-left">
                      <div className="item-left-header">Thú cưng</div>
                      <div className="item-left-des" />
                    </div>
                    <div className="item-right">
                      <div className="item-right-reduce-mobile" data-type="pet">
                        -
                      </div>
                      <div
                        className="item-right-quantity-mobile"
                        data-type="pet"
                        data-max={5}
                      >
                        0
                      </div>
                      <div
                        className="item-right-increase-mobile"
                        data-type="pet"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <label
                  htmlFor="guest-menu-input-mobile"
                  className="guest-menu-close"
                >
                  Đóng
                </label>
              </div>
            </div>
          </div>
          <div className="nav__button">
            <NavLink
              className="nav__button--host"
              style={{ cursor: "default" }}
            >
              Trở thành chủ nhà
            </NavLink>
            <div className="nav__button--languages">
              <div className="nav__button--languages--button">
                <img src="/Group (1).png" alt="" />
              </div>
              <div className="nav__button--languages--button on-tablet-mobile">
                <img src="/Group (5).png" alt="" />
              </div>
              <div className="nav__button--languages--country">VN</div>
            </div>
            <div className="user-wrap">
              <div className="nav__button--user">
                <div className="nav__button--user--button">
                  <img src="/Frame (1).png" alt="" />
                </div>
                <div className="nav__button--user--icon">
                  <img src="/Frame.png" alt="" />
                </div>
              </div>
              <div className="user__overlay" />
              <div className="user__menu">
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
                <div
                  className="user__menu-become-host"
                  style={{ cursor: "default" }}
                >
                  Cho thuê chỗ ở
                </div>
                <NavLink
                  to="/help"
                  style={{ color: "inherit", textDecoration: "none" }}
                  className="user__menu-help"
                >
                  Trợ giúp
                </NavLink>
              </div>
            </div>
            <div className="nav__button--user on-tablet-mobile">
              <div className="nav__button--user--button">
                <img src="/Frame (8).png" alt="" />
              </div>
              <div className="nav__button--user--icon">
                <img src="/Frame (7).png" alt="" />
              </div>
            </div>
            <label className="menu-icon-index" htmlFor="mobile-menu">
              <img src="/list.svg" alt="" />
            </label>
            <input
              className="input-mobile-menu"
              type="checkbox"
              id="mobile-menu"
            />
            <label className="overlay-mobile" htmlFor="mobile-menu" />
            <div className="menu">
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
                <img src="/Frame (7).png" alt="" />
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
            </div>
          </div>
        </div>
        <div className="header__des">Khám phá địa điểm mới</div>
      </div>
      <div className="header__search hide-on-tablet-mobile">
        <div className="header__search--location">
          <div className="header__search--location--des">
            <div className="header__search--location--des--header">
              Địa điểm
            </div>
          </div>
          <div className="location-input-wrap-pc">
            <input
              type="search"
              className="header__search--location--input"
              placeholder="Điểm đến của bạn"
              autoComplete="off"
            />
            <div className="location-menu-pc-overlay" />
            <div className="location-menu">
              <div className="location-list">
                <div className="location-item">
                  <div className="location-item-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <div className="location-item-text">Hà Nội</div>
                </div>
                <div className="location-item">
                  <div className="location-item-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <div className="location-item-text">Hà Nội</div>
                </div>
                <div className="location-item">
                  <div className="location-item-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <div className="location-item-text">Hà Nội</div>
                </div>
                <div className="location-item">
                  <div className="location-item-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <div className="location-item-text">Hà Nội</div>
                </div>
                <div className="location-item">
                  <div className="location-item-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      fill="currentColor"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <div className="location-item-text">Hà Nội</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__search--day">
          <div className="day-start">
            <div className="header__search--day--des">
              <div className="header__search--day--des-header">Nhận phòng</div>
            </div>
            <div className="header__search--day--placeholder">
              <Flatpickr
                options={{
                  locale: Vietnamese,
                  dateFormat: "d-m-Y",
                  minDate: "today",
                  allowInput: true,
                  plugins: [new rangePlugin({ input: "#end" })],
                }}
                id="start"
                className="input-start"
                type="text"
                placeholder="Thêm ngày"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="day-end">
            <div className="header__search--day--des">
              <div className="header__search--day--des-header">Trả phòng</div>
            </div>
            <div className="header__search--day--placeholder">
              <input
                id="end"
                className="input-end"
                type="text"
                placeholder="Thêm ngày"
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <div className="people-wrap-pc">
          <input type="checkbox" name="" id="guest-menu-input-pc" />
          <label
            htmlFor="guest-menu-input-pc"
            className="header__search--people-pc"
          >
            <div className="header__search--people--des">
              <div className="header__search--people--des--header">
                Số lượng
              </div>
              <div className="header__search--people--des-icon">
                <img src="/chevron_forward.png" alt="" />
              </div>
            </div>
            <div className="header__search--people--placeholder-pc">
              <div className="guest-adult-child" data-max={16}>
                1 khách
              </div>
              <div className="guest-baby">, 1 em bé</div>
              <div className="guest-pet">, 1 thú cưng</div>
            </div>
          </label>
          <label
            className="guest-menu-overlay-pc"
            htmlFor="guest-menu-input-pc"
          />
          <div className="guest-menu-pc">
            <div className="guest-list">
              <div className="guest-item">
                <div className="item-left">
                  <div className="item-left-header">Người lớn</div>
                  <div className="item-left-des">Từ 13 tuổi trở lên</div>
                </div>
                <div className="item-right">
                  <div className="item-right-reduce" data-type="adult">
                    -
                  </div>
                  <div
                    className="item-right-quantity"
                    data-type="adult"
                    data-max={16}
                  >
                    1
                  </div>
                  <div className="item-right-increase" data-type="adult">
                    +
                  </div>
                </div>
              </div>
              <div className="guest-item">
                <div className="item-left">
                  <div className="item-left-header">Trẻ em</div>
                  <div className="item-left-des">Độ tuổi 2 - 12</div>
                </div>
                <div className="item-right">
                  <div className="item-right-reduce" data-type="child">
                    -
                  </div>
                  <div
                    className="item-right-quantity"
                    data-type="child"
                    data-max={15}
                  >
                    0
                  </div>
                  <div className="item-right-increase" data-type="child">
                    +
                  </div>
                </div>
              </div>
              <div className="guest-item">
                <div className="item-left">
                  <div className="item-left-header">Em bé</div>
                  <div className="item-left-des">Dưới 2 tuổi</div>
                </div>
                <div className="item-right">
                  <div className="item-right-reduce" data-type="baby">
                    -
                  </div>
                  <div
                    className="item-right-quantity"
                    data-type="baby"
                    data-max={5}
                  >
                    0
                  </div>
                  <div className="item-right-increase" data-type="baby">
                    +
                  </div>
                </div>
              </div>
              <div className="guest-item">
                <div className="item-left">
                  <div className="item-left-header">Thú cưng</div>
                  <div className="item-left-des" />
                </div>
                <div className="item-right">
                  <div className="item-right-reduce" data-type="pet">
                    -
                  </div>
                  <div
                    className="item-right-quantity"
                    data-type="pet"
                    data-max={5}
                  >
                    0
                  </div>
                  <div className="item-right-increase" data-type="pet">
                    +
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="guest-menu-input-pc" className="guest-menu-close">
              Đóng
            </label>
          </div>
        </div>
        <button className="btn header__search--button">Khám phá ngay</button>
      </div>
    </section>
  );
}
