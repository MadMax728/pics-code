import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const privacyReducer = (state = initialState.profilePrivacyData, action) => {
  switch (action.type) {
    case types.SET_PROFILE_PRIVACY_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SET_PROFILE_PRIVACY_SUCCEEDED:
      return {
        ...state,
        profilePrivacyData: action.payload,
        isLoading: false
      };
    case types.SET_PROFILE_PRIVACY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.SET_PROFILE_PERSONALIZED_ADVERTISE_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SET_PROFILE_PERSONALIZED_ADVERTISE_SUCCEEDED:
      return {
        ...state,
        profilePrivacyData: action.payload,
        isLoading: false
      };
    case types.SET_PROFILE_PERSONALIZED_ADVERTISE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.SET_CHANGE_EMAIL_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SET_CHANGE_EMAIL_SUCCEEDED:
      return {
        ...state,
        profilePrivacyData: action.payload,
        isLoading: false
      };
    case types.SET_CHANGE_EMAIL_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.SET_CHANGE_PASSWORD_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SET_CHANGE_PASSWORD_SUCCEEDED:
      return {
        ...state,
        profilePrivacyData: action.payload,
        isLoading: false
      };
    case types.SET_CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.SET_CHANGE_INVOICE_ADDRESS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SET_CHANGE_INVOICE_ADDRESS_SUCCEEDED:
      return {
        ...state,
        profilePrivacyData: action.payload,
        isLoading: false
      };
    case types.SET_CHANGE_INVOICE_ADDRESS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.DELETE_SEARCH_HISTORY_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DELETE_SEARCH_HISTORY_SUCCEEDED:
      return {
        ...state,
        profilePrivacyData: action.payload,
        isLoading: false
      };
    case types.DELETE_SEARCH_HISTORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.DEACTIVATE_ACCOUNT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.DEACTIVATE_ACCOUNT_SUCCEEDED:
      return {
        ...state,
        profilePrivacyData: action.payload,
        isLoading: false
      };
    case types.DEACTIVATE_ACCOUNT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default privacyReducer;
