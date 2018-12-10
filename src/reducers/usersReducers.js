import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const usersReducers = (state = initialState.usersData, action) => {
  switch (action.type) {
    case types.GET_SUBSCRIBERS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_SUBSCRIBERS_SUCCEEDED:
      return {
        ...state,
        subscribers: action.payload,
        isLoading: false
      };
    case types.GET_SUBSCRIBERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default usersReducers;