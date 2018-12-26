import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const isLoading = "isLoading";
const error = "error";

const dashboardReducer = (state = initialState.dashboardData, action) => {
  switch (action.type) {
    // Get DASHBOARD
    case types.GET_DASHBOARD_STARTED:
      return {
        ...state,
        // isLoading: true,
        // error: null
        [isLoading+action.isFor]: true,
        [error+action.isFor]: null
      };
    case types.GET_DASHBOARD_SUCCEEDED:
      return {
        ...state,
        [action.isFor]: action.payload,
        [isLoading+action.isFor]: false
        // isLoading: false
      };
    case types.GET_DASHBOARD_FAILED:
      return {
        ...state,
        // isLoading: false,
        // error: action.payload
        [isLoading+action.isFor]: false,
        [error+action.isFor]: action.payload
      };
    default:
      return state;
  }
};

export default dashboardReducer;
