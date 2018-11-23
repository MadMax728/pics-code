import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const commentReducer = (state = initialState.commentData, action) => {
  switch (action.type) {
    case types.GET_COMMENT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMMENT_SUCCEEDED:
      return {
        ...state,
        comments: action.payload,
        isLoading: false
      };
    case types.GET_COMMENT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default commentReducer;
