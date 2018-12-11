import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const verificationReducer = (state = initialState.verificationData, action) => {
  switch (action.type) {
    // Get VERIFICATIONS
    case types.GET_VERIFICATIONS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_VERIFICATIONS_SUCCEEDED:
      return {
        ...state,
        verifications: action.payload,
        isLoading: false
      };
    case types.GET_VERIFICATIONS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default verificationReducer;
