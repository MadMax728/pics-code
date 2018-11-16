import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const campaignReducer = (state = initialState.campaignData, action) => {
  switch (action.type) {
    // Get Campaigns
    case types.GET_CAMPAIGNS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_CAMPAIGNS_SUCCEEDED:
      return {
        ...state,
        campaigns: action.payload,
        isLoading: false
      };
    case types.GET_CAMPAIGNS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Campaign Details
    case types.GET_CAMPAIGNS_DETAILS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_CAMPAIGNS_DETAILS_SUCCEEDED:
      return {
        ...state,
        campaign: action.payload,
        isLoading: false
      };
    case types.GET_CAMPAIGNS_DETAILS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default campaignReducer;
