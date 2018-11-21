import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const savedReducer = (state = initialState.savedData, action) => {
  switch (action.type) {
    case types.GET_SAVED_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_SAVED_SUCCEEDED:
      return {
        ...state,
        saved: action.payload,
        isLoading: false
      };
    case types.GET_SAVED_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default savedReducer;
