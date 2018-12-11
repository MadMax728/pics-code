import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const adminReducer = (state = initialState.adminData, action) => {
  switch (action.type) {
    // Get ADMINS
    case types.GET_ADMINS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ADMINS_SUCCEEDED:
      return {
        ...state,
        admins: action.payload,
        isLoading: false
      };
    case types.GET_ADMINS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default adminReducer;
