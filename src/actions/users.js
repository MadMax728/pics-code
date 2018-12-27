import * as types from "../lib/constants/actionTypes";
import * as usersService from "../services/usersService";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getUserListStarted = () => ({
  type: types.GET_USER_LIST_STARTED
});

const getUserListSucceeded = data => ({
  type: types.GET_USER_LIST_SUCCEEDED,
  payload: data
});

const getUserListFailed = error => ({
  type: types.GET_USER_LIST_FAILED,
  payload: error,
  error: true
});

/**
 *  getUserList
 * { subscribed, unknown, likes, company }
 *  @returns {dispatch} getUserList.
 */
export const getUserList = (type = "subscriber") => {
  return dispatch => {
    dispatch(getUserListStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return usersService.getUserList(params, type).then(
      res => {
        dispatch(getUserListSucceeded(res.data.data));
      },
      error => {
        dispatch(getUserListFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

/* SendRequest -  For Send request to other user
 */
const sendRequestStarted = () => ({
  type: types.SEND_REQUEST_STARTED
});

const sendRequestSucceeded = data => ({
  type: types.SEND_REQUEST_SUCCEEDED,
  payload: data
});

const sendRequestFailed = error => ({
  type: types.SEND_REQUEST_FAILED,
  payload: error,
  error: true
});
export const sendRequest = requestData => {
  return dispatch => {
    dispatch(sendRequestStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };
    return usersService.sendRequest(requestData, header).then(
      res => {
        dispatch(sendRequestSucceeded(res.data.success));
      },
      error => {
        dispatch(sendRequestFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};

/* AcceptRequest -  For Accept request from other user
 */
const acceptRequestStarted = () => ({
  type: types.ACCEPT_REQUEST_STARTED
});

const acceptRequestSucceeded = data => ({
  type: types.ACCEPT_REQUEST_SUCCEEDED,
  payload: data
});

const acceptRequestFailed = error => ({
  type: types.ACCEPT_REQUEST_FAILED,
  payload: error,
  error: true
});
export const acceptRequest = requestData => {
  return dispatch => {
    dispatch(acceptRequestStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = { Authorization: storage.accessToken };
    const params = { headers };

    return usersService.acceptRequest(params, requestData).then(
      res => {
        dispatch(acceptRequestSucceeded(res.data.data));
      },
      error => {
        dispatch(acceptRequestFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

/* GetFollowUser - Follow selected user
 */
const getFollowUserStarted = () => ({
  type: types.GET_FOLLOW_USER_STARTED
});

const getFollowUserSucceeded = data => ({
  type: types.GET_FOLLOW_USER_SUCCEEDED,
  payload: data
});

const getFollowUserFailed = error => ({
  type: types.GET_FOLLOW_USER_FAILED,
  payload: error,
  error: true
});
export const getFollowUser = requestData => {
  return dispatch => {
    dispatch(getFollowUserStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = { Authorization: storage.accessToken };
    const params = { headers };

    return usersService.getFollowUser(params, requestData).then(
      res => {
        dispatch(getFollowUserSucceeded(res.data.data));
      },
      error => {
        dispatch(getFollowUserFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

/* Get unsubscribe -  Fou Unsubscribe user
 */
const getUnsubscribeStarted = () => ({
  type: types.GET_UNSUBSCRIBE_STARTED
});

const getUnsubscribeSucceeded = data => ({
  type: types.GET_UNSUBSCRIBE_SUCCEEDED,
  payload: data
});

const getUnsubscribeFailed = error => ({
  type: types.GET_UNSUBSCRIBE_FAILED,
  payload: error,
  error: true
});
export const getUnsubscribe = subscribeId => {
  return dispatch => {
    dispatch(getUnsubscribeStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return usersService.getUnsubscribe("", subscribeId, header).then(
      res => {
        dispatch(getUnsubscribeSucceeded(res.data.success));
      },
      error => {
        dispatch(getUnsubscribeFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};
