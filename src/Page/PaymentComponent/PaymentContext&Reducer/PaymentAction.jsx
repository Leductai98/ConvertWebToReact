import {
  SET__USER__LOGIN,
  SET__DAY__START,
  SET__DAY__END,
  SET__ADULT,
  SET__BABY,
  SET__CHILD,
  SET__PET,
  SET__PAYWAY,
  SET__CARD,
} from "./PaymentConstant";

export const setUserLogin = (value) => {
  return { type: SET__USER__LOGIN, value };
};
export const setDayStart = (value) => {
  return { type: SET__DAY__START, value };
};

export const setDayEnd = (value) => {
  return { type: SET__DAY__END, value };
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

export const setPayWay = (value) => {
  return { type: SET__PAYWAY, value };
};

export const setCard = (value) => {
  return { type: SET__CARD, value };
};