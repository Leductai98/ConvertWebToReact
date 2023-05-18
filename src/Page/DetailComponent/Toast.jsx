import React, { memo, useContext, useEffect } from "react";
import { DetailContext } from "./DetailContext&Reducer";
import { actions } from "./DetailContext&Reducer";
import ToastItem from "./ToastItem";
import { setToast } from "./DetailContext&Reducer/DetailActions";

export default memo(function Toast() {
  const [state, dispatch] = useContext(DetailContext);
  const { toast, toastRemoving } = state;
  const handleCloseToast = (id) => {
    let result = toast.filter((item) => item.id !== id);
    dispatch(actions.setToast(result));
  };
  useEffect(() => {
    if (toast.length) {
      setTimeout(() => {
        dispatch(actions.setToastRemoving(toast[toast.length - 1].id));
      }, 2000);
    }
  }, [toast]);
  useEffect(() => {
    dispatch(
      actions.setToast(toast.filter((item) => item.id !== toastRemoving))
    );
  }, [toastRemoving]);
  return (
    <div className="toast-list">
      {toast.map((item) => (
        <ToastItem key={item.id} data={item} onCloseToast={handleCloseToast} />
      ))}
    </div>
  );
});
