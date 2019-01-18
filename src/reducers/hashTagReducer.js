import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const hashTagReducer = (state = initialState.hashTagData, action) => {
  switch (action.type) {
    // Get HASH USER
    case types.GET_HASH_TAG_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_HASH_TAG_SUCCEEDED:
      return {
        ...state,
        [action.isFor]: action.payload,
        isLoading: false
      };
    case types.GET_HASH_TAG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Add HASH USER
    case types.ADD_HASH_TAG_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.ADD_HASH_TAG_SUCCEEDED:
      return {
        ...state,
        addedHashTags: action.payload,
        isLoading: false
      };
    case types.ADD_HASH_TAG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default hashTagReducer;
