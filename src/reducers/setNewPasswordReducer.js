import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const setNewPasswordReducer = (
  state = initialState.newPasswordData,
  action
) => {
  switch (action.type) {
    case types.SET_NEW_PASSWORD_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SET_NEW_PASSWORD_SUCCEEDED:
      return {
        ...state,
        password: action.payload,
        isLoading: false
      };
    case types.SET_NEW_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default setNewPasswordReducer;
