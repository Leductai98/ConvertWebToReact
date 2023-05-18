import {
  SET__USER__LOGIN,
  SET__ADULT,
  SET__CHILD,
  SET__BABY,
  SET__PET,
  SET__GUEST__MAX,
  SET__DAY__START,
  SET__DAY__END,
  SET__TOAST,
  SET__TOAST__REMOVING,
} from "./DetailConstant";

export const setUserLogin = (value) => {
  return { type: SET__USER__LOGIN, value };
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
export const setGuestMax = (value) => {
  return { type: SET__GUEST__MAX, value };
};
export const setDayStart = (value) => {
  return { type: SET__DAY__START, value };
};
export const setDayEnd = (value) => {
  return { type: SET__DAY__END, value };
};
export const setToast = (array) => {
  return { type: SET__TOAST, array };
};
export const setToastRemoving = (id) => {
  return { type: SET__TOAST__REMOVING, id };
};
