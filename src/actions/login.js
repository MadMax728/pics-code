import * as type from "./types";
import { MockLogin } from "../api/fakeApi";

export const login = payload => ({
  type: type.LOGIN,
  method: "MockPost",
  endPoint: MockLogin.CreateUser,
  types: [type.LOGIN_REQUEST, type.LOGIN_SUCCESS, type.LOGIN_FAILURE],
  payload
});

export const handleRegisteration = payload => {
  return {
    type: type.REGISTER,
    method: "MockPost",
    endPoint: MockLogin.RegisterUser,
    types: [
      type.REGISTER_REQUEST,
      type.REGISTER_SUCCESS,
      type.REGISTER_FAILURE
    ],
    payload
  };
};

export const handleResetEmail = payload => {
  return {
    type: type.RESET_EMAIL,
    method: "MockPost",
    endPoint: MockLogin.ResetEmail,
    types: [
      type.RESET_EMAIL_REQUEST,
      type.RESET_EMAIL_SUCCESS,
      type.RESET_EMAIL_FAILURE
    ],
    payload
  };
};

export const handleResetPassword = payload => {
  return {
    type: type.RESET_PASSWORD,
    method: "MockPost",
    endPoint: MockLogin.ResetEmail,
    types: [
      type.RESET_PASSWORD_REQUEST,
      type.RESET_PASSWORD_SUCCESS,
      type.RESET_PASSWORD_FAILURE
    ],
    payload
  };
};
