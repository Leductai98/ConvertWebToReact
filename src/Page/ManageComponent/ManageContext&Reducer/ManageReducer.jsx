import { SET__PAYMENT__LIST } from "./ManageConstant";

const manageInitalState = {
  paymentList: [],
};

const manageReducer = (state, action) => {
  switch (action.type) {
    case SET__PAYMENT__LIST:
      return {
        ...state,
        paymentList: action.value,
      };
  }
};

export { manageInitalState };
export default manageReducer;
