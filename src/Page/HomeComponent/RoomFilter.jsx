import React, { useContext } from "react";
import { HomeContext } from "./HomeContext&Reducer";
import { actions } from "./HomeContext&Reducer";
export default function RoomFilter() {
  const [state, dispatch] = useContext(HomeContext);
  const { rangePrice } = state;
  const { minLength, minPrice, maxPrice, progressLeft, progressRight } =
    rangePrice;

  return (
    <div className="booking-filter-wrap">
      <label
        htmlFor="input-booking-room-filter"
        className="booking__room--filter"
      >
        <img src="Vector (5).png" alt="" />
        <p>Bộ lọc</p>
      </label>
      <input type="checkbox" name="" id="input-booking-room-filter" />
      <label
        htmlFor="input-booking-room-filter"
        className="booking-filter-overlay"
      />
      <div className="booking-filter-menu-wrap">
        <div className="booking-filter-menu">
          <label
            htmlFor="input-booking-room-filter"
            className="cover-detail-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </label>
          <div className="booking-filter-menu-header">Bộ lọc</div>
          <div className="booking-filter-list">
            <div className="booking-filter-item">
              <div className="booking-filter-item-header">Khoảng giá</div>
              <div className="booking-filter-item-price">
                <div className="range-price">
                  <div
                    className={`progress ${
                      minPrice < 500000 || maxPrice > 2000000 ? "disabled" : ""
                    }`}
                    style={{
                      left: `${progressLeft}%`,
                      right: `${progressRight}%`,
                    }}
                  />
                </div>
                <div className="range-input">
                  <input
                    type="range"
                    className="range-min"
                    min={500000}
                    max={2000000}
                    value={minPrice}
                    step={5000}
                    onChange={(e) => {
                      let result = e.target.value;
                      if (maxPrice - result < minLength) {
                        result = maxPrice - minLength;
                      }
                      dispatch(actions.setMinPrice(result));
                    }}
                  />
                  <input
                    type="range"
                    className="range-max"
                    min={500000}
                    max={2000000}
                    value={maxPrice}
                    step={5000}
                    onChange={(e) => {
                      let result = e.target.value;
                      if (e.target.value - minPrice < minLength) {
                        result = minPrice + minLength;
                      }
                      dispatch(actions.setMaxPrice(result));
                    }}
                  />
                </div>
                <div className="number-price">
                  <div className="min-price">
                    <div className="min-price-text">Giá tối thiểu</div>
                    <div className="number-wrap">
                      <span>đ</span>
                      <input
                        type="number"
                        className="input-min"
                        value={minPrice}
                        onChange={(e) => {
                          let result = e.target.value;

                          dispatch(actions.setMinPrice(result));
                        }}
                      />
                    </div>
                  </div>
                  <div className="max-price">
                    <div className="max-price-text">Giá tối đa</div>
                    <div className="number-wrap">
                      <span>đ</span>
                      <input
                        type="number"
                        className="input-max"
                        value={maxPrice}
                        onChange={(e) => {
                          let result = e.target.value;

                          dispatch(actions.setMaxPrice(result));
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-filter-item">
              <div className="booking-filter-item-header">Loại nơi ở</div>
              <div className="booking-filter-item-type-list">
                <input
                  id="entire-house"
                  type="checkbox"
                  className="type-input"
                />
                <label htmlFor="entire-house" className="type-item">
                  <div className="checkbox-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="type-text">
                    <div className="type-header">Toàn bộ nhà</div>
                    <div className="type-des">
                      Toàn bộ nơi ở dành riêng cho bạn
                    </div>
                  </div>
                </label>
                <input
                  id="private-house"
                  type="checkbox"
                  className="type-input"
                />
                <label htmlFor="private-house" className="type-item">
                  <div className="checkbox-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="type-text">
                    <div className="type-header">Phòng riêng</div>
                    <div className="type-des">
                      Phòng riêng của bạn trong một ngôi nhà hoặc khách sạn,
                      cùng với không gian sinh hoạt chung
                    </div>
                  </div>
                </label>
                <input
                  id="commom-house"
                  type="checkbox"
                  className="type-input"
                />
                <label htmlFor="commom-house" className="type-item">
                  <div className="checkbox-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="type-text">
                    <div className="type-header">Phòng chung</div>
                    <div className="type-des">
                      Không gian để ngủ và các khu vực có thể sinh hoạt chung
                      với người khác
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="booking-filter-item">
              <div className="booking-filter-item-header">
                Phòng và phòng ngủ
              </div>
              <div className="booking-filter-item-type-list room-count">
                <div className="type-item">
                  <div className="type-item-header">Phòng ngủ</div>
                  <div className="type-item-des">
                    <input
                      type="radio"
                      name="sleeproom-count"
                      className="sleeproom-count"
                      id="sleep-0"
                      defaultChecked=""
                    />
                    <label className="label-sleep any" htmlFor="sleep-0">
                      Bất kì
                    </label>
                    <input
                      type="radio"
                      name="sleeproom-count"
                      className="sleeproom-count"
                      id="sleep-1"
                    />
                    <label className="label-sleep" htmlFor="sleep-1">
                      1
                    </label>
                    <input
                      type="radio"
                      name="sleeproom-count"
                      className="sleeproom-count"
                      id="sleep-2"
                    />
                    <label className="label-sleep" htmlFor="sleep-2">
                      2
                    </label>
                    <input
                      type="radio"
                      name="sleeproom-count"
                      className="sleeproom-count"
                      id="sleep-3"
                    />
                    <label className="label-sleep" htmlFor="sleep-3">
                      3
                    </label>
                    <input
                      type="radio"
                      name="sleeproom-count"
                      className="sleeproom-count"
                      id="sleep-4"
                    />
                    <label className="label-sleep" htmlFor="sleep-4">
                      4
                    </label>
                    <input
                      type="radio"
                      name="sleeproom-count"
                      className="sleeproom-count"
                      id="sleep-5"
                    />
                    <label className="label-sleep" htmlFor="sleep-5">
                      5
                    </label>
                    <input
                      type="radio"
                      name="sleeproom-count"
                      className="sleeproom-count"
                      id="sleep-6"
                    />
                    <label className="label-sleep" htmlFor="sleep-6">
                      6
                    </label>
                    <input
                      type="radio"
                      name="sleeproom-count"
                      className="sleeproom-count"
                      id="sleep-7"
                    />
                    <label className="label-sleep" htmlFor="sleep-7">
                      7
                    </label>
                    <input
                      type="radio"
                      name="sleeproom-count"
                      className="sleeproom-count"
                      id="sleep-8"
                    />
                    <label className="label-sleep" htmlFor="sleep-8">
                      8+
                    </label>
                  </div>
                </div>
                <div className="type-item">
                  <div className="type-item-header">Giường</div>
                  <div className="type-item-des">
                    <input
                      type="radio"
                      name="bedroom-count"
                      className="sleeproom-count"
                      id="bed-0"
                      defaultChecked=""
                    />
                    <label className="label-sleep any" htmlFor="bed-0">
                      Bất kì
                    </label>
                    <input
                      type="radio"
                      name="bedroom-count"
                      className="sleeproom-count"
                      id="bed-1"
                    />
                    <label className="label-sleep" htmlFor="bed-1">
                      1
                    </label>
                    <input
                      type="radio"
                      name="bedroom-count"
                      className="sleeproom-count"
                      id="bed-2"
                    />
                    <label className="label-sleep" htmlFor="bed-2">
                      2
                    </label>
                    <input
                      type="radio"
                      name="bedroom-count"
                      className="sleeproom-count"
                      id="bed-3"
                    />
                    <label className="label-sleep" htmlFor="bed-3">
                      3
                    </label>
                    <input
                      type="radio"
                      name="bedroom-count"
                      className="sleeproom-count"
                      id="bed-4"
                    />
                    <label className="label-sleep" htmlFor="bed-4">
                      4
                    </label>
                    <input
                      type="radio"
                      name="bedroom-count"
                      className="sleeproom-count"
                      id="bed-5"
                    />
                    <label className="label-sleep" htmlFor="bed-5">
                      5
                    </label>
                    <input
                      type="radio"
                      name="bedroom-count"
                      className="sleeproom-count"
                      id="bed-6"
                    />
                    <label className="label-sleep" htmlFor="bed-6">
                      6
                    </label>
                    <input
                      type="radio"
                      name="bedroom-count"
                      className="sleeproom-count"
                      id="bed-7"
                    />
                    <label className="label-sleep" htmlFor="bed-7">
                      7
                    </label>
                    <input
                      type="radio"
                      name="bedroom-count"
                      className="sleeproom-count"
                      id="bed-8"
                    />
                    <label className="label-sleep" htmlFor="bed-8">
                      8+
                    </label>
                  </div>
                </div>
                <div className="type-item">
                  <div className="type-item-header">Phòng tắm</div>
                  <div className="type-item-des">
                    <input
                      type="radio"
                      name="bathroom-count"
                      className="sleeproom-count"
                      id="bath-0"
                      defaultChecked=""
                    />
                    <label className="label-sleep any" htmlFor="bath-0">
                      Bất kì
                    </label>
                    <input
                      type="radio"
                      name="bathroom-count"
                      className="sleeproom-count"
                      id="bath-1"
                    />
                    <label className="label-sleep" htmlFor="bath-1">
                      1
                    </label>
                    <input
                      type="radio"
                      name="bathroom-count"
                      className="sleeproom-count"
                      id="bath-2"
                    />
                    <label className="label-sleep" htmlFor="bath-2">
                      2
                    </label>
                    <input
                      type="radio"
                      name="bathroom-count"
                      className="sleeproom-count"
                      id="bath-3"
                    />
                    <label className="label-sleep" htmlFor="bath-3">
                      3
                    </label>
                    <input
                      type="radio"
                      name="bathroom-count"
                      className="sleeproom-count"
                      id="bath-4"
                    />
                    <label className="label-sleep" htmlFor="bath-4">
                      4
                    </label>
                    <input
                      type="radio"
                      name="bathroom-count"
                      className="sleeproom-count"
                      id="bath-5"
                    />
                    <label className="label-sleep" htmlFor="bath-5">
                      5
                    </label>
                    <input
                      type="radio"
                      name="bathroom-count"
                      className="sleeproom-count"
                      id="bath-6"
                    />
                    <label className="label-sleep" htmlFor="bath-6">
                      6
                    </label>
                    <input
                      type="radio"
                      name="bathroom-count"
                      className="sleeproom-count"
                      id="bath-7"
                    />
                    <label className="label-sleep" htmlFor="bath-7">
                      7
                    </label>
                    <input
                      type="radio"
                      name="bathroom-count"
                      className="sleeproom-count"
                      id="bath-8"
                    />
                    <label className="label-sleep" htmlFor="bath-8">
                      8+
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-filter-item">
              <div className="booking-filter-item-header">Loại nhà/phòng</div>
              <div className="booking-filter-item-type-list house-type">
                <input type="checkbox" name="" id="home" />
                <label htmlFor="home" className="house-item">
                  <div className="house-item-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={35}
                      height={35}
                      fill="currentColor"
                      className="bi bi-house-door"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                    </svg>
                  </div>
                  <div className="house-item-name">Nhà</div>
                </label>
                <input type="checkbox" id="apartment" />
                <label htmlFor="apartment" className="house-item">
                  <div className="house-item-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={35}
                      height={35}
                      fill="currentColor"
                      className="bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                    </svg>
                  </div>
                  <div className="house-item-name">Căn hộ</div>
                </label>
                <input type="checkbox" id="guest-room" />
                <label htmlFor="guest-room" className="house-item">
                  <div className="house-item-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={35}
                      height={35}
                      fill="currentColor"
                      className="bi bi-houses"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z" />
                    </svg>
                  </div>
                  <div className="house-item-name">Nhà khách</div>
                </label>
                <input type="checkbox" id="hotel" />
                <label htmlFor="hotel" className="house-item">
                  <div className="house-item-logo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={35}
                      height={35}
                      fill="currentColor"
                      className="bi bi-buildings"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                      <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                    </svg>
                  </div>
                  <div className="house-item-name">Khách sạn</div>
                </label>
              </div>
            </div>
            <div className="booking-filter-item">
              <div className="booking-filter-item-header">
                Đồ dùng thiết yếu
              </div>
              <div className="booking-filter-item-type-list things">
                <input id="wifi" type="checkbox" className="type-input" />
                <label htmlFor="wifi" className="type-item">
                  <div className="checkbox-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="type-text">
                    <div className="type-header">Wi-fi</div>
                  </div>
                </label>
                <input id="stove" type="checkbox" className="type-input" />
                <label htmlFor="stove" className="type-item">
                  <div className="checkbox-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="type-text">
                    <div className="type-header">Bếp</div>
                  </div>
                </label>
                <input id="washer" type="checkbox" className="type-input" />
                <label htmlFor="washer" className="type-item">
                  <div className="checkbox-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="type-text">
                    <div className="type-header">Máy giặt</div>
                  </div>
                </label>
                <input id="dryer" type="checkbox" className="type-input" />
                <label htmlFor="dryer" className="type-item">
                  <div className="checkbox-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="type-text">
                    <div className="type-header">Máy sấy quần áo</div>
                  </div>
                </label>
                <input
                  id="air-conditioner"
                  type="checkbox"
                  className="type-input"
                />
                <label htmlFor="air-conditioner" className="type-item">
                  <div className="checkbox-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="type-text">
                    <div className="type-header">Điều hòa nhiệt độ</div>
                  </div>
                </label>
                <input
                  id="heating-system"
                  type="checkbox"
                  className="type-input"
                />
                <label htmlFor="heating-system" className="type-item">
                  <div className="checkbox-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-check2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div className="type-text">
                    <div className="type-header">Hệ thống sưởi</div>
                  </div>
                </label>
              </div>
            </div>
            <div className="booking-filter-item" style={{ display: "none" }}>
              <div className="booking-filter-item-header">
                Tùy chọn đặt phòng
              </div>
              <div className="booking-filter-item-option-list">
                <div className="option-item">
                  <div className="option-text">
                    <div className="option-header">Đặt ngay</div>
                    <div className="option-des">
                      Nhà/phòng cho thuê bạn có thể đặt mà không cần chờ chủ nhà
                      chấp thuận
                    </div>
                  </div>
                  <input type="checkbox" id="book-now" />
                  <label htmlFor="book-now" className="option-button">
                    <div className="button-switch">
                      <div className="switch-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="currentColor"
                          className="bi bi-check2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="option-item">
                  <div className="option-text">
                    <div className="option-header">Tự nhận phòng</div>
                    <div className="option-des">
                      Dễ dàng vào chỗ ở sau khi bạn đến
                    </div>
                  </div>
                  <input type="checkbox" id="seft-checkin" />
                  <label htmlFor="seft-checkin" className="option-button">
                    <div className="button-switch">
                      <div className="switch-circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="currentColor"
                          className="bi bi-check2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="input-booking-room-filter"
            className="booking-filter-button"
          >
            Tìm kiếm
          </label>
        </div>
      </div>
    </div>
  );
}
