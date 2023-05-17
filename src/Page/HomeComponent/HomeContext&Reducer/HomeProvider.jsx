import { useReducer } from "react";
import HomeContext from "./HomeContext";
import { initalState } from "./Reducer";
import reducer from "./Reducer";
export default function HomeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <HomeContext.Provider value={[state, dispatch]}>
      {children}
    </HomeContext.Provider>
  );
}
