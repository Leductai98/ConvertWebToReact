import React from "react";

export default function SignUpPopUp() {
  return (
    <>
      <div className="pop-up-overlay" />
      <div className="pop-up">
        <div className="toast-icon">
          <img src="/checkmark-circle-outline.svg" alt="" />
        </div>
        <div className="toast-content">Đăng ký thành công</div>
      </div>
    </>
  );
}
