import * as types from "../lib/constants/actionTypes";
import * as userService from "../services";
import { Auth } from "../auth";
import { logger } from "../loggers";

const submitRegisterStarted = () => ({
  type: types.SUBMIT_REGISTER_STARTED
});

const submitRegisterSucceeded = data => ({
  type: types.SUBMIT_REGISTER_SUCCEEDED,
  payload: data
});

const submitRegisterFailed = error => ({
  type: types.SUBMIT_REGISTER_FAILED,
  payload: error,
  error: true
});

export const submitRegister = params => {
  return dispatch => {
    dispatch(submitRegisterStarted());

    return userService.submitRegister(params).then(
      res => {
        if (res.data && res.data.data) Auth.saveJwtToStorage(res.data.data);
        dispatch(submitRegisterSucceeded(res.data));
      },
      error => {
        dispatch(submitRegisterFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

const submitCompanyRegisterStarted = () => ({
  type: types.SUBMIT_COMPANY_REGISTER_STARTED
});

const submitCompanyRegisterSucceeded = data => ({
  type: types.SUBMIT_COMPANY_REGISTER_SUCCEEDED,
  payload: data
});

const submitCompanyRegisterFailed = error => ({
  type: types.SUBMIT_COMPANY_REGISTER_FAILED,
  payload: error,
  error: true
});

export const submitCompanyRegister = params => {
  return dispatch => {
    dispatch(submitCompanyRegisterStarted());

    return userService.submitCompanyRegister(params).then(
      res => {
        if (res.data && res.data.data) Auth.saveJwtToStorage(res.data.data);
        dispatch(submitCompanyRegisterSucceeded(res.data));
      },
      error => {
        dispatch(submitCompanyRegisterFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};
