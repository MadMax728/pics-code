import * as types from "../lib/constants/actionTypes";
import * as campaignService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import * as _ from "lodash";
import moment from "moment";

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
        const campaigns = _.orderBy(res.data.data, o => moment(o.createdAt), [
          "desc"
        ]);
        dispatch(getCampaignsSucceeded(campaigns));
      },
      error => {
        dispatch(getCampaignsFailed(error.response));
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
    const header = {
      Authorization: storage.accessToken
    };

    return campaignService.getCampaignDetails(provider, header).then(
      res => {
        dispatch(getCampaignDetailsSucceeded(res.data.data));
      },
      error => {
        dispatch(getCampaignDetailsFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Get Favourite Campaigns

const getFavouriteCampaignsStarted = () => ({
  type: types.GET_FAVOURITE_CAMPAIGNS_STARTED
});

const getFavouriteCampaignsSucceeded = data => ({
  type: types.GET_FAVOURITE_CAMPAIGNS_SUCCEEDED,
  payload: data
});

const getFavouriteCampaignsFailed = error => ({
  type: types.GET_FAVOURITE_CAMPAIGNS_FAILED,
  payload: error,
  error: true
});

export const getFavouriteCampaigns = provider => {
  return dispatch => {
    dispatch(getFavouriteCampaignsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };
    return campaignService.getFavouriteCampaigns(provider, header).then(
      res => {
        dispatch(getFavouriteCampaignsSucceeded(res.data.data));
      },
      error => {
        dispatch(getFavouriteCampaignsFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Create Campaign

const createCampaignStarted = () => ({
  type: types.CREATE_CAMPAIGN_STARTED
});

const createCampaignSucceeded = data => ({
  type: types.CREATE_CAMPAIGN_SUCCEEDED,
  payload: data
});

const createCampaignFailed = error => ({
  type: types.CREATE_CAMPAIGN_FAILED,
  payload: error,
  error: true
});

export const createCampaign = provider => {
  return dispatch => {
    dispatch(createCampaignStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return campaignService.createCampaign(provider, header).then(
      res => {
        dispatch(createCampaignSucceeded(res.data.data));
      },
      error => {
        dispatch(createCampaignFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Add Partiipants

const addParticipantsStarted = () => ({
  type: types.ADD_PARTICIPANTS_STARTED
});

const addParticipantsSucceeded = data => ({
  type: types.ADD_PARTICIPANTS_SUCCEEDED,
  payload: data
});

const addParticipantsFailed = error => ({
  type: types.ADD_PARTICIPANTS_FAILED,
  payload: error,
  error: true
});

export const addParticipants = provider => {
  return dispatch => {
    dispatch(addParticipantsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };

    return campaignService.addParticipants(provider, header).then(
      res => {
        dispatch(addParticipantsSucceeded(res.data.success));
      },
      error => {
        dispatch(addParticipantsFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Remove Participant
const removeParticipantsStarted = () => ({
  type: types.REMOVE_PARTICIPANT_STARTED
});

const removeParticipantsSucceeded = data => ({
  type: types.REMOVE_PARTICIPANT_SUCCEEDED,
  payload: data
});

const removeParticipantsFailed = error => ({
  type: types.REMOVE_PARTICIPANT_FAILED,
  payload: error,
  error: true
});

export const removeParticipants = provider => {
  return dispatch => {
    dispatch(removeParticipantsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };

    return campaignService.removeParticipants(provider, header).then(
      res => {
        dispatch(removeParticipantsSucceeded(res.data.data));
      },
      error => {
        dispatch(removeParticipantsFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Update Campaign

const updateCampaignStarted = () => ({
  type: types.UPDATE_CAMPAIGN_STARTED
});

const updateCampaignSucceeded = data => ({
  type: types.UPDATE_CAMPAIGN_SUCCEEDED,
  payload: data
});

const updateCampaignFailed = error => ({
  type: types.UPDATE_CAMPAIGN_FAILED,
  payload: error,
  error: true
});

export const updateCampaign = provider => {
  return dispatch => {
    dispatch(updateCampaignStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return campaignService.updateCampaign(provider, header).then(
      res => {
        dispatch(updateCampaignSucceeded(res.data.data));
      },
      error => {
        dispatch(updateCampaignFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
