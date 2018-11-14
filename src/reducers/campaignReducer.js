import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const campaignReducer = (state = initialState.campaignData, action) => {
  switch (action.type) {
    case types.GET_CAMPAIGNS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_CAMPAIGNS_SUCCEEDED:
      return {
        ...state,
        landingCampaigns: action.payload,
        isLoading: false
      };
    case types.GET_CAMPAIGNS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_COMPANY_CAMPAIGNS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_COMPANY_CAMPAIGNS_SUCCEEDED:
      return {
        ...state,
        companyCampaigns: action.payload,
        isLoading: false
      };
    case types.GET_COMPANY_CAMPAIGNS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_CREATOR_CAMPAIGNS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_CREATOR_CAMPAIGNS_SUCCEEDED:
      return {
        ...state,
        creatorCampaigns: action.payload,
        isLoading: false
      };
    case types.GET_CREATOR_CAMPAIGNS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_PARTICIPANT_CAMPAIGNS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_PARTICIPANT_CAMPAIGNS_SUCCEEDED:
      return {
        ...state,
        participantCampaigns: action.payload,
        isLoading: false
      };
    case types.GET_PARTICIPANT_CAMPAIGNS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case types.GET_EXPLORE_CAMPAIGNS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_EXPLORE_CAMPAIGNS_SUCCEEDED:
      return {
        ...state,
        exploreCampaigns: action.payload,
        isLoading: false
      };
    case types.GET_EXPLORE_CAMPAIGNS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // case types.SET_CAMPAIGN_DATA:
    //   return {
    //     ...state,
    //     [action.payload.prop]: action.payload.data
    //   }

    // case types.SET_CAMPAIGN_STARTED:
    //   return {
    //     ...state,
    //     [action.payload.prop]: true
    //   }

    // case types.SET_CAMPAIGN_FAILED:
    //   return {
    //     ...state,
    //     [action.payload.prop]: false
    //   }

    default:
      return state;
  }
};

export default campaignReducer;
