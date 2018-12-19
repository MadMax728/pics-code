import { Auth } from "../auth";
import * as selectService from "../services";
import { logger } from "../loggers";
import * as types from "../lib/constants/actionTypes";

// Get Category
const getCategoryStarted = () => ({
  type: types.GET_CATEGORY_STARTED
});

const getCategorySucceeded = data => ({
  type: types.GET_CATEGORY_SUCCEEDED,
  payload: data
});

const getCategoryFailed = error => ({
  type: types.GET_CATEGORY_FAILED,
  payload: error,
  error: true
});

export const getCategory = params => {
  return dispatch => {
    dispatch(getCategoryStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return selectService.getCategory(params, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getCategorySucceeded(res.data.data));
      },
      error => {
        dispatch(getCategoryFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Get Offer

const getOfferStarted = () => ({
  type: types.GET_OFFER_STARTED
});

const getOfferSucceeded = data => ({
  type: types.GET_OFFER_SUCCEEDED,
  payload: data
});

const getOfferFailed = error => ({
  type: types.GET_OFFER_FAILED,
  payload: error,
  error: true
});

export const getOffer = params => {
  return dispatch => {
    dispatch(getOfferStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return selectService.getOffer(params, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getOfferSucceeded(res.data.data));
      },
      error => {
        dispatch(getOfferFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Get Inquiry

const getInquiryStarted = () => ({
  type: types.GET_INQUIRY_STARTED
});

const getInquirySucceeded = data => ({
  type: types.GET_INQUIRY_SUCCEEDED,
  payload: data
});

const getInquiryFailed = error => ({
  type: types.GET_INQUIRY_FAILED,
  payload: error,
  error: true
});

export const getInquiry = params => {
  return dispatch => {
    dispatch(getInquiryStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return selectService.getInquiry(params, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getInquirySucceeded(res.data.data));
      },
      error => {
        dispatch(getInquiryFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Get Daily Budget

const getDailyBudgetStarted = () => ({
  type: types.GET_DAILY_BUDGET_STARTED
});

const getDailyBudgetSucceeded = data => ({
  type: types.GET_DAILY_BUDGET_SUCCEEDED,
  payload: data
});

const getDailyBudgetFailed = error => ({
  type: types.GET_DAILY_BUDGET_FAILED,
  payload: error,
  error: true
});

export const getDailyBudget = params => {
  return dispatch => {
    dispatch(getDailyBudgetStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return selectService.getDailyBudget(params, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getDailyBudgetSucceeded(res.data.data));
      },
      error => {
        dispatch(getDailyBudgetFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Get Radius
const getRadiusStarted = () => ({
  type: types.GET_RADIUS_STARTED
});

const getRadiusSucceeded = data => ({
  type: types.GET_RADIUS_SUCCEEDED,
  payload: data
});

const getRadiusFailed = error => ({
  type: types.GET_RADIUS_FAILED,
  payload: error,
  error: true
});

export const getRadius = params => {
  return dispatch => {
    dispatch(getRadiusStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return selectService.getRadius(params, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getRadiusSucceeded(res.data.data));
      },
      error => {
        dispatch(getRadiusFailed(error.response));
        logger.error({ description: error.toString(), fatal: true });
      }
    );
  };
};

// Get Target Group
const getTargetGroupStarted = () => ({
  type: types.GET_TARGET_GROUP_STARTED
});

const getTargetGroupSucceeded = data => ({
  type: types.GET_TARGET_GROUP_SUCCEEDED,
  payload: data
});

const getTargetGroupFailed = error => ({
  type: types.GET_TARGET_GROUP_FAILED,
  payload: error,
  error: true
});

export const getTargetGroup = data => {
  return dispatch => {
    dispatch(getTargetGroupSucceeded(data));
  };
};
