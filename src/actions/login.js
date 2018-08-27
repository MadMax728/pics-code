import * as type from "./types";

export const login = payload => dispatch => ({
  type: type.LOGIN,
  method: "Post",
  endPoint: "login",
  payload
});
