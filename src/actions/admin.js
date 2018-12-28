import * as types from "../lib/constants/actionTypes";
import * as adminService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import { admin_list } from "../mock-data";

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

// Add Admin

const addAdminStarted = () => ({
  type: types.ADD_ADMIN_STARTED
});

const addAdminSucceeded = data => ({
  type: types.ADD_ADMIN_SUCCEEDED,
  payload: data
});

const addAdminFailed = error => ({
  type: types.ADD_ADMIN_FAILED,
  payload: error,
  error: true
});

export const addAdmin = (provider) => {
  return dispatch => {
    dispatch(addAdminStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };
  
    return adminService.addAdmin(provider,header).then(
      res => {
        dispatch(addAdminSucceeded(res.data.data));
      },
      error => {
        dispatch(addAdminFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
