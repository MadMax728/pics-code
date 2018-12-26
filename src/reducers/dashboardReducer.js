import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const dashboardReducer = (state = initialState.dashboardData, action) => {
  switch (action.type) {
    // Get DASHBOARD
    case types.GET_DASHBOARD_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_DASHBOARD_SUCCEEDED:
      return {
        ...state,
        [action.isFor]: action.payload,
        isLoading: false
      };
    case types.GET_DASHBOARD_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default dashboardReducer;
