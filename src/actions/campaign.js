import * as types from "../lib/constants/actionTypes";
import * as campaignService from "../services/campaignService";
import { logger } from "../loggers";
import { Auth } from "../auth";

// Get Campaigns
const getCampaignsStarted = () => ({
  type: types.GET_CAMPAIGNS_STARTED
});

const getCampaignsSucceeded = data => ({
  type: types.GET_CAMPAIGNS_SUCCEEDED,
  payload: data
});

const getCampaignsFailed = error => ({
  type: types.GET_CAMPAIGNS_FAILED,
  payload: error,
  error: true
});

export const getCampaigns = (prop, provider) => {
  return dispatch => {
    dispatch(getCampaignsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return campaignService[prop](provider, header).then(
      res => {
        console.log(res);
        dispatch(getCampaignsSucceeded(res.data.data));
      },
      error => {
      
        dispatch(
          getCampaignsFailed(error.response)
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
  type: types.GET_CAMPAIGN_DETAILS_STARTED
});

const getCampaignDetailsSucceeded = data => ({
  type: types.GET_CAMPAIGN_DETAILS_SUCCEEDED,
  payload: data
});

const getCampaignDetailsFailed = error => ({
  type: types.GET_CAMPAIGN_DETAILS_FAILED,
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

    return campaignService.getCampaignDetails(params, provider).then(
      res => {
        dispatch(getCampaignDetailsSucceeded(res.data.data));
      },
      error => {
        dispatch(
          getCampaignDetailsFailed(error.response)
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
