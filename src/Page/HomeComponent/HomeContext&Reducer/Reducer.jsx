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

const initalState = {
  rangePrice: {
    minLength: 100000,
    minPrice: 500000,
    maxPrice: 2000000,
    progressLeft: 0,
    progressRight: 0,
  },
  FilterTypeActive: { id: 0, name: "Tất cả nhà" },
  roomListAfterFilterLength: 0,
  numberRoomRender: 12,
  guestMenu: {
    guestAdultChildMax: 16,
    guestBabyMax: 5,
    guestPetMax: 5,
    guestAdult: 1,
    guestChild: 0,
    guestBaby: 0,
    guestPet: 0,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIVE__FILTER__TYPE:
      return {
        ...state,
        FilterTypeActive: { id: action.id, name: action.value },
      };
    case SET__MAXPRICE:
      return {
        ...state,
        rangePrice: {
          ...state.rangePrice,
          maxPrice: Number(action.value),
          progressRight:
            100 - ((Number(action.value) - 500000) / 1500000) * 100,
        },
      };
    case SET__MINPRICE:
      return {
        ...state,
        rangePrice: {
          ...state.rangePrice,
          minPrice: Number(action.value),
          progressLeft: ((Number(action.value) - 500000) / 1500000) * 100,
        },
      };
    case SET__ROOMAFTERFILTER__LENGTH:
      return {
        ...state,
        roomListAfterFilterLength: action.value,
      };
    case SET__ROOMRENDER:
      return {
        ...state,
        numberRoomRender: action.value,
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
  }
}
export { initalState };
export default reducer;
