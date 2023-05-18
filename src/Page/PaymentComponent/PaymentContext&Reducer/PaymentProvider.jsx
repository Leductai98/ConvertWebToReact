import PaymentContext from "./PaymentContext";
import { useReducer } from "react";
import paymentReducer from "./PaymentReducer";
import { paymentInitalState } from "./PaymentReducer";
export default function PaymentProvider({ children }) {
  const [state, dispatch] = useReducer(paymentReducer, paymentInitalState);

  return (
    <PaymentContext.Provider value={[state, dispatch]}>
      {children}
    </PaymentContext.Provider>
  );
}
