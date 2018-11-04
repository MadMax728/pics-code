import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const forgotPasswordReducer = (
  state = initialState.resetPasswordData,
  action
) => {
  switch (action.type) {
    case types.FORGOT_PASSWORD_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.FORGOT_PASSWORD_SUCCEEDED:
      return {
        ...state,
        password: action.payload,
        isLoading: false
      };
    case types.FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default forgotPasswordReducer;
