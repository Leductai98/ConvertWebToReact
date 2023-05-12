import React from 'react'

export default function PaymentInfoMenu() {
  return (
    <div className="info-menu-payment">
      <div className="room-info-payment">
        <div className="room-img-payment">
          <img src="/pexels-spencer-davis-4356144.jpg" alt="" />
        </div>
        <div className="room-text-payment">
          <div className="room-name-payment">Bungalow</div>
          <div className="room-type-payment">Toàn bộ nhà</div>
          <div className="room-location-payment">Đà Nẵng</div>
          <div className="room-rate-payment">
            <img src="/Star.jpg" alt="" /> <span>5.0</span>
          </div>
        </div>
      </div>
      <div className="cost-info-payment">
        <div className="cost-header-payment">Chi tiết giá</div>
        <div className="cost-content">
          <div className="cost-item">
            <div className="cost-des">
              <span>đ 1,000,000</span> x
              <span className="count-night">1 đêm</span>
            </div>
            <div className="price">đ 1,000,000</div>
          </div>
          <div className="cost-item">
            <div className="cost-des">Phí vệ sinh</div>
            <div className="price">đ 200,000</div>
          </div>
          <div className="cost-item">
            <div className="cost-des">
              Phí dịch vụ <span>Tai</span>
            </div>
            <div className="price-payment">đ 100,000</div>
          </div>
        </div>
      </div>
      <div className="total payment">
        <div className="total-des">Tổng</div>
        <div className="total-price">đ 1,300,000</div>
      </div>
      <div className="total-half-payment active">
        <div className="half-item-payment">
          <div className="half-item-des-payment">Phải trả bây giờ</div>
          <div className="half-item-price">đ 650,000</div>
        </div>
        <div className="half-item-payment">
          <div className="half-item-des">Phải trả vào 23 thg 4, 2023</div>
          <div className="half-item-price">đ 650,000</div>
        </div>
      </div>
      <div className="pay-payment">
        <div className="pay-text">Thanh toán</div>
      </div>
    </div>
  );
}
