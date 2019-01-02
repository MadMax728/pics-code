import * as types from "../lib/constants/actionTypes";
import * as hashUserService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getHashUserStarted = (isFor) => ({
  type: types.GET_HASH_USER_STARTED,
  isFor
});

const getHashUserSucceeded = (data, isFor) => ({
  type: types.GET_HASH_USER_SUCCEEDED,
  payload: data,
  isFor
});

const getHashUserFailed = (error, isFor) => ({
  type: types.GET_HASH_USER_FAILED,
  payload: error,
  error: true,
  isFor
});

export const getHashUser = (prop, provider) => {
  return dispatch => {
    dispatch(getHashUserStarted(prop));
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };
    return hashUserService[prop](provider, header).then(
      res => {
        dispatch(getHashUserSucceeded(res.data.data, prop));
      },
      error => {
        dispatch(getHashUserFailed(error.response, prop));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
