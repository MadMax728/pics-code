import * as types from "../lib/constants/actionTypes";
import * as adService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

// Get Ads
const getAdsStarted = () => ({
  type: types.GET_ADS_STARTED
});

const getAdsSucceeded = data => ({
  type: types.GET_ADS_SUCCEEDED,
  payload: data
});

const getAdsFailed = error => ({
  type: types.GET_ADS_FAILED,
  payload: error,
  error: true
});

export const getAds = (prop, provider) => {
  return dispatch => {
    dispatch(getAdsStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return adService[prop](params, provider).then(
      res => {
        dispatch(getAdsSucceeded(res.data.data));
      },
      error => {
        dispatch(
          getAdsFailed(error.response)
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Ad Details
const getAdDetailsStarted = () => ({
  type: types.GET_AD_DETAILS_STARTED
});

const getAdDetailsSucceeded = data => ({
  type: types.GET_AD_DETAILS_SUCCEEDED,
  payload: data
});

const getAdDetailsFailed = error => ({
  type: types.GET_AD_DETAILS_FAILED,
  payload: error,
  error: true
});

export const getAdDetails = provider => {
  return dispatch => {
    dispatch(getAdDetailsStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return adService.getAdDetails(params, provider).then(
      res => {
        dispatch(getAdDetailsSucceeded(res.data.data));
      },
      error => {
        dispatch(
          getAdDetailsFailed(error.response)
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};