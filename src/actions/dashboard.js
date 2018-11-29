import * as types from "../lib/constants/actionTypes";
import * as dashboardService from "../services/dashboardService";
import { logger } from "../loggers";
import { Auth } from "../auth";
// remove when no need
import { dashboardList, users_list, pics_list } from "../mock-data";

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
        dispatch(
          // getDashboardFailed(error.response)
          // remove below code after API working, this is just for set mock data.
          prop === "getNews"
            ? getDashboardSucceeded(dashboardList)
            : prop === "getExplore"
              ? getDashboardSucceeded(
                  dashboardList.filter(
                    d => d.type === "video" || d.type === "image"
                  )
                )
              : prop === "getParticipant"
                ? getDashboardSucceeded(
                    dashboardList.filter(
                      d => d.type === "video" || d.type === "image"
                    )
                  )
                : prop === "getDashboardUser"
                  ? getDashboardSucceeded(users_list)
                  : prop === "getPic" && getDashboardSucceeded(pics_list)
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
