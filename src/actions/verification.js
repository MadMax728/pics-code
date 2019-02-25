import * as types from "../lib/constants/actionTypes";
import * as verificationService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getVerificationsStarted = () => ({
  type: types.GET_VERIFICATIONS_STARTED
});

const getVerificationsSucceeded = data => ({
  type: types.GET_VERIFICATIONS_SUCCEEDED,
  payload: data
});

const getVerificationsFailed = error => ({
  type: types.GET_VERIFICATIONS_FAILED,
  payload: error,
  error: true
});

export const getVerifications = () => {
  return dispatch => {
    dispatch(getVerificationsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return verificationService.getVerifications(null, header).then(
      res => {
        dispatch(getVerificationsSucceeded(res.data.data));
      },
      error => {
        dispatch(getVerificationsFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

const getUnverifiedUsersStarted = () => ({
  type: types.GET_UNVERIFIED_USERS_STARTED
});

const getUnverifiedUsersSucceeded = data => ({
  type: types.GET_UNVERIFIED_USERS_SUCCEEDED,
  payload: data
});

const getUnverifiedUsersFailed = error => ({
  type: types.GET_UNVERIFIED_USERS_FAILED,
  payload: error,
  error: true
});

export const getUnverifiedUsers = () => {
  return dispatch => {
    dispatch(getUnverifiedUsersStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return verificationService.getUnverifiedUsers(null, header).then(
      res => {
        dispatch(getUnverifiedUsersSucceeded(res.data.data));
      },
      error => {
        dispatch(getUnverifiedUsersFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Update Verification

const updateVerificationStarted = () => ({
  type: types.UPDATE_VERIFICATION_STARTED
});

const updateVerificationSucceeded = data => ({
  type: types.UPDATE_VERIFICATION_SUCCEEDED,
  payload: data
});

const updateVerificationFailed = error => ({
  type: types.UPDATE_VERIFICATION_FAILED,
  payload: error,
  error: true
});

export const updateVerification = provider => {
  return dispatch => {
    dispatch(updateVerificationStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return verificationService.updateVerification(provider, header).then(
      res => {
        dispatch(updateVerificationSucceeded(res.data.data));
      },
      error => {
        dispatch(updateVerificationFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
