import * as types from "../lib/constants/actionTypes";

const getSearchSucceeded = data => ({
  type: types.GET_SEARCH_SUCCEEDED,
  payload: data
});

export const getSearch = data => {
  return dispatch => {
    dispatch(getSearchSucceeded(data));
  };
};
