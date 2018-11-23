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
        Auth.saveJwtToStorage({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmZWU5YThiLTI4NzItNDg3Yi04NTlmLWRjMmQ0ZTA0MjA3MSIsInVzZXJuYW1lIjoic2FudG9zaDEyMyIsImVtYWlsIjoic2FudG9zaC5zaGluZGVAcGljc3RhZ3JhcGguY29tIiwiZGF0ZUlzc3VlZCI6IjIwMTgtMTAtMzBUMTE6Mzg6NTIuMjUyWiIsImlhdCI6MTU0MDg5OTUzMiwiZXhwIjoyNzUwNDk5NTMyfQ.cFyhfgRhCoHlgbs410JE9sF6NUuaZRnCHL4XRyHN_Kw"
        });
        dispatch(getCommentFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
