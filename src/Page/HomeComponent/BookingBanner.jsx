import React from "react";

export default function BookingBanner() {
  return (
    <section className="booking__banner">
      <div className="booking__banner--header">
        Nhận giảm giá cho kỳ nghỉ của bạn
      </div>
      <div className="booking__banner--sign-up">
        <button>
          <a
            href="./sign-up.html"
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
          </a>
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
