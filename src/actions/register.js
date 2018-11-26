import React, { Component } from "react";
import * as types from "../lib/constants/actionTypes";
import * as userService from "../services/userService";
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
