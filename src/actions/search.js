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
        dispatch(getSearchSucceeded(res.data.data.docs, keyword));
      },
      error => {
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );

  };
};
