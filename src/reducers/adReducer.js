import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const adReducer = (state = initialState.adData, action) => {
  switch (action.type) {
    // Get Ads
    case types.GET_ADS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_ADS_SUCCEEDED:
      return {
        ...state,
        ads: action.payload,
        isLoading: false
      };
    case types.GET_ADS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Ad Details
    case types.GET_AD_DETAILS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_AD_DETAILS_SUCCEEDED:
      return {
        ...state,
        ad: action.payload,
        isLoading: false
      };
    case types.GET_AD_DETAILS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

  // Create Ad
  case types.CREATE_AD_STARTED:
    return {
      ...state,
      isLoading: true,
      error: null
    };
  case types.CREATE_AD_SUCCEEDED:
    return {
      ...state,
      ad: action.payload,
      isLoading: false
    };
  case types.CREATE_AD_FAILED:
    return {
      ...state,
      isLoading: false,
      error: action.payload
    };

    default:
      return state;
  }
};

export default adReducer;
