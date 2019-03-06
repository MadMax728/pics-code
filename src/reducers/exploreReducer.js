import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const exploreReducer = (state = initialState.exploreData, action) => {
  switch (action.type) {
    // Get EXPLORE
    case types.GET_EXPLORES_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_EXPLORES_SUCCEEDED:
      return {
        ...state,
        items: action.payload.data,
        pagination: action.payload.pagination,
        isLoading: false
      };
    case types.GET_EXPLORE_FAILED:
      return {
        ...state,
        items: [],
        pagination: {},
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default exploreReducer;
