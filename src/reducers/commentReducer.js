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
        comments: [],
        isLoading: false,
        error: action.payload
      };

    // Set Comments
    case types.SET_COMMENTS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SET_COMMENTS_SUCCEEDED:
      state.commentData[action.commentsData.id] = action.commentsData.data;
      state.isLoading = false;
      return state;

    case types.SET_COMMENTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Push Comments
    case types.PUSH_COMMENT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case types.PUSH_COMMENT_SUCCEEDED:
      let arr = state[action.payload.id];
      arr.push(action.payload.data);
      state.commentData[action.payload.id] = arr;
      state.isLoading = false;
      return state;

    case types.PUSH_COMMENT_FAILED:
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
