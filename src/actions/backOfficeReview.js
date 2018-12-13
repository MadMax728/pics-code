import * as types from "../lib/constants/actionTypes";
import * as adminService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import {
  campaigns_list
} from "../mock-data";

// back office review campigns
const getBackOfficeReviewCampaignsStarted = () => ({
  type: types.GET_BACK_OFFICE_REVIEW_CAMPAIGNS_STARTED
});

const getBackOfficeReviewCampaignsSucceeded = data => ({
  type: types.GET_BACK_OFFICE_REVIEW_CAMPAIGNS_SUCCEEDED,
  payload: data
});

const getBackOfficeReviewCampaignsFailed = error => ({
  type: types.GET_BACK_OFFICE_REVIEW_CAMPAIGNS_FAILED,
  payload: error,
  error: true
});

export const getBackOfficeReviewCampaigns = () => {
  return dispatch => {
    dispatch(getBackOfficeReviewCampaignsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return adminService.getBackOfficeReviewCampaigns(header).then(
      res => {
          dispatch(getBackOfficeReviewCampaignsSucceeded(res.data.data));
      },
      error => {
        dispatch(getBackOfficeReviewCampaignsFailed(error.response));
        dispatch(getBackOfficeReviewCampaignsSucceeded(campaigns_list));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// back office review ads
const getBackOfficeReviewAdsStarted = () => ({
  type: types.GET_BACK_OFFICE_REVIEW_ADS_STARTED
});

const getBackOfficeReviewAdsSucceeded = data => ({
  type: types.GET_BACK_OFFICE_REVIEW_ADS_SUCCEEDED,
  payload: data
});

const getBackOfficeReviewAdsFailed = error => ({
  type: types.GET_BACK_OFFICE_REVIEW_ADS_FAILED,
  payload: error,
  error: true
});

export const getBackOfficeReviewAds = () => {
  return dispatch => {
    dispatch(getBackOfficeReviewAdsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return adminService.getBackOfficeReviewAds(header).then(
      res => {
          dispatch(getBackOfficeReviewAdsSucceeded(res.data.data));
      },
      error => {
        dispatch(getBackOfficeReviewAdsFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
