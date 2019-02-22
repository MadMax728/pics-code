import * as types from "../lib/constants/actionTypes";
import * as userService from "../services";
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
  type: types.GENERATE_OTP_FAILED,
  payload: error,
  error: true
});
const generateOTPStarted = () => ({
  type: types.GENERATE_OTP_STARTED
});

const generateOTPSucceeded = data => ({
  type: types.GENERATE_OTP_SUCCEEDED,
  payload: data
});

const generateOTPFailed = error => ({
  type: types.GENERATE_OTP_FAILED,
  payload: error,
  error: true
});

export const submitLogin = params => {
  return dispatch => {
    dispatch(submitLoginStarted());

    return userService.submitLogin(params).then(
      res => {
        if (res.data && res.data.data) {
          Auth.saveJwtToStorage(res.data.data);
          dispatch(submitLoginSucceeded(res.data));
        }
      },
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

export const submitAdminLogin = params => {
  return dispatch => {
    dispatch(submitLoginStarted());

    return userService.validateOTP(params).then(
      res => {
        const authResponse = {
          admin_access_token: res.data.data.token
        };

        Auth.saveJwtToStorage(authResponse);
        dispatch(submitLoginSucceeded(res.data));
      },
      error => {
        // const authResponse = {
        //   admin_access_token: "deqd"
        // };
        // Auth.saveJwtToStorage(authResponse);
        dispatch(submitLoginFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

export const generateOTP = params => {
  return dispatch => {
    dispatch(generateOTPStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return userService.generateOTP(params, header).then(
      res => {
        const authResponse = {
          admin_access_token: "deqd"
        };

        Auth.saveJwtToStorage(authResponse);
        dispatch(generateOTPSucceeded(res.data));
      },
      error => {
        const authResponse = {
          admin_access_token: "deqd"
        };
        Auth.saveJwtToStorage(authResponse);
        dispatch(generateOTPFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
