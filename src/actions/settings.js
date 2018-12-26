import * as types from "../lib/constants/actionTypes";
import * as settingsService from "../services";
import { Auth } from "../auth";
import { logger } from "../loggers";

// News Feed
const getNewsFeedStarted = () => ({
  type: types.GET_NEWS_FEED_STARTED
});

const getNewsFeedSucceeded = data => ({
  type: types.GET_NEWS_FEED_SUCCEEDED,
  payload: data
});

const getNewsFeedFailed = error => ({
  type: types.GET_NEWS_FEED_FAILED,
  payload: error,
  error: true
});

export const getNewsFeed = (prop, provider) => {
  return dispatch => {
    dispatch(getNewsFeedStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return settingsService[prop](provider, header).then(
      res => {
        dispatch(getNewsFeedSucceeded(res.data.data));
      },
      error => {
        dispatch(getNewsFeedFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// About
const getAboutStarted = () => ({
  type: types.GET_ABOUT_STARTED
});

const getAboutSucceeded = data => ({
  type: types.GET_ABOUT_SUCCEEDED,
  payload: data
});

const getAboutFailed = error => ({
  type: types.GET_ABOUT_FAILED,
  payload: error,
  error: true
});

export const getAbout = (prop, provider) => {
  return dispatch => {
    dispatch(getAboutStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return settingsService[prop](provider, header).then(
      res => {
        dispatch(getAboutSucceeded(res.data.data));
      },
      error => {
        dispatch(getAboutFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Get Saved
const getSavedStarted = () => ({
  type: types.GET_SAVED_STARTED
});

const getSavedSucceeded = data => ({
  type: types.GET_SAVED_SUCCEEDED,
  payload: data
});

const getSavedFailed = error => ({
  type: types.GET_SAVED_FAILED,
  payload: error,
  error: true
});

export const getSaved = (prop, provider) => {
  return dispatch => {
    dispatch(getSavedStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return settingsService[prop](provider, header).then(
      res => {
        dispatch(getSavedSucceeded(res.data.data));
      },
      error => {
        dispatch(getSavedFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};


// Set Saved
const setSavedPostStarted = () => ({
  type: types.SET_SAVED_STARTED
});

const setSavedPostSucceeded = data => ({
  type: types.SET_SAVED_SUCCEEDED,
  payload: data
});

const setSavedPostFailed = error => ({
  type: types.SET_SAVED_FAILED,
  payload: error,
  error: true
});

export const setSavedPost = (provider) => {
  return dispatch => {
    dispatch(setSavedPostStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return settingsService.setSavedPost(provider, header).then(
      res => {
        dispatch(setSavedPostSucceeded(res.data.data));
      },
      error => {
        dispatch(setSavedPostFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};