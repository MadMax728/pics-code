import * as types from "../lib/constants/actionTypes";
import * as backOfficeDashboardService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getBackOfficeDashboardStarted = () => ({
  type: types.GET_BACK_OFFICE_DASHBOARD_STARTED
});

const getBackOfficeDashboardSucceeded = data => ({
  type: types.GET_BACK_OFFICE_DASHBOARD_SUCCEEDED,
  payload: data
});

const getBackOfficeDashboardFailed = error => ({
  type: types.GET_BACK_OFFICE_DASHBOARD_FAILED,
  payload: error,
  error: true
});

export const getBackOfficeDashboard = () => {
  return dispatch => {
    dispatch(getBackOfficeDashboardStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return backOfficeDashboardService.getBackOfficeDashboard(header).then(
      res => {
        dispatch(getBackOfficeDashboardSucceeded(res.data.data));
      },
      error => {
        dispatch(getBackOfficeDashboardFailed(error.response));
        dispatch(getBackOfficeDashboardSucceeded({}));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
