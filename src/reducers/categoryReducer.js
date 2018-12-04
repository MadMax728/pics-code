import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const categoryReducer = (state = initialState.categoryData, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_CATEGORY_SUCCEEDED:
      return {
        ...state,
        categories: action.payload,
        isLoading: false
      };
    case types.GET_CATEGORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default categoryReducer;
