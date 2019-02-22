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

    // GET_BACK_OFFICE_REVIEW_STATISTICS
    case types.GET_BACK_OFFICE_REVIEW_STATISTICS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BACK_OFFICE_REVIEW_STATISTICS_SUCCEEDED:
      return {
        ...state,
        [`${action.isFor}Statistics`]: action.payload,
        isLoading: false
      };
    case types.GET_BACK_OFFICE_REVIEW_STATISTICS_FAILED:
      return {
        ...state,
        [action.isFor]: [],
        isLoading: false,
        error: action.payload
      };

    // Update UPDATE_BACK_OFFICE_REVIEW
    case types.UPDATE_BACK_OFFICE_REVIEW_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.UPDATE_BACK_OFFICE_REVIEW_SUCCEEDED:
      return {
        ...state,
        [`${action.isFor}Statistics`]: action.payload,
        isLoading: false
      };
    case types.UPDATE_BACK_OFFICE_REVIEW_FAILED:
      return {
        ...state,
        [`${action.isFor}Statistics`]: null,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reviewReducer;
