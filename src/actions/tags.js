import { Auth } from "../auth";
import * as tagService from "../services";
import { logger } from "../loggers";
import * as types from "../lib/constants/actionTypes";

// Get Offer Tags
const getOfferTagStarted = () => ({
  type: types.GET_OFFER_TAG_STARTED
});

const getOfferTagSucceeded = data => ({
  type: types.GET_OFFER_TAG_SUCCEEDED,

  payload: data
});

const getOfferTagFailed = error => ({
  type: types.GET_OFFER_TAG_FAILED,

  payload: error,

  error: true
});

export const getOfferTag = params => {
  return dispatch => {
    dispatch(getOfferTagStarted());

    const storage = Auth.extractJwtFromStorage();

    const header = { Authorization: storage.accessToken };

    return tagService.getOfferTag(params, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getOfferTagSucceeded(res.data.data));
      },

      error => {
        dispatch(getOfferTagFailed(error.response));

        logger.error({
          description: error.toString(),

          fatal: true
        });
      }
    );
  };
};

// Add Offer Tag
const addOfferTagStarted = () => ({
  type: types.ADD_OFFER_TAG_STARTED
});

const addOfferTagSucceeded = data => ({
  type: types.ADD_OFFER_TAG_SUCCEEDED,

  payload: data
});

const addOfferTagFailed = error => ({
  type: types.ADD_OFFER_TAG_FAILED,

  payload: error,

  error: true
});

export const addOfferTag = params => {
  return dispatch => {
    dispatch(addOfferTagStarted());

    const storage = Auth.extractJwtFromStorage();

    const header = { Authorization: storage.accessToken };

    return tagService.addOfferTag(params, header).then(
      res => {
        if (res.data && res.data.data) dispatch(addOfferTagSucceeded(res.data.data));
      },

      error => {
        dispatch(addOfferTagFailed(error.response));

        logger.error({
          description: error.toString(),

          fatal: true
        });
      }
    );
  };
};

// Get Inquiry Tag
const getInquiryTagStarted = () => ({
  type: types.GET_INQUIRY_TAG_STARTED
});

const getInquiryTagSucceeded = data => ({
  type: types.GET_INQUIRY_TAG_SUCCEEDED,

  payload: data
});

const getInquiryTagFailed = error => ({
  type: types.ADD_INQUIRY_TAG_FAILED,

  payload: error,

  error: true
});

export const getInquiryTag = params => {
  return dispatch => {
    dispatch(getInquiryTagStarted());

    const storage = Auth.extractJwtFromStorage();

    const header = { Authorization: storage.accessToken };

    return tagService.getInquiryTag(params, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getInquiryTagSucceeded(res.data.data));
      },

      error => {
        dispatch(getInquiryTagFailed(error.response));

        logger.error({
          description: error.toString(),

          fatal: true
        });
      }
    );
  };
};

// Add Inquiry Tag
const addInquiryTagStarted = () => ({
  type: types.ADD_INQUIRY_TAG_STARTED
});

const addInquiryTagSucceeded = data => ({
  type: types.ADD_INQUIRY_TAG_SUCCEEDED,

  payload: data
});

const addInquiryTagFailed = error => ({
  type: types.GET_INQUIRY_TAG_FAILED,

  payload: error,

  error: true
});

export const addInquiryTag = params => {
  return dispatch => {
    dispatch(addInquiryTagStarted());

    const storage = Auth.extractJwtFromStorage();

    const header = { Authorization: storage.accessToken };

    return tagService.addInquiryTag(params, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(addInquiryTagSucceeded(res.data));
      },

      error => {
        dispatch(addInquiryTagFailed(error.response));

        logger.error({
          description: error.toString(),

          fatal: true
        });
      }
    );
  };
};
