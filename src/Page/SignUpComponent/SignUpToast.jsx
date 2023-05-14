import React from "react";

export default function SignUpToast({ toast, onCloseToast }) {
  return (
    <div className="toast-list">
      {toast.map((item) => (
        <div className="toast-error active" key={item.id}>
          <div className="toast-error-icon">
            <img src="/close-circle-outline.svg" alt="" />
          </div>
          <div className="toast-error-content">{item.name}</div>
          <div
            className="toast-error-close"
            onClick={() => {
              onCloseToast(item.id);
            }}
          >
            <img src="/close-outline.svg" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
