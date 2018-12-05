import { Auth } from "../auth";
import * as userService from "../services/userService";
import { logger } from "../loggers";
import * as types from "../lib/constants/actionTypes";

const getCategoryStarted = () => ({
  type: types.GET_CATEGORY_STARTED
});

const getCategorySucceeded = data => ({
  type: types.GET_CATEGORY_SUCCEEDED,
  payload: data
});

const getCategoryFailed = error => ({
  type: types.GET_CATEGORY_FAILED,
  payload: error,
  error: true
});

export const getCategory = params => {
  return dispatch => {
    dispatch(getCategoryStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return userService.getCategory(params, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getCategorySucceeded(res.data.data));
      },
      error => {
        dispatch(getCategoryFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};