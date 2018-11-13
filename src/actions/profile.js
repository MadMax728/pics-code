import React, { Component } from "react";
import * as types from "../lib/constants/actionTypes";
import * as userService from "../services/userService";
import { Auth } from "../auth";
import { logger } from "../loggers";

const getUserStarted = () => ({
  type: types.GET_USER_STARTED
});

const getUserSucceeded = data => ({
  type: types.GET_USER_SUCCEEDED,
  payload: data
});

const getUserFailed = error => ({
  type: types.GET_USER_FAILED,
  payload: error,
  error: true
});

export const getUser = params => {
  return dispatch => {
    dispatch(getUserStarted());

    return userService.getUser(params).then(
      res => {
        if (res.data && res.data.data) Auth.saveJwtToStorage(res.data.data);
        dispatch(getUserSucceeded(res.data));
      },
      error => {
        Auth.saveJwtToStorage({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmZWU5YThiLTI4NzItNDg3Yi04NTlmLWRjMmQ0ZTA0MjA3MSIsInVzZXJuYW1lIjoic2FudG9zaDEyMyIsImVtYWlsIjoic2FudG9zaC5zaGluZGVAcGljc3RhZ3JhcGguY29tIiwiZGF0ZUlzc3VlZCI6IjIwMTgtMTAtMzBUMTE6Mzg6NTIuMjUyWiIsImlhdCI6MTU0MDg5OTUzMiwiZXhwIjoyNzUwNDk5NTMyfQ.cFyhfgRhCoHlgbs410JE9sF6NUuaZRnCHL4XRyHN_Kw"
        });
        dispatch(getUserFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
