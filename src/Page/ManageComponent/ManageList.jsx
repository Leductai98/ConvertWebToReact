import React, { useContext, useEffect } from "react";
import ManageItem from "./ManageItem";
import { ManageContext } from "./ManageContext&Reducer";
import { actions } from "./ManageContext&Reducer";
export default function ManageList() {
  const [state, dispatch] = useContext(ManageContext);
  const { paymentList } = state;
  useEffect(() => {
    let result = JSON.parse(localStorage.getItem("payment"));
    if (result.length) {
      result = result.filter(
        (item) => item.user === JSON.parse(localStorage.getItem("login")).name
      );
    }
    dispatch(actions.setPaymentList(result ?? []));
  }, [localStorage.getItem("payment")]);
  return (
    <div className="manage-list">
      {paymentList.length === 0 ? (
        <h5>Chưa có chuyến đi nào</h5>
      ) : (
        paymentList.map((item) => <ManageItem key={item.id} data={item} />)
      )}
    </div>
  );
}
