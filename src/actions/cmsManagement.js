import * as types from "../lib/constants/actionTypes";
import * as cmsManagementService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import {
  cmsManagement_list
} from "../mock-data";

const getCMSManagementStarted = () => ({
  type: types.GET_CMS_MANAGEMENT_STARTED
});

const getCMSManagementSucceeded = data => ({
  type: types.GET_CMS_MANAGEMENT_SUCCEEDED,
  payload: data
});

const getCMSManagementFailed = error => ({
  type: types.GET_CMS_MANAGEMENT_FAILED,
  payload: error,
  error: true
});

export const getCMSManagement = () => {
  return dispatch => {
    dispatch(getCMSManagementStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return cmsManagementService.getCMSManagement(header).then(
      res => {
          dispatch(getCMSManagementSucceeded(res.data.data));
      },
      error => {
        dispatch(getCMSManagementFailed(error.response))
        dispatch(getCMSManagementSucceeded(cmsManagement_list));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
