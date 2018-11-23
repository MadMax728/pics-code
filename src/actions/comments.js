import * as types from "../lib/constants/actionTypes";
import * as commentService from "../services/commentService";
import { Auth } from "../auth";
import { logger } from "../loggers";

// set Comments
const setCommentsStarted = () => ({
  type: types.SET_COMMENTS_STARTED
});

const setCommentsSucceeded = data => ({
  type: types.SET_COMMENTS_SUCCEEDED,
  payload: data
});

const setCommentsFailed = error => ({
  type: types.SET_COMMENTS_FAILED,
  payload: error,
  error: true
});

// Push Comments
const pushCommentsStarted = () => ({
  type: types.PUSH_COMMENT_STARTED
});

const pushCommentsSucceeded = data => ({
  type: types.PUSH_COMMENT_SUCCEEDED,
  payload: data
});

const pushCommentsFailed = error => ({
  type: types.PUSH_COMMENT_FAILED,
  payload: error,
  error: true
});

export const setComments = data => {
  return dispatch => {
    dispatch(setCommentsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };
    return commentService.getComments(data, header).then(
      res => {
        dispatch(setCommentsSucceeded(res.data.data));
      },
      error => {
        dispatch(setCommentsFailed(error));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

const getCommentStarted = () => ({
  type: types.GET_COMMENT_STARTED
});

const getCommentSucceeded = data => ({
  type: types.GET_COMMENT_SUCCEEDED,
  payload: data
});

const getCommentFailed = error => ({
  type: types.GET_COMMENT_FAILED,
  payload: error,
  error: true
});

export const getComments = data => {
  return dispatch => {
    dispatch(getCommentStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return commentService.getComments(data, header).then(
      res => {
        dispatch(getCommentSucceeded(res.data.success ? res.data.data : null));
      },
      error => {
        dispatch(getCommentFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
