import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const messageReducer = (state = initialState.aboutData, action) => {
  switch (action.type) {
    case types.GET_ABOUT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ABOUT_SUCCEEDED:
      return {
        ...state,
        about: action.payload,
        isLoading: false
      };
    case types.GET_ABOUT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default messageReducer;
