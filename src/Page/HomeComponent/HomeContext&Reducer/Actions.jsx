import {
  SET__MAXPRICE,
  SET__MINPRICE,
  ACTIVE__FILTER__TYPE,
  SET__ROOMAFTERFILTER__LENGTH,
  SET__ROOMRENDER,
  SET__ADULT,
  SET__CHILD,
  SET__BABY,
  SET__PET,
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

export const setAdult = (value) => {
  return { type: SET__ADULT, value };
};
export const setChild = (value) => {
  return { type: SET__CHILD, value };
};
export const setBaby = (value) => {
  return { type: SET__BABY, value };
};
export const setPET = (value) => {
  return { type: SET__PET, value };
};
