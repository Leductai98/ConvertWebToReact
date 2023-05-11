import React from "react";

export default function SignInPopUp() {
  return (
    <>
      <div className="pop-up-overlay" />
      <div className="pop-up-signin">
        <div className="toast-icon">
          <img src="/checkmark-circle-outline.svg" alt="" />
        </div>
        <div className="toast-content">Đăng nhập thành công</div>
      </div>
    </>
  );
}
