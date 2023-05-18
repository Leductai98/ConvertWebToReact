import React, { memo } from "react";

export default memo(function ToastItem({ data, onCloseToast }) {
  return (
    <div className="toast-error active">
      <div className="toast-error-icon">
        <img src="/close-circle-outline.svg" alt="" />
      </div>
      <div className="toast-error-content">{data.name}</div>
      <div
        className="toast-error-close"
        onClick={() => {
          console.log(data);
          onCloseToast(data.id);
        }}
      >
        <img src="/close-outline.svg" alt="" />
      </div>
    </div>
  );
});
