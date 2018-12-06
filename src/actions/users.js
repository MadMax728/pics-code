import * as types from "../lib/constants/actionTypes";
import * as usersService from "../services/usersService";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getSubscribersStarted = () => ({
  type: types.GET_SUBSCRIBERS_STARTED
});

const getSubscribersSucceeded = data => ({
  type: types.GET_SUBSCRIBERS_SUCCEEDED,
  payload: data
});

const getSubscribersFailed = error => ({
  type: types.GET_SUBSCRIBERS_FAILED,
  payload: error,
  error: true
});

/**
 * getSubscribers
 */
export const getSubscribers = () => {
  return dispatch => {
    dispatch(getSubscribersStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return usersService.getSubscribers(params).then(
      res => {
        dispatch(getSubscribersSucceeded(res.data.data));
      },
      error => {
        dispatch(getSubscribersFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};