import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const dashboardReducer = (state = initialState.dashboardData, action) => {
  switch (action.type) {
    // Get DASHBOARD
    case types.GET_DASHBOARD_STARTED:
      return {
        ...state,
        isLoading: true,
        [`isLoading${ action.isFor}`]: true,
        [`error${action.isFor}`]: null
      };
    case types.GET_DASHBOARD_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        [action.isFor]: action.payload,
        [`isLoading${ action.isFor}`]: false
      };
    case types.GET_DASHBOARD_FAILED:
      return {
        ...state,
        [action.isFor]: [],
        isLoading: false,
        [`isLoading${ action.isFor}`]: false,
        [`error${action.isFor}`]: action.payload
      };
    default:
      return state;
  }
};

export default dashboardReducer;
