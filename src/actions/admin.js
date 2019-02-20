import * as types from "../lib/constants/actionTypes";
import * as adminService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

// Get Admins
const getAdminsStarted = () => ({
  type: types.GET_ADMINS_STARTED
});

const getAdminsSucceeded = data => ({
  type: types.GET_ADMINS_SUCCEEDED,
  payload: data
});

const getAdminsFailed = error => ({
  type: types.GET_ADMINS_FAILED,
  payload: error,
  error: true
});

export const getAdmins = () => {
  return dispatch => {
    dispatch(getAdminsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };
  
    return adminService.getAdmins(null,header).then(
      res => {
        dispatch(getAdminsSucceeded(res.data.data));
      },
      error => {
        dispatch(getAdminsFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Update Admin

const updateAdminStarted = () => ({
  type: types.UPDATE_ADMIN_STARTED
});

const updateAdminSucceeded = data => ({
  type: types.UPDATE_ADMIN_SUCCEEDED,
  payload: data
});

const updateAdminFailed = error => ({
  type: types.UPDATE_ADMIN_FAILED,
  payload: error,
  error: true
});

export const updateAdmin = (provider) => {
  return dispatch => {
    dispatch(updateAdminStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };
  
    return adminService.updateAdmin(provider,header).then(
      res => {
        dispatch(updateAdminSucceeded(res.data.data));
      },
      error => {
        dispatch(updateAdminFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
