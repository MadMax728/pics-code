import * as types from "../lib/constants/actionTypes";
import * as dashboardService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getDashboardStarted = () => ({
  type: types.GET_DASHBOARD_STARTED
});

const getDashboardSucceeded = data => ({
  type: types.GET_DASHBOARD_SUCCEEDED,
  payload: data
});

const getDashboardFailed = error => ({
  type: types.GET_DASHBOARD_FAILED,
  payload: error,
  error: true
});

export const getDashboard = (prop, provider) => {
  return dispatch => {
    dispatch(getDashboardStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return dashboardService[prop](provider, header).then(
      res => {
          dispatch(getDashboardSucceeded(res.data.data));
      },
      error => {
        dispatch(getDashboardFailed(error.response))
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
