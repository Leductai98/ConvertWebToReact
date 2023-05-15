import React from "react";
import SignInToastItem from "./SignInToastItem";

export default function SignInToast({ toast, onCloseToast }) {
  return (
    <div className="toast-list">
      {toast.map((item) => (
        <SignInToastItem
          key={item.id}
          data={item}
          onCloseToast={onCloseToast}
        />
      ))}
    </div>
  );
}
