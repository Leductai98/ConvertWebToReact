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
} from "./PaymentConstant";

const paymentInitalState = {
  userLogin: JSON.parse(localStorage.getItem("login")),
  dayStart: JSON.parse(localStorage.getItem("roomOrder")).infoDate.split(
    " "
  )[0],
  dayEnd: JSON.parse(localStorage.getItem("roomOrder")).infoDate.split(" ")[2],
  guestMenu: {
    guestAdultChildMax: JSON.parse(localStorage.getItem("roomOrder"))
      .infoMaxGuest,
    guestAdult: JSON.parse(localStorage.getItem("roomOrder")).infoAdult,
    guestChild: JSON.parse(localStorage.getItem("roomOrder")).infoChild,
    guestBabyMax: JSON.parse(localStorage.getItem("roomOrder")).infoMaxBaby,
    guestBaby: JSON.parse(localStorage.getItem("roomOrder")).infoBaby,
    guestPetMax: JSON.parse(localStorage.getItem("roomOrder")).infoMaxPet,
    guestPet: JSON.parse(localStorage.getItem("roomOrder")).infoPet,
  },
  totalPrice:
    ((Date.parse(
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
    ),
  payWay: "",
  card: false,
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
    case SET__PAYWAY:
      return { ...state, payWay: action.value };
    case SET__CARD:
      return { ...state, card: action.value };
  }
};
export { paymentInitalState };
export default paymentReducer;
