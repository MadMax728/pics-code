import * as types from "../lib/constants/actionTypes";
import * as adminService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import {
  admin_list
} from "../mock-data";

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

    return adminService.getAdmins(header).then(
      res => {
          dispatch(getAdminsSucceeded(res.data.data));
      },
      error => {
        dispatch(getAdminsFailed(error.response))
        dispatch(getAdminsSucceeded(admin_list));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
