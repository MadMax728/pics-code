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

    // Get User List with type
    case types.GET_FOLLOW_USER_LIST_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_FOLLOW_USER_LIST_SUCCEEDED:
      return {
        ...state,
        [action.isFor]: action.payload,
        isLoading: false
      };
    case types.GET_FOLLOW_USER_LIST_FAILED:
      return {
        ...state,
        userList: [],
        isLoading: false,
        error: action.payload
      };

    // Get User Pending List with type
    case types.GET_PENDING_USER_LIST_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_PENDING_USER_LIST_SUCCEEDED:
      return {
        ...state,
        pendingUserList: action.payload,
        isLoading: false
      };
    case types.GET_PENDING_USER_LIST_FAILED:
      return {
        ...state,
        pendingUserList: [],
        isLoading: false,
        error: action.payload
      };

    // Accept Request
    case types.ACCEPT_REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.ACCEPT_REQUEST_SUCCEEDED:
      return {
        ...state,
        isAcceptRequest: action.payload,
        isLoading: false
      };
    case types.ACCEPT_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Block Request
    case types.BLOCK_USER_REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.BLOCK_USER_REQUEST_SUCCEEDED:
      return {
        ...state,
        isBlockRequestResult: action.payload,
        isLoading: false
      };
    case types.BLOCK_USER_REQUEST_FAILED:
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
