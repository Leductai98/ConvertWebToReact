import React, { useContext, useEffect, useState } from "react";
import { PaymentContext } from "./PaymentContext&Reducer";
import { actions } from "./PaymentContext&Reducer";
const getRoomList = async () => {
  const res = await fetch(
    `https://api-sandy-zeta.vercel.app/room-list/${
      JSON.parse(localStorage.getItem("roomOrder")) !== null
        ? JSON.parse(localStorage.getItem("roomOrder")).infoId
        : 0
    }`
  );
  const data = await res.json();
  return data;
};
const promise = getRoomList();

export default function PaymentInfoMenu() {
  const [isLoading, setIsLoaing] = useState(true);
  const [state, dispatch] = useContext(PaymentContext);
  const {
    userLogin,
    payWay,
    dayStart,
    dayEnd,
    roomList,
    totalPrice,
    card,
    toast,
    success,
  } = state;
  useEffect(() => {
    promise
      .then((data) => {
        dispatch(actions.setRoomList(data));
      })
      .then(() => {
        setIsLoaing(false);
      });
  }, [promise]);

  const handlePay = () => {
    if (payWay === "") {
      dispatch(
        actions.setToast([
          ...toast,
          {
            id: Math.floor(Math.random() * 1000000),
            name: "Vui lòng chọn cách thanh toán",
          },
        ])
      );
    } else {
      if (!card) {
        dispatch(
          actions.setToast([
            ...toast,
            {
              id: Math.floor(Math.random() * 1000000),
              name: "Nhập số thẻ: 123456",
            },
          ])
        );
      } else {
        let paymentInfo =
          localStorage.getItem("payment") != null
            ? JSON.parse(localStorage.getItem("payment"))
            : [];
        let paymentItem = {
          user: userLogin.name,
          picture: `https://api-sandy-zeta.vercel.app${roomList.picture[0].link}`,
          name: roomList.name,
          status: roomList.status,
          location: roomList.location,
          date: `${dayStart} đến ${dayEnd}`,
          price: totalPrice,
          way: payWay,
          link: JSON.parse(localStorage.getItem("roomOrder")).infoLink,
        };
        paymentInfo.push(paymentItem);
        localStorage.setItem("payment", JSON.stringify(paymentInfo));
        dispatch(actions.setSuccess(true));
      }
    }
  };
  if (isLoading) {
    return (
      <div className="detail--loading--img">
        <img src="/Spinner-1s-200px.svg" alt="" />
      </div>
    );
  }
  return (
    <div className="info-menu-payment">
      <div className="room-info-payment">
        <div className="room-img-payment">
          <img
            src={`https://api-sandy-zeta.vercel.app${roomList.picture[0].link}`}
            alt=""
          />
        </div>
        <div className="room-text-payment">
          <div className="room-name-payment">{roomList.name}</div>
          <div className="room-type-payment">{roomList.status}</div>
          <div className="room-location-payment">{roomList.location}</div>
          <div className="room-rate-payment">
            <img src="/Star.jpg" alt="" /> <span>{roomList.rate}</span>
          </div>
        </div>
      </div>
      <div className="cost-info-payment">
        <div className="cost-header-payment">Chi tiết giá</div>
        <div className="cost-content">
          <div className="cost-item">
            <div className="cost-des">
              <span>đ 1,000,000</span> x{" "}
              <span className="count-night">
                {(Date.parse(dayEnd.split("-").reverse().join("-")) -
                  Date.parse(dayStart.split("-").reverse().join("-"))) /
                  (3600 * 24 * 1000)}{" "}
                đêm
              </span>
            </div>
            <div className="price">
              đ{" "}
              {(
                ((Date.parse(dayEnd.split("-").reverse().join("-")) -
                  Date.parse(dayStart.split("-").reverse().join("-"))) /
                  (3600 * 24 * 1000)) *
                Number(
                  JSON.parse(localStorage.getItem("roomOrder"))
                    .infoPrice.split(",")
                    .join("")
                )
              ).toLocaleString()}
            </div>
          </div>
          <div className="cost-item">
            <div className="cost-des">Phí vệ sinh</div>
            <div className="price">đ 200,000</div>
          </div>
          <div className="cost-item">
            <div className="cost-des">
              Phí dịch vụ <span>Tai</span>
            </div>
            <div className="price-payment">
              đ{" "}
              {(
                ((Date.parse(dayEnd.split("-").reverse().join("-")) -
                  Date.parse(dayStart.split("-").reverse().join("-"))) /
                  (3600 * 24 * 1000)) *
                Number(
                  JSON.parse(localStorage.getItem("roomOrder"))
                    .infoPrice.split(",")
                    .join("")
                ) *
                0.1
              ).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
      <div className="total payment">
        <div className="total-des">Tổng</div>
        <div className="total-price">đ {totalPrice.toLocaleString()}</div>
      </div>
      <div
        className={`total-half-payment ${
          payWay === "Trả một phần" ? "active" : ""
        }`}
      >
        <div className="half-item-payment">
          <div className="half-item-des-payment">Phải trả bây giờ</div>
          <div className="half-item-price">
            đ {(totalPrice / 2).toLocaleString()}
          </div>
        </div>
        <div className="half-item-payment">
          <div className="half-item-des">Phải trả vào {dayStart}</div>
          <div className="half-item-price">
            đ {(totalPrice / 2).toLocaleString()}
          </div>
        </div>
      </div>
      <div
        className="pay-payment"
        onClick={() => {
          handlePay();
        }}
      >
        <div className="pay-text">Thanh toán</div>
      </div>
    </div>
  );
}
