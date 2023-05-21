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
  SET__ROOM__LIST,
  SET__TOTAL__PRICE,
  SET__SUCCESS,
  SET__TOAST,
  SET__TOAST__REMOVING,
  SET__GUEST__MAX,
  SET__BABY__MAX,
  SET__PET__MAX,
  SET__CARD__NUMBER,
  SET__CARD__NAME,
  SET__CARD__DATE,
  SET__CARD__CVV,
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
export const setGuestMax = (value) => {
  return { type: SET__GUEST__MAX, value };
};
export const setBabyMax = (value) => {
  return { type: SET__BABY__MAX, value };
};
export const setPetMax = (value) => {
  return { type: SET__PET__MAX, value };
};

export const setPayWay = (value) => {
  return { type: SET__PAYWAY, value };
};

export const setCard = (value) => {
  return { type: SET__CARD, value };
};
export const setRoomList = (object) => {
  return { type: SET__ROOM__LIST, object };
};
export const setTotalPrice = (value) => {
  return { type: SET__TOTAL__PRICE, value };
};
export const setSuccess = (value) => {
  return { type: SET__SUCCESS, value };
};
export const setToast = (array) => {
  return { type: SET__TOAST, array };
};
export const setToastRemoving = (value) => {
  return { type: SET__TOAST__REMOVING, value };
};

export const setCardNumber = (value) => {
  return { type: SET__CARD__NUMBER, value };
};
export const setCardName = (value) => {
  return { type: SET__CARD__NAME, value };
};
export const setCardDate = (value) => {
  return { type: SET__CARD__DATE, value };
};
export const setCardCVV = (value) => {
  return { type: SET__CARD__CVV, value };
};
