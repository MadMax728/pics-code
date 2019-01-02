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
    
    // Get CMS Detail
    case types.UPDATE_CMS_STARTED:
    case types.CREATE_CMS_STARTED:
    case types.GET_CMS_DETAIL_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.UPDATE_CMS_SUCCEEDED:
    case types.CREATE_CMS_SUCCEEDED:
    case types.GET_CMS_DETAIL_SUCCEEDED:
      return {
        ...state,
        cmsDetail: action.payload,
        isLoading: false
      };
    case types.UPDATE_CMS_FAILED:
    case types.CREATE_CMS_FAILED:
    case types.GET_CMS_DETAIL_FAILED:
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
