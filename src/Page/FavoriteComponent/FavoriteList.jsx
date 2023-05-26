import React, { useContext, useEffect } from "react";
import FavoriteContext from "./FavoriteContext&Reducer/FavoriteContext";
import { actions } from "./FavoriteContext&Reducer";
import FavoriteItem from "./FavoriteItem";
export default function FavoriteList() {
  const [state, dispatch] = useContext(FavoriteContext);
  const { favoriteList } = state;
  useEffect(() => {
    let result =
      localStorage.getItem("favorite") !== null
        ? JSON.parse(localStorage.getItem("favorite"))
        : [];
    if (result.length) {
      result = result.filter(
        (item) => item.user === JSON.parse(localStorage.getItem("login")).name
      );
      dispatch(actions.setFavoriteList(result));
    }
  }, [localStorage.getItem("favorite")]);

  const handleDeleteFavorite = (id) => {
    let result = favoriteList.filter((item) => item.id !== id);
    let result2 = JSON.parse(localStorage.getItem("favorite"));
    result2 = result2.filter((item) => item.id !== id);
    localStorage.setItem("favorite", JSON.stringify(result2));
    dispatch(actions.setFavoriteList(result));
  };
  return (
    <div className="manage-list">
      {favoriteList.length === 0 ? (
        <h5>Chưa có chuyến đi nào</h5>
      ) : (
        favoriteList.map((item) => (
          <FavoriteItem
            key={item.id}
            data={item}
            onDeleteFavorite={handleDeleteFavorite}
          />
        ))
      )}
    </div>
  );
}
