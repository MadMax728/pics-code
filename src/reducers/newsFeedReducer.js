import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const newsFeedReducer = (state = initialState.newsFeedData, action) => {
  switch (action.type) {
    case types.GET_NEWS_FEED_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_NEWS_FEED_SUCCEEDED:
      return {
        ...state,
        newsFeed: action.payload,
        isLoading: false
      };
    case types.GET_NEWS_FEED_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default newsFeedReducer;
