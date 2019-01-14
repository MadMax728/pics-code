import * as types from "../lib/constants/actionTypes";
import * as reviewService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

// back office review Campigns and Ads
const getBackOfficeReviewStarted = () => ({
  type: types.GET_BACK_OFFICE_REVIEW_STARTED
});

const getBackOfficeReviewSucceeded = (data, isFor) => ({
  type: types.GET_BACK_OFFICE_REVIEW_SUCCEEDED,
  payload: data,
  isFor
});

const getBackOfficeReviewFailed = error => ({
  type: types.GET_BACK_OFFICE_REVIEW_FAILED,
  payload: error,
  error: true
});

export const getBackOfficeReview = (prop, provider) => {
  return dispatch => {
    dispatch(getBackOfficeReviewStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return reviewService[prop](provider, header).then(
      res => {
          dispatch(getBackOfficeReviewSucceeded(res.data.data, prop));
      },
      error => {
        dispatch(getBackOfficeReviewFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};


// Get BackOffice Review Statistics
const getBackOfficeReviewStatisticsStarted = () => ({
  type: types.GET_BACK_OFFICE_REVIEW_STATISTICS_STARTED
});

const getBackOfficeReviewStatisticsSucceeded = (data, isFor) => ({
  type: types.GET_BACK_OFFICE_REVIEW_STATISTICS_SUCCEEDED,
  payload: data,
  isFor
});

const getBackOfficeReviewStatisticsFailed = (error, isFor) => ({
  type: types.GET_BACK_OFFICE_REVIEW_STATISTICS_FAILED,
  payload: error,
  error: true,
  isFor
});

export const getBackOfficeReviewStatistics = (prop) => {
  return dispatch => {
    dispatch(getBackOfficeReviewStatisticsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return  reviewService.getReviewStatistics(prop, header).then(
      res => {
          dispatch(getBackOfficeReviewStatisticsSucceeded(res.data.data, prop.reportContent));
      },
      error => {
        dispatch(getBackOfficeReviewStatisticsFailed(error.response, prop.reportContent))
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};