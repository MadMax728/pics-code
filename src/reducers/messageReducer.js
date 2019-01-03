import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const messageReducer = (state = initialState.messagesData, action) => {
  switch (action.type) {
    case types.GET_MESSAGES_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_MESSAGES_SUCCEEDED:
      return {
        ...state,
        messages: action.payload,
        isLoading: false
      };
    case types.GET_MESSAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default messageReducer;
