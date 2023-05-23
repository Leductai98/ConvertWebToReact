import {
  SET__ROOM__LIST,
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
  SET__ROOM__LIST__AFTER__FILTER,
  SET__ROOM__LIST__AFTER__FILTER__DETAIL,
  SET__DEFAULT,
  SET__HOUSE__TYPE,
  SET__RELOAD__PAGE,
} from "./Constant";

const initalState = {
  roomList: [],
  roomListAfterFilter: [],
  roomListAfterFilterDetail: [],
  rangePrice: {
    minLength: 100000,
    minPrice: 500000,
    maxPrice: 2000000,
    progressLeft: 0,
    progressRight: 0,
  },
  activeFilterType: "Tất cả nhà",
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
  dayStart: "0",
  dayEnd: "0",
  roomStatus: { entireHouse: false, privateRoom: false, commonRoom: false },
  bedRoomCount: 0,
  bedCount: 0,
  bathRoomCount: 0,
  houseType: {
    home: false,
    apartment: false,
    guestRoom: false,
    hotel: false,
  },
  things: {
    wifi: false,
    washingMachine: false,
    airCondition: false,
    kitchen: false,
    dryer: false,
    heating: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET__ROOM__LIST:
      return { ...state, roomList: action.value };
    case SET__ROOM__LIST__AFTER__FILTER:
      return { ...state, roomListAfterFilter: action.value };
    case SET__ROOM__LIST__AFTER__FILTER__DETAIL:
      return { ...state, roomListAfterFilterDetail: action.value };
    case ACTIVE__FILTER__TYPE:
      return {
        ...state,
        activeFilterType: action.value,
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
    case SET__ROOM__STATUS:
      return {
        ...state,
        roomStatus: { ...state.roomStatus, [action.name]: action.value },
      };
    case SET__BEDROOM__COUNT:
      return {
        ...state,
        bedRoomCount: action.value,
      };
    case SET__BED__COUNT:
      return {
        ...state,
        bedCount: action.value,
      };
    case SET__BATHROOM__COUNT:
      return {
        ...state,
        bathRoomCount: action.value,
      };
    case SET__HOUSE__TYPE:
      return {
        ...state,
        houseType: { ...state.houseType, [action.name]: action.value },
      };
    case SET__THINGS:
      return {
        ...state,
        things: { ...state.things, [action.name]: action.value },
      };
    case SET__DEFAULT:
      return {
        ...state,
        rangePrice: {
          minLength: 100000,
          minPrice: 500000,
          maxPrice: 2000000,
          progressLeft: 0,
          progressRight: 0,
        },

        roomListAfterFilterLength: 0,
        numberRoomRender: 12,
        roomStatus: {
          entireHouse: false,
          privateRoom: false,
          commonRoom: false,
        },
        bedRoomCount: 0,
        bedCount: 0,
        bathRoomCount: 0,
        houseType: {
          home: false,
          apartment: false,
          guestRoom: false,
          hotel: false,
        },
        things: {
          wifi: false,
          washingMachine: false,
          airCondition: false,
          kitchen: false,
          dryer: false,
          heating: false,
        },
      };
    case SET__RELOAD__PAGE:
      return {
        ...state,
        roomListAfterFilter: [],
        roomListAfterFilterDetail: [],
        rangePrice: {
          minLength: 100000,
          minPrice: 500000,
          maxPrice: 2000000,
          progressLeft: 0,
          progressRight: 0,
        },
        activeFilterType: "Tất cả nhà",
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
        dayStart: "0",
        dayEnd: "0",
        roomStatus: {
          entireHouse: false,
          privateRoom: false,
          commonRoom: false,
        },
        bedRoomCount: 0,
        bedCount: 0,
        bathRoomCount: 0,
        houseType: {
          home: false,
          apartment: false,
          guestRoom: false,
          hotel: false,
        },
        things: {
          wifi: false,
          washingMachine: false,
          airCondition: false,
          kitchen: false,
          dryer: false,
          heating: false,
        },
      };
  }
}
export { initalState };
export default reducer;
