import {
  SET__ADULT,
  SET__BABY,
  SET__CHILD,
  SET__PET,
  SET__GUEST__MAX,
  SET__DAY__START,
  SET__DAY__END,
} from "./DetailConstant";

const detailInitalState = {
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
};

const detailReducer = (state, action) => {
  switch (action.type) {
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
  }
};

export { detailInitalState };
export default detailReducer;
