import React from "react";

export default function SignInPopUp({ popUp }) {
  return (
    <>
      <div className={`pop-up-overlay-success ${popUp ? "active" : ""}`} />
      <div className={`pop-up-signin ${popUp ? "active" : ""}`}>
        <div className="toast-icon-success">
          <img src="/checkmark-circle-outline.svg" alt="" />
        </div>
        <div className="toast-content-success">Đăng nhập thành công</div>
      </div>
    </>
  );
}
