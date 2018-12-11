import * as types from "../lib/constants/actionTypes";
import * as verificationService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import {
  verification_list
} from "../mock-data";

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

    return verificationService.getVerifications(header).then(
      res => {
          dispatch(getVerificationsSucceeded(res.data.data));
      },
      error => {
        dispatch(getVerificationsFailed(error.response))
        dispatch(getVerificationsSucceeded(verification_list));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
