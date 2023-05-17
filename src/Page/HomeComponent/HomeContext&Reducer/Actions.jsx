import {
  SET__MAXPRICE,
  SET__MINPRICE,
  ACTIVE__FILTER__TYPE,
  SET__ROOMAFTERFILTER__LENGTH,
  SET__ROOMRENDER,
} from "./Constant";

export const setMaxPrice = (value) => {
  return { type: SET__MAXPRICE, value };
};
export const setMinPrice = (value) => {
  return { type: SET__MINPRICE, value };
};

export const activeFilterType = (id, value) => {
  return { type: ACTIVE__FILTER__TYPE, value, id };
};

export const setRoomAfterFilter = (value) => {
  return { type: SET__ROOMAFTERFILTER__LENGTH, value };
};

export const setRoomRender = (value) => {
  return { type: SET__ROOMRENDER, value };
};
