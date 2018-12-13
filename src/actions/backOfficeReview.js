import * as types from "../lib/constants/actionTypes";
import * as backOfficeReviewService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";
import {
  campaigns_list
} from "../mock-data";

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

    return backOfficeReviewService[prop](provider, header).then(
      res => {
          dispatch(getBackOfficeReviewSucceeded(res.data.data, prop));
      },
      error => {
        dispatch(getBackOfficeReviewFailed(error.response));
        dispatch(getBackOfficeReviewSucceeded(campaigns_list, prop));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};