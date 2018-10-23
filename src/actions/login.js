import * as types from "../lib/constants/actionTypes";
import * as userService from "../services/userService";
import { logger } from "../loggers";
import { Auth } from "../auth";

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
      res => {
        const authResponse = {
          access_token: "12222",
          refresh_token: false,
          expires_in: "22222",
          token_type: "bearer",
          is_admin: true,
          user_type: "admin"
        };

        Auth.saveJwtToStorage(authResponse);
        dispatch(submitLoginSucceeded(res.data));
      },
      error => {
        const authResponse = {
          access_token: "12222",
          refresh_token: false,
          expires_in: "22222",
          token_type: "bearer",
          is_admin: true,
          user_type: "admin"
        };
        Auth.saveJwtToStorage(authResponse);
        dispatch(submitLoginFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

export const submitAdminLogin = params => {
  return dispatch => {
    dispatch(submitLoginStarted());

    return userService.submitLogin(params).then(
      res => {
        const authResponse = {
          admin_access_token: "deqd"
        };

        Auth.saveJwtToStorage(authResponse);
        dispatch(submitLoginSucceeded(res.data));
      },
      error => {
        const authResponse = {
          admin_access_token: "deqd"
        };
        Auth.saveJwtToStorage(authResponse);
        dispatch(submitLoginFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
