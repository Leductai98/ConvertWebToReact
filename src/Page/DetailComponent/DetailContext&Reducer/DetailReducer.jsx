import {
  SET__USER__LOGIN,
  SET__ADULT,
  SET__BABY,
  SET__CHILD,
  SET__PET,
  SET__GUEST__MAX,
  SET__DAY__START,
  SET__DAY__END,
  SET__TOAST,
  SET__TOAST__REMOVING,
} from "./DetailConstant";

const detailInitalState = {
  userLogin: JSON.parse(localStorage.getItem("login")),
  guestMenu: {
    guestAdultChildMax: 0,
    guestAdult: 1,
    guestChild: 0,
    guestBabyMax: 5,
    guestBaby: 0,
    guestPetMax: 5,
    guestPet: 0,
  },
  dayStart: "",
  dayEnd: "",
  toast: [],
  toastRemoving: 0,
};

const detailReducer = (state, action) => {
  switch (action.type) {
    case SET__USER__LOGIN:
      return {
        ...state,
        userLogin: action.value,
      };
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
    case SET__DAY__START:
      return {
        ...state,
        dayStart: action.value,
      };
    case SET__DAY__END:
      return {
        ...state,
        dayEnd: action.value,
      };
    case SET__TOAST:
      return {
        ...state,
        toast: action.array,
      };
    case SET__TOAST__REMOVING:
      return {
        ...state,
        toastRemoving: action.id,
      };
  }
};

export { detailInitalState };
export default detailReducer;
