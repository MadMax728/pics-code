import * as types from "../lib/constants/actionTypes";
import * as dashboardService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getDashboardStarted = (isFor) => ({
  type: types.GET_DASHBOARD_STARTED,
  isFor
});

const getDashboardSucceeded = (data, isFor) => ({
  type: types.GET_DASHBOARD_SUCCEEDED,
  payload: data,
  isFor
});

const getDashboardFailed = (error, isFor) => ({
  type: types.GET_DASHBOARD_FAILED,
  payload: error,
  error: true,
  isFor
});

export const getDashboard = (prop, provider) => {
  return dispatch => {
    dispatch(getDashboardStarted(prop));
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };
    return dashboardService[prop](provider, header).then(
      res => {
        dispatch(getDashboardSucceeded(res.data.data, prop));
      },
      error => {
        dispatch(getDashboardFailed(error.response, prop));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
