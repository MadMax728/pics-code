import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const profileSettingsReducer = (
  state = initialState.businessProfileData,
  action
) => {
  switch (action.type) {
    case types.ACTIVATE_BUSINESS_PROFILE_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.ACTIVATE_BUSINESS_PROFILE_SUCCEEDED:
      return {
        ...state,
        businessProfileActivationData: action.payload,
        isLoading: false
      };
    case types.ACTIVATE_BUSINESS_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_BILLS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BILLS_SUCCEEDED:
      return {
        ...state,
        billsData: action.payload,
        isLoading: false
      };
    case types.GET_BILLS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_DOWNLOAD_DATA_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_DOWNLOAD_DATA_SUCCEEDED:
      return {
        ...state,
        downloadData: action.payload,
        isLoading: false
      };
    case types.GET_DOWNLOAD_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default profileSettingsReducer;
