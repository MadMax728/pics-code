import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const subscribeReducer = (state = initialState.subscribeData, action) => {
  switch (action.type) {
    // Get Select
    case types.GET_FOLLOW_USER_LIST_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_FOLLOW_USER_LIST_SUCCEEDED:
      return {
        ...state,
        [action.isFor]: action.payload,
        isLoading: false
      };
    case types.GET_FOLLOW_USER_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default subscribeReducer;
