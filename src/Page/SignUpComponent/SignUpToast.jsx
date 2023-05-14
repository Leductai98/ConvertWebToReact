import React, { memo } from "react";
import SignUpToastItem from "./SignUpToastItem";

export default memo(function SignUpToast({ toast, onCloseToast }) {
  return (
    <div className="toast-list">
      {toast.map((item) => (
        <SignUpToastItem
          key={item.id}
          data={item}
          onCloseToast={onCloseToast}
        />
      ))}
    </div>
  );
});
