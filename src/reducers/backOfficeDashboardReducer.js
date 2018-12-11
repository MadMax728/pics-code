import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const backOfficeDashboardReducer = (state = initialState.backOfficeDashboardData, action) => {
  switch (action.type) {
    // Get BACK_OFFICE_DASHBOARD
    case types.GET_BACK_OFFICE_DASHBOARD_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_BACK_OFFICE_DASHBOARD_SUCCEEDED:
      return {
        ...state,
        backOfficeDashboard: action.payload,
        isLoading: false
      };
    case types.GET_BACK_OFFICE_DASHBOARD_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default backOfficeDashboardReducer;
