import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const profileReducer = (state = initialState.userDataByUsername, action) => {
  switch (action.type) {
    case types.GET_USER_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_USER_SUCCEEDED:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case types.GET_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.UPLOAD_IMAGE_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.UPLOAD_IMAGE_SUCCEEDED:
      return {
        ...state,
        imageData: action.payload,
        isLoading: false
      };
    case types.UPLOAD_IMAGE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.UPDATE_PROFILE_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.UPDATE_PROFILE_SUCCEEDED:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case types.UPDATE_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default profileReducer;
