import * as types from "../lib/constants/actionTypes";
import * as commentService from "../services/commentService";
import { Auth } from "../auth";
import { logger } from "../loggers";

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
