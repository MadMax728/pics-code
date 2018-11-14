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
        campaigns: action.payload,
        isLoading: false
      };
    case types.GET_CAMPAIGNS_FAILED:
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
