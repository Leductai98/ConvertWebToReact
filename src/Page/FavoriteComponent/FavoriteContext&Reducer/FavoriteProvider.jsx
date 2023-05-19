import FavoriteContext from "./FavoriteContext";
import { useReducer } from "react";
import favoriteReducer, { favoriteInitialState } from "./FavoriteReducer";
export default function FavoriteProvider({ children }) {
  const [state, dispatch] = useReducer(favoriteReducer, favoriteInitialState);
  return (
    <FavoriteContext.Provider value={[state, dispatch]}>
      {children}
    </FavoriteContext.Provider>
  );
}
