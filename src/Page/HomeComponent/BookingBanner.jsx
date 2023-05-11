import React from "react";
import { Link } from "react-router-dom";
export default function BookingBanner() {
  return (
    <section className="booking__banner">
      <div className="booking__banner--header">
        Nhận giảm giá cho kỳ nghỉ của bạn
      </div>
      <div className="booking__banner--sign-up">
        <button>
          <Link
            to="/signup"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "inherit",
              textDecoration: "none",
              width: "100%",
              height: "100%",
            }}
          >
            Đăng ký ngay
          </Link>
        </button>
      </div>
      <div className="booking__banner--des">
        <div className="booking__banner--item">
          <img src="Frame (2).png" alt="" />
          <span>Giá tốt nhất</span>
        </div>
        <div className="booking__banner--item">
          <img src="Frame (2).png" alt="" />
          <span>Đề nghị miễn phí</span>
        </div>
        <div className="booking__banner--item">
          <img src="Frame (2).png" alt="" />
          <span>Thanh toán nhanh và bảo mật</span>
        </div>
      </div>
    </section>
  );
}
