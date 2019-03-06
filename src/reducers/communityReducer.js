import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const communityReducer = (state = initialState.communityData, action) => {
  switch (action.type) {
    // Get User Community
    case types.GET_USER_COMMUNITY_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_USER_COMMUNITY_SUCCEEDED:
      return {
        ...state,
        userCommunity: action.payload,
        isLoading: false
      };
    case types.GET_USER_COMMUNITY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default communityReducer;
