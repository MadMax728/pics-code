import * as type from "./types";
import { MockLogin } from "../api/fakeApi";

export const login = payload => ({
  type: type.LOGIN,
  method: "MockPost",
  endPoint: MockLogin.CreateUser,
  types: [type.LOGIN_REQUEST, type.LOGIN_SUCCESS, type.LOGIN_FAILURE],
  payload
});
