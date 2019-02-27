import * as types from "../lib/constants/actionTypes";
import * as profileSettingsService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

// Activate Business Profile
const activateBusinessProfileStarted = () => ({
  type: types.ACTIVATE_BUSINESS_PROFILE_STARTED
});

const activateBusinessProfileSucceeded = data => ({
  type: types.ACTIVATE_BUSINESS_PROFILE_SUCCEEDED,
  payload: data
});

const activateBusinessProfileFailed = error => ({
  type: types.ACTIVATE_BUSINESS_PROFILE_FAILED,
  payload: error,
  error: true
});

// Get Bills / Receipts
const getBillsStarted = () => ({
  type: types.GET_BILLS_STARTED
});

const getBillsSucceeded = data => ({
  type: types.GET_BILLS_SUCCEEDED,
  payload: data
});

const getBillsFailed = error => ({
  type: types.GET_BILLS_FAILED,
  payload: error,
  error: true
});

// Data Download
const getDownloadDataStarted = () => ({
  type: types.GET_DOWNLOAD_DATA_STARTED
});

const getDownloadDataSucceeded = data => ({
  type: types.GET_DOWNLOAD_DATA_SUCCEEDED,
  payload: data
});

const getDownloadDataFailed = error => ({
  type: types.GET_DOWNLOAD_DATA_FAILED,
  payload: error,
  error: true
});

export const activateBusinessProfile = params => {
  return dispatch => {
    dispatch(activateBusinessProfileStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };
    return profileSettingsService.activateBusinessProfile(params, header).then(
      res => {
        dispatch(activateBusinessProfileSucceeded(res.data));
      },
      error => {
        dispatch(activateBusinessProfileFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};

export const getBills = params => {
  return dispatch => {
    dispatch(getBillsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return profileSettingsService.getBills(params, header).then(
      res => {
        dispatch(getBillsSucceeded(res.data));
      },
      error => {
        dispatch(getBillsFailed(error.response));
        dispatch(getBillsSucceeded([]));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

export const getDownloadData = params => {
  return dispatch => {
    dispatch(getDownloadDataStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return profileSettingsService.getDownloadData(params, header).then(
      res => {
        dispatch(getDownloadDataSucceeded(res.data));
      },
      error => {
        dispatch(getDownloadDataFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
