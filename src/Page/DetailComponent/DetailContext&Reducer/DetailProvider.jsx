import DetailContext from "./DetailContext";
import { useReducer } from "react";
import detailReducer, { detailInitalState } from "./DetailReducer";

export default function DetailProvider({ children }) {
  const [state, dispatch] = useReducer(detailReducer, detailInitalState);

  return (
    <DetailContext.Provider value={[state, dispatch]}>
      {children}
    </DetailContext.Provider>
  );
}
