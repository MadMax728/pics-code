import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const commentReducer = (state = initialState.commentData, action) => {
  switch (action.type) {
    // Get comment
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
        comments: [],
        isLoading: false,
        error: action.payload
      };

    //  Add Comments
    case types.ADD_COMMENT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.ADD_COMMENT_SUCCEEDED:
      return {
        ...state,
        comment: action.payload,
        isLoading: false
      };
    case types.ADD_COMMENT_FAILED:
      return {
        ...state,
        comment: [],
        isLoading: false,
        error: action.payload
      };

    // Delete Comment
    case types.DELETE_COMMENT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DELETE_COMMENT_SUCCEEDED:
      return {
        ...state,
        comment: action.payload,
        isLoading: false
      };
    case types.DELETE_COMMENT_FAILED:
      return {
        ...state,
        comment: [],
        isLoading: false,
        error: action.payload
      };

    // Edit Comment
    case types.EDIT_COMMENT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.EDIT_COMMENT_SUCCEEDED:
      return {
        ...state,
        comment: action.payload,
        isLoading: false
      };
    case types.EDIT_COMMENT_FAILED:
      return {
        ...state,
        comment: [],
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default commentReducer;
