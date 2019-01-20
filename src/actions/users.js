import * as types from "../lib/constants/actionTypes";
import * as usersService from "../services/usersService";
import * as subscribeService from "../services/subscribeService";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getUserListStarted = () => ({
  type: types.GET_USER_LIST_STARTED
});

const getUserListSucceeded = data => ({
  type: types.GET_USER_LIST_SUCCEEDED,
  payload: data
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
        dispatch(getUserListSucceeded([]));
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
        dispatch(sendRequestSucceeded(res.data.data));
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
export const acceptRequest = requestUserId => {
  return dispatch => {
    dispatch(acceptRequestStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return usersService.acceptRequest(requestUserId, header).then(
      res => {
        dispatch(acceptRequestSucceeded(res.data.success));
      },
      error => {
        dispatch(acceptRequestFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};

/* Get follow user list
 */
const getFollowUserListStarted = () => ({
  type: types.GET_FOLLOW_USER_LIST_STARTED
});

const getFollowUserListSucceeded = (data, isFor) => ({
  type: types.GET_FOLLOW_USER_LIST_SUCCEEDED,
  payload: data,
  isFor
});

const getFollowUserListFailed = error => ({
  type: types.GET_FOLLOW_USER_LIST_FAILED,
  payload: error,
  error: true
});

export const getFollowUserList = (prop, requestData) => {
  return dispatch => {
    dispatch(getFollowUserListStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };
    return subscribeService[prop](requestData, header).then(
      res => {
        dispatch(getFollowUserListSucceeded(res.data.data, prop));
      },
      error => {
        dispatch(getFollowUserListFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
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
        dispatch(getUnsubscribeSucceeded(res.data.data));
      },
      error => {
        dispatch(getUnsubscribeFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};

/* Get Pending User List */
const getPendingUserListStarted = () => ({
  type: types.GET_PENDING_USER_LIST_STARTED
});

const getPendingUserListSucceeded = data => ({
  type: types.GET_PENDING_USER_LIST_SUCCEEDED,
  payload: data
});

const getPendingUserListFailed = error => ({
  type: types.GET_PENDING_USER_LIST_FAILED,
  payload: error,
  error: true
});
export const getPendingUserList = requestData => {
  return dispatch => {
    dispatch(getPendingUserListStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };
    return usersService.getPendingUserList(requestData, header).then(
      res => {
        dispatch(getPendingUserListSucceeded(res.data.data));
      },
      error => {
        dispatch(getPendingUserListFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};

/* Block User Request -  For Block user
 */
const blockUserRequestStarted = () => ({
  type: types.BLOCK_USER_REQUEST_STARTED
});

const blockUserRequestSucceeded = data => ({
  type: types.BLOCK_USER_REQUEST_SUCCEEDED,
  payload: data
});

const blockUserRequestFailed = error => ({
  type: types.BLOCK_USER_REQUEST_FAILED,
  payload: error,
  error: true
});
export const blockUserRequest = userId => {
  return dispatch => {
    dispatch(blockUserRequestStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return usersService.blockUserRequest(userId, header).then(
      res => {
        dispatch(blockUserRequestSucceeded(res.data.data));
      },
      error => {
        dispatch(blockUserRequestFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

/* Unblock
 */
const unblockUserRequestStarted = () => ({
  type: types.UNBLOCK_USER_REQUEST_STARTED
});

const unblockUserRequestSucceeded = data => ({
  type: types.UNBLOCK_USER_REQUEST_SUCCEEDED,
  payload: data
});

const unblockUserRequestFailed = error => ({
  type: types.UNBLOCK_USER_REQUEST_FAILED,
  payload: error,
  error: true
});
export const unblockUserRequest = blockId => {
  return dispatch => {
    dispatch(unblockUserRequestStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return usersService.unblockUserRequest("", blockId, header).then(
      res => {
        dispatch(unblockUserRequestSucceeded(res.data.success));
      },
      error => {
        dispatch(unblockUserRequestFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
