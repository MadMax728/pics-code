import * as types from "../lib/constants/actionTypes";
import * as usersService from "../services/usersService";
import { logger } from "../loggers";
import { Auth } from "../auth";
const getSearchSucceeded = (data, keyword) => ({
  type: types.GET_SEARCH_SUCCEEDED,
  payload: data,
  keyword: keyword
});

const getSearchStarted = () => ({
  type: types.GET_SEARCH_STARTED
});

const getSearchFailed = (data) => ({
  type: types.GET_SEARCH_FAILED,
  payload: data,
  error: true
});


export const getSearch = (keyword, page = 1, limit = 100) => {
  return dispatch => {
  };
};

export const getSearchForHeader = (keyword, page = 1, limit = 100) => {
  return dispatch => {
    dispatch(getSearchStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };
    return usersService.searchUsers(keyword, page, limit, params).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getSearchSucceeded(res.data.data, keyword));
      },
      error => {
        dispatch(getSearchFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );

  };
};
