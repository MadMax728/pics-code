import * as types from "../lib/constants/actionTypes";
import * as dashboardService from "../services/dashboardService";
import { logger } from "../loggers";
import { Auth } from "../auth";
// remove when no need
import { dashboardList } from "../mock-data";

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

export const getCampaigns = (prop, provider) => {
  return dispatch => {
    dispatch(getDashboardStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return dashboardService[prop](params, provider).then(
      res => {
        dispatch(getDashboardSucceeded(res.data.data));
      },
      error => {
        dispatch(
          // getDashboardFailed(error.response)
          // remove below code after API working, this is just for set mock data.
          prop === "getNewsFeed"
            ? getDashboardSucceeded(dashboardList)
            : prop === "getExplore"
              ? getDashboardSucceeded(
                  dashboardList.filter(d => d.user.type === provider)
                )
              : prop === "getParticipant"
                ? getDashboardSucceeded(
                    dashboardList.filter(d => d.user.isParticipant === true)
                  )
                : prop === "getUser"
                  ? getDashboardSucceeded(dashboardList.filter(exploreList))
                  : prop === "getPics" &&
                    getDashboardSucceeded(
                      dashboardList.filter(d => d.user.isParticipant === true)
                    )
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Campaign Details
const getCampaignDetailsStarted = () => ({
  type: types.GET_CAMPAIGNS_DETAILS_STARTED
});

const getCampaignDetailsSucceeded = data => ({
  type: types.GET_CAMPAIGNS_DETAILS_SUCCEEDED,
  payload: data
});

const getCampaignDetailsFailed = error => ({
  type: types.GET_CAMPAIGNS_DETAILS_FAILED,
  payload: error,
  error: true
});

export const getCampaignDetails = provider => {
  return dispatch => {
    dispatch(getCampaignDetailsStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return dashboardService.getCampaignDetails(params, provider).then(
      res => {
        dispatch(getCampaignDetailsSucceeded(res.data.data));
      },
      error => {
        dispatch(
          // getCampaignDetailsFailed(error.response)
          // remove below code after API working, this is just for set mock data.
          getCampaignDetailsSucceeded(
            dashboardList.filter(c => d.id === parseInt(provider))
          )
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
