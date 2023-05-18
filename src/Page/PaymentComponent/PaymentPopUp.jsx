import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PaymentContext } from "./PaymentContext&Reducer";
export default function PaymentPopUp() {
  const [state, dispatch] = useContext(PaymentContext);
  const { success } = state;
  return (
    <>
      <div className={`payment-success-overlay ${success ? "active" : ""}`} />
      <div className={`success-wrap ${success ? "active" : ""}`}>
        <div className="payment-success">
          <div className="success-icon">
            <img src="./checkmark-circle-outline.svg" alt="" />
          </div>
          <div className="success-content">Thanh toán thành công</div>
        </div>
        <div className="success-nav">
          <Link to="/" className="back">
            Trở về trang chủ
          </Link>
          <Link to="/manage" className="manage">
            Đến trang quản lý
          </Link>
        </div>
      </div>
    </>
  );
}
