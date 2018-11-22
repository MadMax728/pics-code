import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const likeReducer = (state = initialState.likeData, action) => {
  switch (action.type) {
    case types.LIKE_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.LIKE_SUCCEEDED:
      return {
        ...state,
        like: action.payload,
        isLoading: false
      };
    case types.LIKE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default likeReducer;
