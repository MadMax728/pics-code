import { Auth } from "../auth";
import * as selectService from "../services";
import { logger } from "../loggers";
import * as types from "../lib/constants/actionTypes";
import moment from "moment";
import * as _ from "lodash";

// Get Select

const getSelectStarted = () => ({
  type: types.GET_SELECT_STARTED
});

const getSelectSucceeded = (data, isFor) => ({
  type: types.GET_SELECT_SUCCEEDED,
  payload: data,
  isFor
});

const getSelectFailed = error => ({
  type: types.GET_SELECT_FAILED,
  payload: error,
  error: true
});

export const getSelect = (prop, provider) => {
  return dispatch => {
    dispatch(getSelectStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return selectService[prop](provider, header).then(
      res => {
        if (res.data && res.data.data) {
          const selectData = _.orderBy(
            res.data.data,
            function(o) {
              return new moment(o.createdAt);
            },
            ["desc"]
          );
          dispatch(getSelectSucceeded(selectData, prop));
        }
      },
      error => {
        dispatch(getSelectFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

export const getBackofficeSelect = (prop, provider) => {
  return dispatch => {
    dispatch(getSelectStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.adminAccessToken };
    return selectService[prop](provider, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getSelectSucceeded(res.data.data, prop));
      },
      error => {
        dispatch(getSelectFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Target Group
const getTargetGroupSucceeded = data => ({
  type: types.GET_TARGET_GROUP_SUCCEEDED,
  payload: data
});

export const getTargetGroup = data => {
  return dispatch => {
    dispatch(getTargetGroupSucceeded(data));
  };
};

// Offer
const getOfferSucceeded = data => ({
  type: types.GET_OFFER_SUCCEEDED,
  payload: data
});

export const getOffer = data => {
  return dispatch => {
    dispatch(getOfferSucceeded(data));
  };
};

// Inquiry
const getInquirySucceeded = data => ({
  type: types.GET_INQUIRY_SUCCEEDED,
  payload: data
});

export const getInquiry = data => {
  return dispatch => {
    dispatch(getInquirySucceeded(data));
  };
};

const getLanguageSucceeded = data => ({
  type: types.GET_LANGUAGE_SUCCEEDED,
  payload: data
});

export const getLanguage = data => {
  return dispatch => {
    dispatch(getLanguageSucceeded(data));
  };
};

const getAgeSucceeded = data => ({
  type: types.GET_AGE_SUCCEEDED,
  payload: data
});

export const getAge = data => {
  return dispatch => {
    dispatch(getAgeSucceeded(data));
  };
};
