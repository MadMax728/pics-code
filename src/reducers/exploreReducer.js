import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const exploreReducer = (state = initialState.exploreData, action) => {
  switch (action.type) {
    // Get Explores
    case types.GET_EXPLORES_STARTED:
      console.log(types.GET_EXPLORES_STARTED);

      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_EXPLORES_SUCCEEDED:
      return {
        ...state,
        explores: action.payload,
        isLoading: false
      };
    case types.GET_EXPLORES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default exploreReducer;
