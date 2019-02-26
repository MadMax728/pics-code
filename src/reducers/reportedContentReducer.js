import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const reportedContentReducer = (
  state = initialState.reportedContentData,
  action
) => {
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

    // Update UPDATE_BACK_OFFICE_REPORT
    case types.UPDATE_BACK_OFFICE_REPORT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.UPDATE_BACK_OFFICE_REPORT_SUCCEEDED:
      return {
        ...state,
        [`${action.isFor}Statistics`]: action.payload,
        isLoading: false
      };
    case types.UPDATE_BACK_OFFICE_REPORT_FAILED:
      return {
        ...state,
        [`${action.isFor}Statistics`]: null,
        isLoading: false,
        error: action.payload
      };

    // Add ADD_REPORT
    case types.ADD_REPORT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.ADD_REPORT_SUCCEEDED:
      return {
        ...state,
        addReport: action.payload,
        isLoading: false
      };
    case types.ADD_REPORT_FAILED:
      return {
        ...state,
        addReport: null,
        isLoading: false,
        error: action.payload
      };

    // GET_BACK_OFFICE_REPORTED_STATISTICS
    case types.GET_BACK_OFFICE_REPORTED_STATISTICS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BACK_OFFICE_REPORTED_STATISTICS_SUCCEEDED:
      return {
        ...state,
        [`${action.isFor}Statistics`]: action.payload,
        isLoading: false
      };
    case types.GET_BACK_OFFICE_REPORTED_STATISTICS_FAILED:
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
