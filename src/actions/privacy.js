import * as types from "../lib/constants/actionTypes";
import * as privacyService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

const setProfilePrivacyStarted = () => ({
  type: types.SET_PROFILE_PRIVACY_STARTED
});

const setProfilePrivacySucceeded = data => ({
  type: types.SET_PROFILE_PRIVACY_SUCCEEDED,
  payload: data
});

const setProfilePrivacyFailed = error => ({
  type: types.SET_PROFILE_PRIVACY_FAILED,
  payload: error,
  error: true
});

export const setProfilePrivacy = isPrivacy => {
  return dispatch => {
    dispatch(setProfilePrivacyStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return privacyService.setProfilePrivacy(params, isPrivacy).then(
      res => {
        dispatch(setProfilePrivacySucceeded(res));
      },
      error => {
        dispatch(setProfilePrivacyFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};
