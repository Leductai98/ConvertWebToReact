import React from 'react'

export default function PaymentPopUp() {
  return (
    <>
      <div className="payment-success-overlay" />
      <div className="success-wrap">
        <div className="payment-success">
          <div className="success-icon">
            <img src="./checkmark-circle-outline.svg" alt="" />
          </div>
          <div className="success-content">Thanh toán thành công</div>
        </div>
        <div className="success-nav">
          <a href="/" className="back">
            Trở về trang chủ
          </a>
          <a href="/manage" className="manage">
            Đến trang quản lý
          </a>
        </div>
      </div>
    </>
  );
}
