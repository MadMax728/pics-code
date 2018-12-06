import * as types from "../lib/constants/actionTypes";
import * as userService from "../services";
import { Auth } from "../auth";
import { logger } from "../loggers";

const submitResetPasswordStarted = () => ({
  type: types.FORGOT_PASSWORD_STARTED
});

const submitResetPasswordSucceeded = data => ({
  type: types.FORGOT_PASSWORD_SUCCEEDED,
  payload: data
});

const submitResetPasswordFailed = error => ({
  type: types.FORGOT_PASSWORD_FAILED,
  payload: error,
  error: true
});

const setNewPasswordStarted = () => ({
  type: types.SET_NEW_PASSWORD_STARTED
});

const setNewPasswordSucceeded = data => ({
  type: types.SET_NEW_PASSWORD_SUCCEEDED,
  payload: data
});

const setNewPasswordFailed = error => ({
  type: types.SET_NEW_PASSWORD_FAILED,
  payload: error,
  error: true
});

export const submitResetPassword = params => {
  return dispatch => {
    dispatch(submitResetPasswordStarted());

    return userService.submitResetPassword(params).then(
      res => {
        if (res.data && res.data.data) Auth.saveJwtToStorage(res.data.data);
        dispatch(submitResetPasswordSucceeded(res.data));
      },
      error => {
        dispatch(submitResetPasswordFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

export const setNewPassword = params => {
  return dispatch => {
    dispatch(setNewPasswordStarted());

    return userService.setNewPassword(params).then(
      res => {
        if (res.data && res.data.data) Auth.saveJwtToStorage(res.data.data);
        dispatch(setNewPasswordSucceeded(res.data));
      },
      error => {
        dispatch(setNewPasswordFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
