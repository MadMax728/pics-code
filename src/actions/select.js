import { Auth } from "../auth";
import * as selectService from "../services";
import { logger } from "../loggers";
import * as types from "../lib/constants/actionTypes";


// Get Select

const getSelectStarted = () => ({
  type: types.GET_SELECT_STARTED
});

const getSelectSucceeded = (data,isFor) => ({
  type: types.GET_SELECT_SUCCEEDED,
  payload: data,
  isFor
});

const getSelectFailed = error => ({
  type: types.GET_SELECT_FAILED,
  payload: error,
  error: true
});

export const getSelect = (prop, provider) => {
  return dispatch => {
    dispatch(getSelectStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return selectService[prop](provider, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getSelectSucceeded(res.data.data, prop));
      },
      error => {
        dispatch(getSelectFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

export const getBackofficeSelect = (prop, provider) => {
  return dispatch => {
    dispatch(getSelectStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.adminAccessToken };
    return selectService[prop](provider, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getSelectSucceeded(res.data.data, prop));
      },
      error => {
        dispatch(getSelectFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

const getTargetGroupSucceeded = data => ({
  type: types.GET_TARGET_GROUP_SUCCEEDED,
  payload: data
});

export const getTargetGroup = data => {
  return dispatch => {
    dispatch(getTargetGroupSucceeded(data));
  };
};
