import * as types from "../lib/constants/actionTypes";
import * as userService from "../services/userService";
import { logger } from "../loggers";

const submitLoginStarted = () => ({
  type: types.SUBMIT_LOGIN_STARTED
});

const submitLoginSucceeded = data => ({
  type: types.SUBMIT_LOGIN_SUCCEEDED,
  payload: data
});

const submitLoginFailed = error => ({
  type: types.SUBMIT_LOGIN_FAILED,
  payload: error,
  error: true
});

export const submitLogin = params => {
  return dispatch => {
    dispatch(submitLoginStarted());

    return userService.submitLogin(params).then(
      res => dispatch(submitLoginSucceeded(res.data)),
      error => {
        dispatch(submitLoginFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
