import React, { memo } from "react";

export default memo(function ToastItem({ data, onCloseToast }) {
  return (
    <div className={`toast-${data.status? "success" : "error"} active`}>
      <div className="toast-error-icon">
        <img
          src={
            data.status
              ? "/checkmark-circle-outline.svg"
              : "/close-circle-outline.svg"
          }
          alt=""
        />
      </div>
      <div className="toast-error-content">{data.name}</div>
      <div
        className="toast-error-close"
        onClick={() => {
          onCloseToast(data.id);
        }}
      >
        <img src="/close-outline.svg" alt="" />
      </div>
    </div>
  );
});
