import React from "react";

export default function SignUpPopUp({ popUp }) {
  return (
    <>
      <div className={`pop-up-overlay-success ${popUp ? "active" : ""}`} />
      <div className={`pop-up-success ${popUp ? "active" : ""}`}>
        <div className="toast-icon-success">
          <img src="/checkmark-circle-outline.svg" alt="" />
        </div>
        <div className="toast-content-success">Đăng ký thành công</div>
      </div>
    </>
  );
}
