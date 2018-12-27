import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const usersReducers = (state = initialState.usersData, action) => {
  switch (action.type) {
    case types.GET_USER_LIST_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_USER_LIST_SUCCEEDED:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
    case types.GET_USER_LIST_FAILED:
      return {
        ...state,
        users: [], // Remove after - Getting blank array from API response
        isLoading: false,
        error: action.payload
      };

    // Send Request
    case types.SEND_REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.SEND_REQUEST_SUCCEEDED:
      return {
        ...state,
        isRequestSend: action.payload,
        isLoading: false
      };
    case types.SEND_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Subscribe / Unsubscribe
    case types.GET_UNSUBSCRIBE_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_UNSUBSCRIBE_SUCCEEDED:
      return {
        ...state,
        isUnsubscribed: action.payload,
        isLoading: false
      };
    case types.GET_UNSUBSCRIBE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default usersReducers;
