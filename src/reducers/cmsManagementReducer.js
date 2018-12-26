import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const cmsManagementReducer = (state = initialState.cmsManagementData, action) => {
  switch (action.type) {
    // Get CMS_MANAGEMENT
    case types.GET_CMS_MANAGEMENT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_CMS_MANAGEMENT_SUCCEEDED:
      return {
        ...state,
        cmsManagement: action.payload,
        isLoading: false
      };
    case types.GET_CMS_MANAGEMENT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default cmsManagementReducer;
