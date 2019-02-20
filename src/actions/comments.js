import * as types from "../lib/constants/actionTypes";
import * as commentService from "../services";
import { Auth } from "../auth";
import { logger } from "../loggers";

// Get Comments
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

// Add Comments

const addCommentStarted = () => ({
  type: types.ADD_COMMENT_STARTED
});

const addCommentSucceeded = data => ({
  type: types.ADD_COMMENT_SUCCEEDED,
  payload: data
});

const addCommentFailed = error => ({
  type: types.ADD_COMMENT_FAILED,
  payload: error,
  error: true
});

export const addComment = data => {
  return dispatch => {
    dispatch(addCommentStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return commentService.addComment(data, header).then(
      res => {
        dispatch(addCommentSucceeded(res.data.success ? res.data.data : null));
      },
      error => {
        dispatch(addCommentFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Delete Comment
const deleteCommentStarted = () => ({
  type: types.DELETE_COMMENT_STARTED
});

const deleteCommentSucceeded = data => ({
  type: types.DELETE_COMMENT_SUCCEEDED,
  payload: data
});

const deleteCommentFailed = error => ({
  type: types.DELETE_COMMENT_FAILED,
  payload: error,
  error: true
});

export const deleteComment = data => {
  return dispatch => {
    dispatch(deleteCommentStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return commentService.deleteComment(data, header).then(
      res => {
        dispatch(
          deleteCommentSucceeded(res.data.success ? res.data.data : null)
        );
      },
      error => {
        dispatch(deleteCommentFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Edit Comment
const editCommentStarted = () => ({
  type: types.EDIT_COMMENT_STARTED
});

const editCommentSucceeded = data => ({
  type: types.EDIT_COMMENT_SUCCEEDED,
  payload: data
});

const editCommentFailed = error => ({
  type: types.EDIT_COMMENT_FAILED,
  payload: error,
  error: true
});

export const editComment = data => {
  return dispatch => {
    dispatch(editCommentStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return commentService.editComment(data, header).then(
      res => {
        dispatch(editCommentSucceeded(res.data.success ? res.data.data : null));
      },
      error => {
        dispatch(editCommentFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
