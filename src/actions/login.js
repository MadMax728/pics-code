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
  debugger;
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
