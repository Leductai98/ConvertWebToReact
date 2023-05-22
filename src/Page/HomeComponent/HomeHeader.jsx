import React, { useEffect, useState, useContext } from "react";
import { HomeContext } from "./HomeContext&Reducer";
import { actions } from "./HomeContext&Reducer";
import { NavLink, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr, {
  onChange,
  onDayCreate,
  onValueUpdate,
} from "react-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import { Vietnamese } from "flatpickr/dist/l10n/vn.js";
import UserMenuPc from "./UserMenuPc";
import UserMenuMobile from "./UserMenuMobile";

const urlLocation = `https://api-sandy-zeta.vercel.app/location`;
const getLocation = async () => {
  const res = await fetch(urlLocation);
  const data = res.json();
  return data;
};
const promise = getLocation();
export default function HomeHeader({ filterInfo, setFilterInfo }) {
  document.title = "Nhà nghỉ dưỡng & Căn hộ cho thuê - Tai";
  const [state, dispatch] = useContext(HomeContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { roomList, guestMenu, dayStart, dayEnd, roomListAfterFilter } = state;
  const {
    guestAdultChildMax,
    guestBabyMax,
    guestPetMax,
    guestAdult,
    guestChild,
    guestBaby,
    guestPet,
  } = guestMenu;

  const navigate = useNavigate();
  const [location, setLocation] = useState([]);
  const [userLogin, setUserLogin] = useState(
    JSON.parse(localStorage.getItem("login"))
  );
  const [userMenuDisplay, setUserMenuDisplay] = useState(false);
  const [userMenuMobileDisplay, setUserMenuMobileDisplay] = useState(false);
  const [locationDisplay, setLocationDisplay] = useState({
    pc: false,
    mobile: false,
  });
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
  const handleLocationDisplay = (e) => {
    if (e.target.className === "header__search--location--input") {
      setLocationDisplay({ ...locationDisplay, pc: !locationDisplay.pc });
    }
    if (e.target.className === "location-menu-pc-overlay") {
      setLocationDisplay({ ...locationDisplay, pc: !locationDisplay.pc });
    }
    if (e.target.className == "location-menu-pc-overlay active") {
      setLocationDisplay({ ...locationDisplay, pc: !locationDisplay.pc });
    }
    if (e.target.className === "input-location-mobile") {
      setLocationDisplay({
        ...locationDisplay,
        mobile: !locationDisplay.mobile,
      });
    }
    if (e.target.className === "location-menu-overlay-mobile active") {
      setLocationDisplay({
        ...locationDisplay,
        mobile: !locationDisplay.mobile,
      });
    }
    if (
      e.target.className === "location-item" ||
      e.target.className === "location-item-icon" ||
      e.target.className === "location-item-text"
    ) {
      setLocationDisplay({
        pc: false,
        mobile: false,
      });
    }
  };

  useEffect(() => {
    promise.then((data) => {
      setLocation(data);
    });
  }, [promise]);
  const locationList = location.filter((item) =>
    filterInfo.location !== ""
      ? item.name
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(filterInfo.location.toLowerCase().split(" ").join(""))
      : item
  );

  const handleFilterRoom = () => {
    let result = roomList;
    if (filterInfo.location != "") {
      result = roomList.filter((item) => item.location === filterInfo.location);
    }
    if (dayStart !== 0 && dayEnd !== 0) {
      result = result.filter(
        (item) =>
          Date.parse(item.start) <= Date.parse(dayStart) &&
          Date.parse(item.end) >= Date.parse(dayEnd)
      );
    }
    result = result.filter(
      (item) => parseInt(item.guest) >= guestAdult + guestChild
    );
    searchParams.delete(
      "location",
      "daystart",
      "dayend",
      "guestadult",
      "guestchild",
      "guestbaby",
      "guestpet"
    );
    setSearchParams({
      location: filterInfo.location,
      daystart: dayStart,
      dayend: dayEnd,
      guestadult: guestAdult,
      guestchild: guestChild,
      guestbaby: guestBaby,
      guestpet: guestPet,
    });

    dispatch(actions.setRoomListAfterFilter(result));
    dispatch(actions.setRoomListAfterFilterDetail(result));
    dispatch(actions.setDefault());
  };

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
            <div
              className="search-icon"
              onClick={() => {
                handleFilterRoom();
              }}
            >
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
                      onFocus={(e) => {
                        handleLocationDisplay(e);
                      }}
                      onChange={(e) => {
                        setFilterInfo({
                          ...filterInfo,
                          location: e.target.value,
                        });
                      }}
                      value={filterInfo.location}
                    />
                    <div
                      className={`location-menu-overlay-mobile ${
                        locationDisplay.mobile ? "active" : ""
                      }`}
                      onClick={(e) => {
                        handleLocationDisplay(e);
                      }}
                    />
                    <div
                      className={`location-menu ${
                        locationDisplay.mobile ? "active" : ""
                      }`}
                    >
                      <div className="location-list">
                        {locationList.map((item) => (
                          <div
                            className="location-item"
                            key={item.id}
                            onClick={(e) => {
                              handleLocationDisplay(e);
                              setFilterInfo({
                                ...filterInfo,
                                location: item.name,
                              });
                            }}
                          >
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
                            <div className="location-item-text">
                              {item.name}
                            </div>
                          </div>
                        ))}
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
                onChange={(e) => {
                  if (e.length > 1) {
                    dispatch(
                      actions.setDayStart(e[0].toLocaleDateString("fr-CA"))
                    );
                    dispatch(
                      actions.setDayEnd(e[1].toLocaleDateString("fr-CA"))
                    );
                  }
                }}
              />
            </div>
            <div className="people-wrap">
              <label
                htmlFor="guest-menu-input-mobile"
                className="header__search--people"
                id="header__search--people-pc"
              >
                <div className="header__search--people--placeholder-mobile">
                  <div className="guest-adult-child-mobile">
                    {guestAdult + guestChild} khách
                  </div>
                  <div
                    className={`guest-baby-mobile ${
                      guestBaby > 0 ? "active" : ""
                    }`}
                  >
                    , {guestBaby} em bé
                  </div>
                  <div
                    className={`guest-pet-mobile ${
                      guestPet > 0 ? "active" : ""
                    }`}
                  >
                    , {guestPet} thú cưng
                  </div>
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
                        className={`item-right-reduce-mobile ${
                          guestAdult > 1 ? "active" : ""
                        }`}
                        data-type="adult"
                        onClick={() => {
                          if (guestAdult === 1) {
                            return;
                          } else {
                            dispatch(actions.setAdult(guestAdult - 1));
                          }
                        }}
                      >
                        -
                      </div>
                      <div
                        className="item-right-quantity-mobile"
                        data-type="adult"
                        data-max={16}
                      >
                        {guestAdult}
                      </div>
                      <div
                        className={`item-right-increase-mobile ${
                          guestAdult + guestChild >= guestAdultChildMax
                            ? "disabled"
                            : ""
                        }`}
                        data-type="adult"
                        onClick={() => {
                          if (guestAdult + guestChild >= guestAdultChildMax) {
                            return;
                          } else {
                            dispatch(actions.setAdult(guestAdult + 1));
                          }
                        }}
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
                        className={`item-right-reduce-mobile ${
                          guestChild > 0 ? "active" : ""
                        }`}
                        data-type="child"
                        onClick={() => {
                          if (guestChild <= 0) {
                            return;
                          } else {
                            dispatch(actions.setChild(guestChild - 1));
                          }
                        }}
                      >
                        -
                      </div>
                      <div
                        className="item-right-quantity-mobile"
                        data-type="child"
                        data-max={15}
                      >
                        {guestChild}
                      </div>
                      <div
                        className={`item-right-increase-mobile ${
                          guestAdult + guestChild >= guestAdultChildMax
                            ? "disabled"
                            : ""
                        }`}
                        data-type="child"
                        onClick={() => {
                          if (guestAdult + guestChild >= guestAdultChildMax) {
                            return;
                          } else {
                            dispatch(actions.setChild(guestChild + 1));
                          }
                        }}
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
                        className={`item-right-reduce-mobile ${
                          guestBaby > 0 ? "active" : ""
                        }`}
                        data-type="baby"
                        onClick={() => {
                          if (guestBaby <= 0) {
                            return;
                          } else {
                            dispatch(actions.setBaby(guestBaby - 1));
                          }
                        }}
                      >
                        -
                      </div>
                      <div
                        className="item-right-quantity-mobile"
                        data-type="baby"
                        data-max={5}
                      >
                        {guestBaby}
                      </div>
                      <div
                        className={`item-right-increase-mobile ${
                          guestBaby >= guestBabyMax ? "disabled" : ""
                        }`}
                        data-type="baby"
                        onClick={() => {
                          if (guestBaby >= guestBabyMax) {
                            return;
                          } else {
                            dispatch(actions.setBaby(guestBaby + 1));
                          }
                        }}
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
                      <div
                        className={`item-right-reduce-mobile ${
                          guestPet > 0 ? "active" : ""
                        }`}
                        data-type="pet"
                        onClick={() => {
                          if (guestPet <= 0) {
                            return;
                          } else {
                            dispatch(actions.setPet(guestPet - 1));
                          }
                        }}
                      >
                        -
                      </div>
                      <div
                        className="item-right-quantity-mobile"
                        data-type="pet"
                        data-max={5}
                      >
                        {guestPet}
                      </div>
                      <div
                        className={`item-right-increase-mobile ${
                          guestPet >= guestPetMax ? "disabled" : ""
                        }`}
                        data-type="pet"
                        onClick={() => {
                          if (guestPet >= guestPetMax) {
                            return;
                          } else {
                            dispatch(actions.setPet(guestPet + 1));
                          }
                        }}
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
            <div className="user-wrap">
              <div
                className={`nav__button--user ${
                  userMenuDisplay ? "active" : ""
                }`}
                onClick={() => {
                  handleUserMenuDisplay();
                }}
              >
                <div className="nav__button--user--icon">
                  {userLogin !== null ? (
                    <img
                      src="/starscourge-radahn_elden-ring_bandai-namco.jpg"
                      alt=""
                    />
                  ) : (
                    <img src="/user.png" alt="" />
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
            <div className="nav__button--user on-tablet-mobile">
              <div className="nav__button--user--button">
                <img src="/Frame (8).png" alt="" />
              </div>
              <div className="nav__button--user--icon">
                <img src="/Frame (7).png" alt="" />
              </div>
            </div>
            <label
              className="menu-icon-index"
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
              onChange={(e) => {
                setFilterInfo({ ...filterInfo, location: e.target.value });
              }}
              onFocus={(e) => {
                handleLocationDisplay(e);
              }}
              value={filterInfo.location}
            />
            <div
              className={`location-menu-pc-overlay ${
                locationDisplay.pc ? "active" : ""
              }`}
              onClick={(e) => {
                handleLocationDisplay(e);
              }}
            />
            <div
              className={`location-menu ${locationDisplay.pc ? "active" : ""}`}
            >
              <div className="location-list">
                {locationList.map((item) => (
                  <div
                    className="location-item"
                    key={item.id}
                    onClick={(e) => {
                      handleLocationDisplay(e);
                      setFilterInfo({ ...filterInfo, location: item.name });
                    }}
                  >
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
                    <div className="location-item-text">{item.name}</div>
                  </div>
                ))}
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
                onChange={(e) => {
                  if (e.length > 1) {
                    dispatch(
                      actions.setDayStart(e[0].toLocaleDateString("fr-CA"))
                    );

                    dispatch(
                      actions.setDayEnd(e[1].toLocaleDateString("fr-CA"))
                    );
                  }
                }}
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
                {guestAdult + guestChild} khách
              </div>
              <div className={`guest-baby ${guestBaby > 0 ? "active" : ""}`}>
                , {guestBaby} em bé
              </div>
              <div className={`guest-pet ${guestPet > 0 ? "active" : ""}`}>
                , {guestPet} thú cưng
              </div>
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
                  <div
                    className={`item-right-reduce ${
                      guestAdult > 1 ? "active" : ""
                    }`}
                    data-type="adult"
                    onClick={() => {
                      if (guestAdult === 1) {
                        return;
                      } else {
                        dispatch(actions.setAdult(guestAdult - 1));
                      }
                    }}
                  >
                    -
                  </div>
                  <div
                    className="item-right-quantity"
                    data-type="adult"
                    data-max={16}
                  >
                    {guestAdult}
                  </div>
                  <div
                    className={`item-right-increase ${
                      guestAdult + guestChild >= guestAdultChildMax
                        ? "disabled"
                        : ""
                    }`}
                    data-type="adult"
                    onClick={() => {
                      if (guestAdult + guestChild >= guestAdultChildMax) {
                        return;
                      } else {
                        dispatch(actions.setAdult(guestAdult + 1));
                      }
                    }}
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
                    className={`item-right-reduce ${
                      guestChild > 0 ? "active" : ""
                    }`}
                    data-type="child"
                    onClick={() => {
                      if (guestChild <= 0) {
                        return;
                      } else {
                        dispatch(actions.setChild(guestChild - 1));
                      }
                    }}
                  >
                    -
                  </div>
                  <div
                    className="item-right-quantity"
                    data-type="child"
                    data-max={15}
                  >
                    {guestChild}
                  </div>
                  <div
                    className={`item-right-increase ${
                      guestAdult + guestChild >= guestAdultChildMax
                        ? "disabled"
                        : ""
                    }`}
                    data-type="child"
                    onClick={() => {
                      if (guestAdult + guestChild >= guestAdultChildMax) {
                        return;
                      } else {
                        dispatch(actions.setChild(guestChild + 1));
                      }
                    }}
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
                    className={`item-right-reduce ${
                      guestBaby > 0 ? "active" : ""
                    }`}
                    data-type="baby"
                    onClick={() => {
                      if (guestBaby <= 0) {
                        return;
                      } else {
                        dispatch(actions.setBaby(guestBaby - 1));
                      }
                    }}
                  >
                    -
                  </div>
                  <div
                    className="item-right-quantity"
                    data-type="baby"
                    data-max={5}
                  >
                    {guestBaby}
                  </div>
                  <div
                    className={`item-right-increase ${
                      guestBaby >= guestBabyMax ? "disabled" : ""
                    }`}
                    data-type="baby"
                    onClick={() => {
                      if (guestBaby >= guestBabyMax) {
                        return;
                      } else {
                        dispatch(actions.setBaby(guestBaby + 1));
                      }
                    }}
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
                  <div
                    className={`item-right-reduce ${
                      guestPet > 0 ? "active" : ""
                    }`}
                    data-type="pet"
                    onClick={() => {
                      if (guestPet <= 0) {
                        return;
                      } else {
                        dispatch(actions.setPet(guestPet - 1));
                      }
                    }}
                  >
                    -
                  </div>
                  <div
                    className="item-right-quantity"
                    data-type="pet"
                    data-max={5}
                  >
                    {guestPet}
                  </div>
                  <div
                    className={`item-right-increase ${
                      guestPet >= guestPetMax ? "disabled" : ""
                    }`}
                    data-type="pet"
                    onClick={() => {
                      if (guestPet >= guestPetMax) {
                        return;
                      } else {
                        dispatch(actions.setPet(guestPet + 1));
                      }
                    }}
                  >
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
        <button
          className="header__search--button"
          onMouseDown={(e) => {
            e.target.style = "scale:0.95";
          }}
          onMouseUp={(e) => {
            e.target.style = "scale:1";
          }}
          onClick={(e) => {
            e.preventDefault();
            handleFilterRoom();
          }}
        >
          Khám phá ngay
        </button>
      </div>
    </section>
  );
}
