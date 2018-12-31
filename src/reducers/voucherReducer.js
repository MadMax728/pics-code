import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const voucherReducer = (state = initialState.voucherData, action) => {
  switch (action.type) {
    // Get VOUCHER
    case types.GET_VOUCHERS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_VOUCHERS_SUCCEEDED:
      return {
        ...state,
        vouchers: action.payload,
        isLoading: false
      };
    case types.GET_VOUCHERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // ADD VOUCHER
    case types.ADD_VOUCHER_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.ADD_VOUCHER_SUCCEEDED:
      return {
        ...state,
        voucher: action.payload,
        isLoading: false
      };
    case types.ADD_VOUCHER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default voucherReducer;
