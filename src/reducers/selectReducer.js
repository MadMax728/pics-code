import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const selectReducer = (state = initialState.selectData, action) => {
  switch (action.type) {

    // Get Select
    case types.GET_SELECT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_SELECT_SUCCEEDED:
      return {
        ...state,
        [action.isFor]: action.payload,
        isLoading: false
      };
    case types.GET_SELECT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Static Data,  In future would remove as when require
    case types.GET_TARGET_GROUP_SUCCEEDED:
      return {
        ...state,
        targetGroups: action.payload,
        isLoading: false
      };

    // Static Data,  In future would remove as when require
    case types.GET_LANGUAGE_SUCCEEDED:
      return {
        ...state,
        languages: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default selectReducer;
