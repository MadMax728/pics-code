import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const lastEvaluateKeyReducer = (
  state = initialState.lastEvaluatedKey,
  action
) => {
  switch (action.type) {
    case types.GET_LAST_EVALUATE_KEYS_SUCCEEDED:
      return {
        ...state,
        keys: action.payload
      };
    default:
      return state;
  }
};

export default lastEvaluateKeyReducer;
