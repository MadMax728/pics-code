import * as types from "../lib/constants/actionTypes";
import * as usersService from "../services/usersService";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getUserListStarted = () => ({
  type: types.GET_USER_LIST_STARTED
});

const getUserListSucceeded = data => ({
  type: types.GET_USER_LIST_SUCCEEDED,
  payload: data
});

const getUserListFailed = error => ({
  type: types.GET_USER_LIST_FAILED,
  payload: error,
  error: true
});

/**
 *  getUserList
 * { subscribed, unknown, likes, company }
 *  @returns {dispatch} getUserList.
 */
export const getUserList = (type = "subscribed") => {
  return dispatch => {
    dispatch(getUserListStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return usersService.getUserList(params, type).then(
      res => {
        dispatch(getUserListSucceeded(res.data.data));
      },
      error => {
        dispatch(getUserListFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};