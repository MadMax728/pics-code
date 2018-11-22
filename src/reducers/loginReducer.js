import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const loginReducer = (state = initialState.loginData, action) => {
  switch (action.type) {
    case types.SUBMIT_LOGIN_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SUBMIT_LOGIN_SUCCEEDED:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case types.SUBMIT_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GENERATE_OTP_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GENERATE_OTP_SUCCEEDED:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case types.GENERATE_OTP_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
