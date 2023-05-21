import React from "react";
import { useBodyScrollLock } from "./hooks";
import { Link } from "react-router-dom";
export default function Footer2() {
  const [isLocked, toggle] = useBodyScrollLock();
  return (
    <>
      <section className="footer-index">
        <div className="footer__content">
          <div className="footer__content--left">
            <div className="footer__content--left--header">
              Khám phá thế giới cùng với Tai!
            </div>
            <div className="footer__content--left--des">
              Chúng tôi cung cấp các dịch vụ phù hợp cho mọi nhu cầu du lịch của
              bạn. Chủ nhà của chúng tôi rất tuyệt vời, sẵn sàng đáp ứng kỳ nghỉ
              của bạn khi bạn tận hưởng kỳ nghỉ của mình mà không phải lo lắng.
            </div>
            <div className="footer__content--left--icon">© 2023 Tai.</div>
          </div>
          <div className="footer__content--right">
            <div className="footer__content--right--infor">
              <Link to="/about" className="infor__item">
                Về chúng tôi
              </Link>
              <Link to="/help" className="infor__item">
                Trợ giúp
              </Link>
              <Link to="/privacy" className="infor__item">
                Chính sách riêng tư
              </Link>
              <label
                htmlFor="contact-input"
                className="infor__item"
                onClick={toggle}
              >
                Liên hệ
              </label>
            </div>
            <div className="mail-des">Nhận thêm thông tin về chúng tôi</div>
            <div className="footer__content--right--mail">
              <form style={{ display: "flex" }}>
                <input type="email" placeholder="Nhập địa chỉ email của bạn" />
                <button style={{ cursor: "pointer" }}>
                  Gửi <img src="/Frame (6).png" />
                </button>
              </form>
            </div>
            <div className="footer__content--right--icon">
              <div className="footer__content--left--icon-onmobile">
                © 2023 Tai.
              </div>
              <Link
                to="https://twitter.com/home?lang=en"
                className="icon__item"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="#1D9BF0"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Link>
              <Link to="https://www.facebook.com" className="icon__item">
                <img src="/Facebook_f_logo_(2019).svg" />
              </Link>
              <Link
                to="https://www.instagram.com"
                className="icon__item"
                style={{ backgroundColor: "unset" }}
              >
                <img src="/Instagram_logo_2016.svg" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="contact">
        <input type="checkbox" id="contact-input" />
        <label
          htmlFor="contact-input"
          className="info-contact-overlay"
          onClick={toggle}
        />
        <div className="info-contact-detail">
          <label
            htmlFor="contact-input"
            className="cover-detail-close"
            onClick={toggle}
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
          <div className="detail-wrap">
            <div className="cover-detail-header-contact">
              <div className="detail-header-icon-contact">
                <img src="/Group (4).png" />
              </div>
              <div className="detail-header-text-contact">
                Nếu quý khách có thắc mắc, xin vui lòng liên hệ chúng tôi theo
                thông tin dưới đây:
              </div>
            </div>
            <div className="cover-detail-list">
              <div className="cover-detail-item">
                <div className="detail-item-header-contact">Email:</div>
                <Link
                  to="mailto: leductai9898@gmail.com"
                  className="detail-item-text-contact"
                  style={{ color: "blue" }}
                >
                  leductai9898@gmail.com
                </Link>
              </div>
              <div className="cover-detail-item">
                <div className="detail-item-header-contact">Hotline:</div>
                <Link
                  to="tel: 0776455910"
                  className="detail-item-text-contact"
                  style={{ color: "blue" }}
                >
                  0776455910
                </Link>
              </div>
              <div className="cover-detail-item active">
                <div className="detail-item-header-contact">Địa chỉ</div>
                <div className="detail-item-text-contact">
                  A1 P. Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng, Hà Nội
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14899.046139559176!2d105.8478321!3d21.002194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac740ba3819f%3A0x2b5ef5b01461f9e7!2zU8OibiB24bqtbiDEkeG7mW5nIFRyxrDhu51uZyDEkOG6oWkgaOG7jWMgQsOhY2ggS2hvYSBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1680714956256!5m2!1svi!2s"
                      width={800}
                      height={600}
                      style={{ border: "0" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
