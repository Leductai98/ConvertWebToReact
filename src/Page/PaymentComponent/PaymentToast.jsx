import React from 'react'

export default function PaymentToast() {
  return (
    <div className="toast-list-payment">
      <div className="toast-item-payment active">
        <div className="toast-icon-payment">
          <img src="/close-circle-outline.svg" alt="" />
        </div>
        <div className="toast-content-payment">
          Vui lòng chọn cách thanh toán
        </div>
        <div className="toast-close-payment">
          <img src="/close-outline.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
