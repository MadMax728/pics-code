import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const searchReducer = (state = initialState.searchData, action) => {
  switch (action.type) {
    case types.GET_SEARCH_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_SEARCH_SUCCEEDED:
      return {
        ...state,
        searchKeyword: action.keyword,
        users: action.payload.docs,
        page: action.payload.page,
        pages: action.payload.pages,
        isLoading: false
      };
    case types.GET_SEARCH_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
