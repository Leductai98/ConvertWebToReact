import {
  SET__MAXPRICE,
  SET__MINPRICE,
  ACTIVE__FILTER__TYPE,
  SET__ROOMAFTERFILTER__LENGTH,
  SET__ROOMRENDER,
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
  }
}
export { initalState };
export default reducer;
