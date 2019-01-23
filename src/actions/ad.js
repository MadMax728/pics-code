import * as types from "../lib/constants/actionTypes";
import * as adService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import * as _ from "lodash";
import moment from "moment";

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
    return adService[prop](provider, headers).then(
      res => {
        const ads = _.orderBy(
          res.data.data,
          function(o) {
            return new moment(o.createdAt);
          },
          ["desc"]
        );
        dispatch(getAdsSucceeded(ads));
      },
      error => {
        dispatch(getAdsFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
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
    const header = { Authorization: storage.accessToken };
    return adService.getAdDetails(provider, header).then(
      res => {
        dispatch(getAdDetailsSucceeded(res.data.data));
      },
      error => {
        dispatch(getAdDetailsFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};

// Create Ad

const createAdStarted = () => ({
  type: types.CREATE_AD_STARTED
});

const createAdSucceeded = data => ({
  type: types.CREATE_AD_SUCCEEDED,
  payload: data
});

const createAdFailed = error => ({
  type: types.CREATE_AD_FAILED,
  payload: error,
  error: true
});

export const createAd = provider => {
  return dispatch => {
    dispatch(createAdStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return adService.createAd(provider, header).then(
      res => {
        dispatch(createAdSucceeded(res.data.data));
      },
      error => {
        dispatch(createAdFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
