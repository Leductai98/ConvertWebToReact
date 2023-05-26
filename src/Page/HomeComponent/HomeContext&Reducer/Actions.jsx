import {
  SET__ROOM__LIST,
  SET__ROOM__LIST__AFTER__FILTER,
  SET__ROOM__LIST__AFTER__FILTER__DETAIL,
  SET__MAXPRICE,
  SET__MINPRICE,
  ACTIVE__FILTER__TYPE,
  SET__ROOMAFTERFILTER__LENGTH,
  SET__ROOMRENDER,
  SET__ADULT,
  SET__CHILD,
  SET__BABY,
  SET__PET,
  SET__DAY__START,
  SET__DAY__END,
  SET__ROOM__STATUS,
  SET__BEDROOM__COUNT,
  SET__BED__COUNT,
  SET__BATHROOM__COUNT,
  SET__THINGS,
  SET__DEFAULT,
  SET__HOUSE__TYPE,
  SET__RELOAD__PAGE,
  SET__IS__LOADING,
} from "./Constant";
export const setRoomList = (value) => {
  return { type: SET__ROOM__LIST, value };
};
export const setRoomListAfterFilter = (value) => {
  return { type: SET__ROOM__LIST__AFTER__FILTER, value };
};
export const setRoomListAfterFilterDetail = (value) => {
  return { type: SET__ROOM__LIST__AFTER__FILTER__DETAIL, value };
};
export const setMaxPrice = (value) => {
  return { type: SET__MAXPRICE, value };
};
export const setMinPrice = (value) => {
  return { type: SET__MINPRICE, value };
};

export const setActiveFilterType = (value) => {
  return { type: ACTIVE__FILTER__TYPE, value };
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
export const setPet = (value) => {
  return { type: SET__PET, value };
};
export const setDayStart = (value) => {
  return { type: SET__DAY__START, value };
};
export const setDayEnd = (value) => {
  return { type: SET__DAY__END, value };
};
export const setRoomStatus = (name, value) => {
  return { type: SET__ROOM__STATUS, name, value };
};
export const setBedRoomCount = (value) => {
  return { type: SET__BEDROOM__COUNT, value };
};
export const setBedCount = (value) => {
  return { type: SET__BED__COUNT, value };
};
export const setBathRoomCount = (value) => {
  return { type: SET__BATHROOM__COUNT, value };
};
export const setHouseType = (name, value) => {
  return { type: SET__HOUSE__TYPE, name, value };
};
export const setThings = (name, value) => {
  return { type: SET__THINGS, name, value };
};
export const setDefault = () => {
  return { type: SET__DEFAULT };
};

export const setReloadPage = () => {
  return { type: SET__RELOAD__PAGE };
};

export const setIsLoading = (value) => {
  return { type: SET__IS__LOADING, value };
};
