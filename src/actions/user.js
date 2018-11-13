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
const disconnectNetworkStarted = () => ({
  type: types.DISCONNECT_NETWORK_STARTED
});

const disconnectNetworkSucceeded = data => ({
  type: types.DISCONNECT_NETWORK_SUCCEEDED,
  payload: data
});

const disconnectNetworkFailed = error => ({
  type: types.DISCONNECT_NETWORK_FAILED,
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
    const params = { headers };

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

export const disconnectNetwork = provider => {
  return dispatch => {
    dispatch(disconnectNetworkStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return userService.disconnectNetwork(params, provider).then(
      res => {
        dispatch(disconnectNetworkSucceeded(res.data.data));
      },
      error => {
        dispatch(disconnectNetworkFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
