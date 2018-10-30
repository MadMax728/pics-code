import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const socialReducer = (state = initialState.userData, action) => {
  switch (action.type) {
    case types.SOCIAL_NETWORKS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SOCIAL_NETWORKS_SUCCEEDED:
      return {
        ...state,
        socialNetworks: action.payload,
        isLoading: false
      };
    case types.SOCIAL_NETWORKS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default socialReducer;
