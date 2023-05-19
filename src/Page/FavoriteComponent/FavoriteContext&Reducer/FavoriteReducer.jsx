import { SET__FAVORITE__LIST } from "./FavoriteConstant";

const favoriteInitialState = {
  favoriteList: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case SET__FAVORITE__LIST:
      return {
        ...state,
        favoriteList: action.value,
      };
  }
};

export { favoriteInitialState };
export default favoriteReducer;
