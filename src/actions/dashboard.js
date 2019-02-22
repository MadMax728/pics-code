import * as types from "../lib/constants/actionTypes";
import * as dashboardService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import * as _ from "lodash";
import moment from "moment";

const getDashboardStarted = isFor => ({
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

const setLastEvaluatedKeys = data => ({
  type: types.GET_LAST_EVALUATE_KEYS_SUCCEEDED,
  payload: data
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
        const campaigns = _.orderBy(
          res.data.data,
          function(o) {
            return new moment(o.createdAt);
          },
          ["desc"]
        );
        dispatch(getDashboardSucceeded(campaigns, prop));
        const lastEvaluatedKeys = res.data.lastEvaluatedKeys
          ? res.data.lastEvaluatedKeys
          : null;
        dispatch(setLastEvaluatedKeys(lastEvaluatedKeys));
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
