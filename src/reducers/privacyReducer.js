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
    default:
      return state;
  }
};

export default privacyReducer;
