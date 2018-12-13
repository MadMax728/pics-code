import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const reviewReducer = (state = initialState.reviewData, action) => {
  switch (action.type) {
    // Get Back Office Review Campaigns and Ads
    case types.GET_BACK_OFFICE_REVIEW_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BACK_OFFICE_REVIEW_SUCCEEDED:
      return {
        ...state,
        [action.isFor]: action.payload,
        isLoading: false
      };
    case types.GET_BACK_OFFICE_REVIEW_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reviewReducer;
