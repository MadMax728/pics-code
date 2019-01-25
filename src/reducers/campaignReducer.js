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
        campaigns: [], // Remove this after API response issue resolved from backend
        isLoading: false,
        error: action.payload
      };

    // Campaign Details
    case types.GET_CAMPAIGN_DETAILS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_CAMPAIGN_DETAILS_SUCCEEDED:
      return {
        ...state,
        campaign: action.payload,
        isLoading: false
      };
    case types.GET_CAMPAIGN_DETAILS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Get Favourite Campaigns
    case types.GET_FAVOURITE_CAMPAIGNS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_FAVOURITE_CAMPAIGNS_SUCCEEDED:
      return {
        ...state,
        favouriteCampaign: action.payload,
        isLoading: false
      };
    case types.GET_FAVOURITE_CAMPAIGNS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Create Campaign
    case types.CREATE_CAMPAIGN_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.CREATE_CAMPAIGN_SUCCEEDED:
      return {
        ...state,
        campaign: action.payload,
        isLoading: false
      };
    case types.CREATE_CAMPAIGN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Update Campaign
    case types.UPDATE_CAMPAIGN_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.UPDATE_CAMPAIGN_SUCCEEDED:
      return {
        ...state,
        campaign: action.payload,
        isLoading: false
      };
    case types.UPDATE_CAMPAIGN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };


    // Add Participants
    case types.ADD_PARTICIPANTS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.ADD_PARTICIPANTS_SUCCEEDED:
      return {
        ...state,
        isAddParticipant: action.payload,
        isLoading: false
      };
    case types.ADD_PARTICIPANTS_FAILED:
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
