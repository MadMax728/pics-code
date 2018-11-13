import * as types from "../lib/constants/actionTypes";
import * as campaignService from "../services/campaignService";
import { logger } from "../loggers";
import { Auth } from "../auth";
// remove when no need
import { campaigns_list } from "../mock-data";

const getCampaignsStarted = type => ({
  type
});

const getCampaignsSucceeded = (type, data) => ({
  type,
  payload: data
});

const getCampaignsFailed = (type, error) => ({
  type,
  payload: error,
  error: true
});

export const getCampaigns = () => {
  return dispatch => {
    dispatch(getCampaignsStarted(types.GET_CAMPAIGNS_STARTED));
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return campaignService.getCampaigns(params).then(
      res => {
        dispatch(
          getCampaignsSucceeded(types.GET_CAMPAIGNS_SUCCEEDED, res.data.data)
        );
      },
      error => {
        dispatch(
          getCampaignsFailed(types.GET_CAMPAIGNS_FAILED, error.response)
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Remove function when Call Actual API call
export const getCampaignsMock = () => {
  return dispatch => {
    dispatch(
      getCampaignsSucceeded(types.GET_CAMPAIGNS_SUCCEEDED, campaigns_list)
    );
  };
};

export const getCompanyCampaignsMock = () => {
  return dispatch => {
    dispatch(
      getCampaignsSucceeded(
        types.GET_COMPANY_CAMPAIGNS_SUCCEEDED,
        campaigns_list.filter(c => c.user.isCreator === false)
      )
    );
  };
};

export const getCreatorCampaignsMock = () => {
  return dispatch => {
    dispatch(
      getCampaignsSucceeded(
        types.GET_CREATOR_CAMPAIGNS_SUCCEEDED,
        campaigns_list.filter(c => c.user.isCreator === true)
      )
    );
  };
};

export const getParticipantCampaignsMock = () => {
  return dispatch => {
    dispatch(
      getCampaignsSucceeded(
        types.GET_PARTICIPANT_CAMPAIGNS_SUCCEEDED,
        campaigns_list.filter(c => c.user.isParticipant === true)
      )
    );
  };
};
export const getExploreCampaignsMock = () => {
  return dispatch => {
    dispatch(
      getCampaignsSucceeded(
        types.GET_EXPLORE_CAMPAIGNS_SUCCEEDED,
        campaigns_list.filter(c => c.isExplore === true)
      )
    );
  };
};
