import React from "react";
import Flatpickr from "react-flatpickr";
import { Vietnamese } from "flatpickr/dist/l10n/vn.js";
export default function PaymentComfirm() {
  return (
    <div className="confirm-payment">
      <div className="confirm-payment-header">Xác nhận và thanh toán</div>
      <div className="confirm-payment-content">
        <div className="content-header">Chuyến đi của bạn</div>
        <div className="content-list">
          <div className="content-item">
            <div className="item-text">
              <div className="item-header">Ngày</div>
              <div className="item-des">Ngày 08 - Ngày 13 tháng 5</div>
            </div>
            <div className="item-eidt">
              <label htmlFor="date">Chỉnh sửa</label>
              <Flatpickr
                options={{
                  locale: Vietnamese,
                  dateFormat: "d-m-Y",
                  showMonths: 1,
                  mode: "range",
                  minDate: "today",
                }}
                id="date"
                type="text"
              />
            </div>
          </div>
          <div className="content-item">
            <div className="item-text">
              <div className="item-header">Khách</div>
              <div className="item-des">
                <span className="guest-adult-child">1 khách </span>
                <span className="guest-baby">, 1 em bé</span>
                <span className="guest-pet">, 1 thú cưng</span>
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
                        <div className="item-right-reduce" data-type="adult">
                          -
                        </div>
                        <div
                          className="item-right-quantity"
                          data-type="adult"
                          data-max={5}
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
                          data-max={4}
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
          <input type="radio" name="payment" id="all" />
          <div className="payment-item">
            <div className="payment-item-first">
              <div className="payment-item-name">Trả toàn bộ</div>
              <div className="payment-item-input">
                <div className="payment-item-cost">đ 1,000,000</div>
                <label htmlFor="all" className="payment-item-check">
                  <div className="payment-item-check-circle" />
                </label>
              </div>
            </div>
            <div className="payment-item-second">
              Thanh toán toàn bộ số tiền (đ 1,000,000) ngay bây giờ và thế là
              xong.
            </div>
          </div>
          <input type="radio" name="payment" id="half" />
          <div className="payment-item">
            <div className="payment-item-first">
              <div className="payment-item-name">
                Trả ngay một phần, phần còn lại trả sau
              </div>
              <div className="payment-item-input">
                <div className="payment-item-cost">đ 1,000,000</div>
                <label htmlFor="half" className="payment-item-check">
                  <div className="payment-item-check-circle" />
                </label>
              </div>
            </div>
            <div className="payment-item-second">
              Thanh toán ngay đ 500,000 và phần còn lại (đ 500,000) sẽ tự động
              được trừ vào cùng phương thức thanh toán này vào 23 thg 4, 2023.
              Không phát sinh phụ phí.
            </div>
          </div>
        </div>
      </div>
      <div className="payment-by">
        <div className="payment-by-header">Thanh toán bằng</div>
        <div className="payment-by-content">
          <div className="payment-by-text">Thẻ tín dụng</div>
          <div className="payment-by-number">
            <input type="number" name="" id="" placeholder=" " />
            <div className="card-number">Số thẻ</div>
          </div>
        </div>
      </div>
    </div>
  );
}
