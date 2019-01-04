import * as types from "../lib/constants/actionTypes";
import * as hashTagService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getHashTagStarted = isFor => ({
  type: types.GET_HASH_TAG_STARTED,
  isFor
});

const getHashTagSucceeded = (data, isFor) => ({
  type: types.GET_HASH_TAG_SUCCEEDED,
  payload: data,
  isFor
});

const getHashTagFailed = (error, isFor) => ({
  type: types.GET_HASH_TAG_FAILED,
  payload: error,
  error: true,
  isFor
});

export const getHashTag = (prop, provider) => {
  return dispatch => {
    dispatch(getHashTagStarted(prop));
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };
    return hashTagService[prop](provider, header).then(
      res => {
        dispatch(getHashTagSucceeded(res.data.data, prop));
      },
      error => {
        dispatch(getHashTagFailed(error.response, prop));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

const addHashTagStarted = isFor => ({
  type: types.ADD_HASH_TAG_STARTED,
  isFor
});

const addHashTagSucceeded = (data, isFor) => ({
  type: types.ADD_HASH_TAG_SUCCEEDED,
  payload: data,
  isFor
});

const addHashTagFailed = (error, isFor) => ({
  type: types.ADD_HASH_TAG_FAILED,
  payload: error,
  error: true,
  isFor
});

export const addHashTag = params => {
  return dispatch => {
    dispatch(addHashTagStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return hashTagService.addHashTag(params, header).then(
      res => {
        if (res.data && res.data.data) dispatch(addHashTagSucceeded(res.data));
      },
      error => {
        dispatch(addHashTagFailed(error.response));

        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};
