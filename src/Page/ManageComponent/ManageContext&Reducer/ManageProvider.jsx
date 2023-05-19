import ManageContext from "./ManageContext";
import { useReducer } from "react";
import manageReducer from "./ManageReducer";
import { manageInitalState } from "./ManageReducer";
export default function ManageProvider({ children }) {
  const [state, dispatch] = useReducer(manageReducer, manageInitalState);
  return (
    <ManageContext.Provider value={[state, dispatch]}>
      {children}
    </ManageContext.Provider>
  );
}
