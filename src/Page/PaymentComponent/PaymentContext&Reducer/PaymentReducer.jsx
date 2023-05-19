import {
  SET__DAY__END,
  SET__DAY__START,
  SET__USER__LOGIN,
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
} from "./PaymentConstant";

const paymentInitalState = {
  userLogin: JSON.parse(localStorage.getItem("login")),
  dayStart:
    JSON.parse(localStorage.getItem("roomOrder")) !== null
      ? JSON.parse(localStorage.getItem("roomOrder")).infoDate.split(" ")[0]
      : "",
  dayEnd:
    JSON.parse(localStorage.getItem("roomOrder")) !== null
      ? JSON.parse(localStorage.getItem("roomOrder")).infoDate.split(" ")[2]
      : "",
  guestMenu: {
    guestAdultChildMax:
      JSON.parse(localStorage.getItem("roomOrder")) !== null
        ? JSON.parse(localStorage.getItem("roomOrder")).infoMaxGuest
        : 0,
    guestAdult:
      JSON.parse(localStorage.getItem("roomOrder")) !== null
        ? JSON.parse(localStorage.getItem("roomOrder")).infoAdult
        : 0,
    guestChild:
      JSON.parse(localStorage.getItem("roomOrder")) !== null
        ? JSON.parse(localStorage.getItem("roomOrder")).infoChild
        : 0,
    guestBabyMax:
      JSON.parse(localStorage.getItem("roomOrder")) !== null
        ? JSON.parse(localStorage.getItem("roomOrder")).infoMaxBaby
        : 0,
    guestBaby:
      JSON.parse(localStorage.getItem("roomOrder")) !== null
        ? JSON.parse(localStorage.getItem("roomOrder")).infoBaby
        : 0,
    guestPetMax:
      JSON.parse(localStorage.getItem("roomOrder")) !== null
        ? JSON.parse(localStorage.getItem("roomOrder")).infoMaxPet
        : 0,
    guestPet:
      JSON.parse(localStorage.getItem("roomOrder")) !== null
        ? JSON.parse(localStorage.getItem("roomOrder")).infoPet
        : 0,
  },
  totalPrice:
    JSON.parse(localStorage.getItem("roomOrder")) !== null
      ? ((Date.parse(
          JSON.parse(localStorage.getItem("roomOrder"))
            .infoDate.split(" ")[2]
            .split("-")
            .reverse()
            .join("-")
        ) -
          Date.parse(
            JSON.parse(localStorage.getItem("roomOrder"))
              .infoDate.split(" ")[0]
              .split("-")
              .reverse()
              .join("-")
          )) /
          (3600 * 24 * 1000)) *
          Number(
            JSON.parse(localStorage.getItem("roomOrder"))
              .infoPrice.split(",")
              .join("")
          ) *
          1.1 +
        200000
      : 0,
  payWay: "",
  card: false,
  roomList: {},
  success: false,
  toast: [],
  toastRemoving: 0,
};

const paymentReducer = (state, action) => {
  switch (action.type) {
    case SET__USER__LOGIN:
      return { ...state, userLogin: action.value };
    case SET__DAY__START:
      return { ...state, dayStart: action.value };
    case SET__DAY__END:
      return { ...state, dayEnd: action.value };
    case SET__ADULT:
      return {
        ...state,
        guestMenu: { ...state.guestMenu, guestAdult: action.value },
      };
    case SET__CHILD:
      return {
        ...state,
        guestMenu: { ...state.guestMenu, guestChild: action.value },
      };
    case SET__BABY:
      return {
        ...state,
        guestMenu: { ...state.guestMenu, guestBaby: action.value },
      };
    case SET__PET:
      return {
        ...state,
        guestMenu: { ...state.guestMenu, guestPet: action.value },
      };
    case SET__GUEST__MAX:
      return {
        ...state,
        guestMenu: { ...state.guestMenu, guestAdultChildMax: action.value },
      };
    case SET__BABY__MAX:
      return {
        ...state,
        guestMenu: { ...state.guestMenu, guestBabyMax: action.value },
      };
    case SET__PET__MAX:
      return {
        ...state,
        guestMenu: { ...state.guestMenu, guestPetMAx: action.value },
      };
    case SET__PAYWAY:
      return { ...state, payWay: action.value };
    case SET__CARD:
      return { ...state, card: action.value };
    case SET__ROOM__LIST:
      return { ...state, roomList: action.object };
    case SET__TOTAL__PRICE:
      return { ...state, totalPrice: action.value };
    case SET__SUCCESS:
      return { ...state, success: action.value };
    case SET__TOAST:
      return { ...state, toast: action.array };
    case SET__TOAST__REMOVING:
      return { ...state, toastRemoving: action.value };
  }
};
export { paymentInitalState };
export default paymentReducer;
