import React, { useContext } from "react";
import { PaymentContext } from "./PaymentContext&Reducer";
import { actions } from "./PaymentContext&Reducer";
import Flatpickr from "react-flatpickr";
import { Vietnamese } from "flatpickr/dist/l10n/vn.js";
export default function PaymentComfirm() {
  const data = JSON.parse(localStorage.getItem("roomOrder"));

  let today = new Date().toISOString().slice(0, 10);
  const [state, dispatch] = useContext(PaymentContext);

  const { dayStart, dayEnd, guestMenu, totalPrice, payWay } = state;
  const {
    guestAdultChildMax,
    guestAdult,
    guestChild,
    guestBabyMax,
    guestBaby,
    guestPetMax,
    guestPet,
  } = guestMenu;
  return (
    <div className="confirm-payment">
      <div className="confirm-payment-header">Xác nhận và thanh toán</div>
      <div className="confirm-payment-content">
        <div className="content-header">Chuyến đi của bạn</div>
        <div className="content-list">
          <div className="content-item">
            <div className="item-text">
              <div className="item-header">Ngày</div>
              <div className="item-des">
                {dayStart} đến {dayEnd}
              </div>
            </div>
            <div className="item-eidt">
              <label htmlFor="date">Chỉnh sửa</label>
              <Flatpickr
                options={{
                  locale: Vietnamese,
                  dateFormat: "d-m-Y",
                  showMonths: 1,
                  mode: "range",
                  allowInput: true,
                  minDate:
                    Date.parse(data.validDayStart) >= Date.parse(today)
                      ? data.validDayStart.split("-").reverse().join("-")
                      : today.split("-").reverse().join("-"),
                  enable: [
                    {
                      from: data.validDayStart.split("-").reverse().join("-"),
                      to: data.validDayEnd.split("-").reverse().join("-"),
                    },
                  ],
                }}
                id="date"
                type="text"
                value={`${dayStart} đến ${dayEnd}`}
                onChange={(e) => {
                  if (e.length > 1) {
                    dispatch(
                      actions.setDayStart(e[0].toLocaleDateString("es-CL"))
                    );
                    dispatch(
                      actions.setDayEnd(e[1].toLocaleDateString("es-CL"))
                    );
                    dispatch(
                      actions.setTotalPrice(
                        ((Date.parse(e[1]) - Date.parse(e[0])) /
                          (3600 * 24 * 1000)) *
                          Number(
                            JSON.parse(localStorage.getItem("roomOrder"))
                              .infoPrice.split(",")
                              .join("")
                          ) *
                          1.1 +
                          200000
                      )
                    );
                  }
                }}
              />
            </div>
          </div>
          <div className="content-item">
            <div className="item-text">
              <div className="item-header">Khách</div>
              <div className="item-des">
                <span className="guest-adult-child">
                  {" "}
                  {guestAdult + guestChild} khách{" "}
                </span>
                <span className={`guest-baby ${guestBaby > 0 ? "active" : ""}`}>
                  , {guestBaby} em bé
                </span>
                <span className={`guest-pet ${guestPet > 0 ? "active" : ""}`}>
                  , {guestPet} thú cưng
                </span>
              </div>
            </div>
            <div className="item-eidt">
              <label htmlFor="guest-menu-input">Chỉnh sửa</label>
              <div className="guest-wrap">
                <input type="checkbox" name="" id="guest-menu-input" />
                <label
                  className="guest-menu-overlay"
                  htmlFor="guest-menu-input"
                />
                <div className="guest-menu">
                  <div className="guest-menu-header">Khách</div>
                  <div className="guest-menu-des">
                    Chỗ ở này cho phép tối đa 4 khách không tính em bé
                  </div>
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
                          data-max={5}
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
                          data-max={4}
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
                  <div className="guest-close-wrap">
                    <label
                      htmlFor="guest-menu-input"
                      className="guest-menu-close"
                    >
                      Lưu lại
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-way">
        <div className="payment-way-header">Chọn cách thanh toán</div>
        <div className="payment-list">
          <input
            type="radio"
            name="payment"
            id="all"
            checked={payWay === "Trả toàn bộ" ? true : false}
            onChange={() => {
              dispatch(actions.setPayWay("Trả toàn bộ"));
            }}
          />
          <div className="payment-item">
            <div className="payment-item-first">
              <div className="payment-item-name">Trả toàn bộ</div>
              <div className="payment-item-input">
                <div className="payment-item-cost">
                  đ {totalPrice.toLocaleString()}
                </div>
                <label htmlFor="all" className="payment-item-check">
                  <div className="payment-item-check-circle" />
                </label>
              </div>
            </div>
            <div className="payment-item-second">
              Thanh toán toàn bộ số tiền (đ {totalPrice.toLocaleString()}) ngay
              bây giờ và thế là xong.
            </div>
          </div>
          <input
            type="radio"
            name="payment"
            id="half"
            checked={payWay === "Trả một phần" ? true : false}
            onChange={() => {
              dispatch(actions.setPayWay("Trả một phần"));
            }}
          />
          <div className="payment-item">
            <div className="payment-item-first">
              <div className="payment-item-name">
                Trả ngay một phần, phần còn lại trả sau
              </div>
              <div className="payment-item-input">
                <div className="payment-item-cost">
                  đ {(totalPrice / 2).toLocaleString()}
                </div>
                <label htmlFor="half" className="payment-item-check">
                  <div className="payment-item-check-circle" />
                </label>
              </div>
            </div>
            <div className="payment-item-second">
              Thanh toán ngay đ {(totalPrice / 2).toLocaleString()} và phần còn
              lại (đ {(totalPrice / 2).toLocaleString()}) sẽ tự động được trừ
              vào cùng phương thức thanh toán này vào {dayStart}. Không phát
              sinh phụ phí.
            </div>
          </div>
        </div>
      </div>
      <div className="payment-by">
        <div className="payment-by-header">Thanh toán bằng</div>
        <div className="payment-by-content">
          <div className="payment-by-text">Thẻ tín dụng</div>
          <div className="payment-by-number">
            <input
              type="number"
              name=""
              id=""
              placeholder=" "
              onChange={(e) => {
                dispatch(
                  actions.setCard(
                    Number(e.target.value) === 123456 ? true : false
                  )
                );
              }}
            />
            <div className="card-number">Số thẻ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
