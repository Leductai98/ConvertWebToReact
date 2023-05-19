import { SET__FAVORITE__LIST } from "./FavoriteConstant";

export const setFavoriteList = (value) => {
  return { type: SET__FAVORITE__LIST, value };
};
