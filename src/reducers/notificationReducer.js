import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const notificationReducer = (state = initialState.notificationData, action) => {
  switch (action.type) {
    case types.GET_NOTIFICATION_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_NOTIFICATION_SUCCEEDED:
      return {
        ...state,
        notification: action.payload,
        isLoading: false
      };
    case types.GET_NOTIFICATION_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default notificationReducer;
