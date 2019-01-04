import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const reportedContentReducer = (state = initialState.reportedContentData, action) => {
  switch (action.type) {
    // Get BACK_OFFICE_REPORTED_CONTENT
    case types.GET_BACK_OFFICE_REPORTED_CONTENT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BACK_OFFICE_REPORTED_CONTENT_SUCCEEDED:
      return {
        ...state,
        [action.isFor]: action.payload,
        isLoading: false
      };
    case types.GET_BACK_OFFICE_REPORTED_CONTENT_FAILED:
      return {
        ...state,
        [action.isFor]: [],
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reportedContentReducer;
