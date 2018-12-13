import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const reviewReducer = (state = initialState.reviewData, action) => {
  switch (action.type) {
    // Get Review Campaigns
    case types.GET_BACK_OFFICE_REVIEW_CAMPAIGNS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BACK_OFFICE_REVIEW_CAMPAIGNS_SUCCEEDED:
      return {
        ...state,
        campaigns: action.payload,
        isLoading: false
      };
    case types.GET_BACK_OFFICE_REVIEW_CAMPAIGNS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Get Review Ads
    case types.GET_BACK_OFFICE_REVIEW_ADS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BACK_OFFICE_REVIEW_ADS_SUCCEEDED:
      return {
        ...state,
        ads: action.payload,
        isLoading: false
      };
    case types.GET_BACK_OFFICE_REVIEW_ADS_FAILED:
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
