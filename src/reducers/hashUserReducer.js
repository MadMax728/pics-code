import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const hashUserReducer = (state = initialState.hashUserData, action) => {
  switch (action.type) {
    // Get HASH USER
    case types.GET_HASH_USER_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_HASH_USER_SUCCEEDED:
      return {
        ...state,
        [action.isFor]: action.payload,
        isLoading: false
      };
    case types.GET_HASH_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default hashUserReducer;
