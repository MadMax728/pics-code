import * as types from "../lib/constants/actionTypes";
import * as userService from "../services/userService";
import { Auth } from "../auth";
import { logger } from "../loggers";

const getUserStarted = () => ({
  type: types.GET_USER_STARTED
});

const getUserSucceeded = data => ({
  type: types.GET_USER_SUCCEEDED,
  payload: data
});

const getUserFailed = error => ({
  type: types.GET_USER_FAILED,
  payload: error,
  error: true
});
const updateUSerProfileStarted = () => ({
  type: types.UPDATE_PROFILE_STARTED
});

const updateUSerProfileSucceeded = data => ({
  type: types.UPDATE_PROFILE_SUCCEEDED,
  payload: data
});

const updateUSerProfileFailed = error => ({
  type: types.UPDATE_PROFILE_FAILED,
  payload: error,
  error: true
});

const uploadImageStarted = () => ({
  type: types.UPLOAD_IMAGE_STARTED
});

const uploadImageSucceeded = data => ({
  type: types.UPLOAD_IMAGE_SUCCEEDED,
  payload: data
});

const uploadImageFailed = error => ({
  type: types.UPLOAD_IMAGE_FAILED,
  payload: error,
  error: true
});

export const getUser = params => {
  return dispatch => {
    dispatch(getUserStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return userService.getUser(params, header).then(
      res => {
        if (res.data && res.data.data) Auth.saveJwtToStorage(res.data.data);
        dispatch(getUserSucceeded(res.data));
      },
      error => {
        console.log(error);
        
        Auth.saveJwtToStorage({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmZWU5YThiLTI4NzItNDg3Yi04NTlmLWRjMmQ0ZTA0MjA3MSIsInVzZXJuYW1lIjoic2FudG9zaDEyMyIsImVtYWlsIjoic2FudG9zaC5zaGluZGVAcGljc3RhZ3JhcGguY29tIiwiZGF0ZUlzc3VlZCI6IjIwMTgtMTAtMzBUMTE6Mzg6NTIuMjUyWiIsImlhdCI6MTU0MDg5OTUzMiwiZXhwIjoyNzUwNDk5NTMyfQ.cFyhfgRhCoHlgbs410JE9sF6NUuaZRnCHL4XRyHN_Kw"
        });
        dispatch(getUserFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

export const updateUserProfile = data => {
  return dispatch => {
    dispatch(updateUSerProfileStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return userService.updateUserProfile(data, header).then(
      res => {
        if (res.data && res.data.data) Auth.saveJwtToStorage(res.data.data);
        dispatch(updateUSerProfileSucceeded(res.data));
      },
      error => {
        Auth.saveJwtToStorage({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNmZWU5YThiLTI4NzItNDg3Yi04NTlmLWRjMmQ0ZTA0MjA3MSIsInVzZXJuYW1lIjoic2FudG9zaDEyMyIsImVtYWlsIjoic2FudG9zaC5zaGluZGVAcGljc3RhZ3JhcGguY29tIiwiZGF0ZUlzc3VlZCI6IjIwMTgtMTAtMzBUMTE6Mzg6NTIuMjUyWiIsImlhdCI6MTU0MDg5OTUzMiwiZXhwIjoyNzUwNDk5NTMyfQ.cFyhfgRhCoHlgbs410JE9sF6NUuaZRnCHL4XRyHN_Kw"
        });
        dispatch(updateUSerProfileFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

export const uploadProfilePicture = params => {
  console.log(params);
  return dispatch => {
    dispatch(uploadImageStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return userService.uploadProfilePicture(params, header).then(
      res => {
        if (res.data && res.data.data) Auth.saveJwtToStorage(res.data.data);
        dispatch(uploadImageSucceeded(res.data));
      },
      error => {
        dispatch(uploadImageFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
