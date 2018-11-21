import * as types from "../lib/constants/actionTypes";
import * as settingsService from "../services/settingsService";
import { Auth } from "../auth";
import { logger } from "../loggers";
import { campaigns_list, aboutInfo } from "../mock-data";

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
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return settingsService[prop](params, provider).then(
      res => {
        dispatch(getNewsFeedSucceeded(res.data.data));
      },
      error => {
        dispatch(
          // getNewsFeedFailed(error.response)
          // remove below code after API working, this is just for set mock data.

          prop === "getNewsFeedOwner"
            ? getNewsFeedSucceeded(
                campaigns_list.filter(c => c.user.id === "1")
              )
            : prop === "getNewsFeedOther" &&
              getNewsFeedSucceeded(
                campaigns_list.filter(c => c.user.id === provider)
              )
        );
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
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return settingsService[prop](params, provider).then(
      res => {
        dispatch(getAboutSucceeded(res.data.data));
      },
      error => {
        dispatch(
          // getCampaignsFailed(error.response)
          // remove below code after API working, this is just for set mock data.

          prop === "getAboutOther"
            ? getAboutSucceeded(
                aboutInfo.filter(a => a.general_information.userId === "1")
              )
            : prop === "getAboutOwner" &&
              getAboutSucceeded(
                aboutInfo.filter(a => a.general_information.userId === "2")
              )
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Saved
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
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return settingsService[prop](params, provider).then(
      res => {
        dispatch(getSavedSucceeded(res.data.data));
      },
      error => {
        console.log(campaigns_list.filter(c => c.user.id === "1" && c.isSaved));

        dispatch(
          // getSavedFailed(error.response)
          // remove below code after API working, this is just for set mock data.
          prop === "getSavedOther"
            ? getSavedSucceeded(
                campaigns_list.filter(c => c.user.id === provider && c.isSaved)
              )
            : prop === "getSavedOwner" &&
              getSavedSucceeded(
                campaigns_list.filter(c => c.user.id === "1" && c.isSaved)
              )
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
