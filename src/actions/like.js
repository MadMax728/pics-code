import * as types from "../lib/constants/actionTypes";
import * as likeService from "../services";
import { Auth } from "../auth";
import { logger } from "../loggers";

const likeStarted = () => ({
  type: types.LIKE_STARTED
});

const likeSucceeded = data => ({
  type: types.LIKE_SUCCEEDED,
  payload: data
});

const likeFailed = error => ({
  type: types.LIKE_FAILED,
  payload: error,
  error: true
});

export const like = data => {
  return dispatch => {
    dispatch(likeStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return likeService.like(data, header).then(
      res => {
        dispatch(likeSucceeded(res.data.data));
      },
      error => {
        Auth.saveJwtToStorage({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmZWU5YThiLTI4NzItNDg3Yi04NTlmLWRjMmQ0ZTA0MjA3MSIsInVzZXJuYW1lIjoic2FudG9zaDEyMyIsImVtYWlsIjoic2FudG9zaC5zaGluZGVAcGljc3RhZ3JhcGguY29tIiwiZGF0ZUlzc3VlZCI6IjIwMTgtMTAtMzBUMTE6Mzg6NTIuMjUyWiIsImlhdCI6MTU0MDg5OTUzMiwiZXhwIjoyNzUwNDk5NTMyfQ.cFyhfgRhCoHlgbs410JE9sF6NUuaZRnCHL4XRyHN_Kw"
        });
        dispatch(likeFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
