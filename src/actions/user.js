import * as types from "../lib/constants/actionTypes";
import * as userService from "../services/userService";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getSocialNetworkStarted = () => ({
  type: types.SOCIAL_NETWORKS_STARTED
});

const getSocialNetworkSucceeded = data => ({
  type: types.SOCIAL_NETWORKS_SUCCEEDED,
  payload: data
});

const getSocialNetworkFailed = error => ({
  type: types.SOCIAL_NETWORKS_FAILED,
  payload: error,
  error: true
});

export const getSocialNetwork = () => {
  return dispatch => {
    dispatch(getSocialNetworkStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers: headers };

    return userService.getSocialNetwork(params).then(
      res => {
        dispatch(getSocialNetworkSucceeded(res.data.data));
      },
      error => {
        dispatch(getSocialNetworkFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
