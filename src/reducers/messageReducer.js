import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const messageReducer = (state = initialState.messagesData, action) => {
  switch (action.type) {
    case types.GET_MESSAGES_STARTED:
      return {
        ...state,
        isLoading: true,
        lastEvaluatedKeys: undefined,
        error: null
      };
    case types.GET_MESSAGES_SUCCEEDED:
      return {
        ...state,
        messages: action.payload,
        fromTime: action.fromTime,
        toTime: action.toTime,
        isLoading: false
      };
    case types.GET_MESSAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        lastEvaluatedKeys: undefined,
        error: action.payload
      };
    default:
      return state;
  }
};

export default messageReducer;
