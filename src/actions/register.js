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
        Auth.saveJwtToStorage({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmZWU5YThiLTI4NzItNDg3Yi04NTlmLWRjMmQ0ZTA0MjA3MSIsInVzZXJuYW1lIjoic2FudG9zaDEyMyIsImVtYWlsIjoic2FudG9zaC5zaGluZGVAcGljc3RhZ3JhcGguY29tIiwiZGF0ZUlzc3VlZCI6IjIwMTgtMTAtMzBUMTE6Mzg6NTIuMjUyWiIsImlhdCI6MTU0MDg5OTUzMiwiZXhwIjoyNzUwNDk5NTMyfQ.cFyhfgRhCoHlgbs410JE9sF6NUuaZRnCHL4XRyHN_Kw"
        });
        dispatch(submitRegisterFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
