import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const registerReducer = (state = initialState.registerData, action) => {
  switch (action.type) {
    case types.SUBMIT_REGISTER_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SUBMIT_REGISTER_SUCCEEDED:
      return {
        ...state,
        registeredUser: action.payload,
        isLoading: false
      };
    case types.SUBMIT_REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.SUBMIT_COMPANY_REGISTER_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SUBMIT_COMPANY_REGISTER_SUCCEEDED:
      return {
        ...state,
        registeredCompanyUser: action.payload,
        isLoading: false
      };
    case types.SUBMIT_COMPANY_REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default registerReducer;
