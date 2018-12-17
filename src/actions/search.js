import * as types from "../lib/constants/actionTypes";
import * as privacyService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

// Set Profile Privacy
const getSearchStarted = () => ({
  type: types.GET_SEARCH_STARTED
});

const getSearchSucceeded = data => ({
  type: types.GET_SEARCH_SUCCEEDED,
  payload: data
});

const getSearchPrivacyFailed = error => ({
  type: types.GET_SEARCH_FAILED,
  payload: error,
  error: true
});

export const getSearch = data => {
  console.log("inSearchFuction", data);
  return dispatch => {
    dispatch(getSearchSucceeded(data));
  };
};
