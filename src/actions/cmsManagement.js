import * as types from "../lib/constants/actionTypes";
import * as cmsManagementService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getCMSManagementStarted = () => ({
  type: types.GET_CMS_MANAGEMENT_STARTED
});

const getCMSManagementSucceeded = data => ({
  type: types.GET_CMS_MANAGEMENT_SUCCEEDED,
  payload: data
});

const getCMSManagementFailed = error => ({
  type: types.GET_CMS_MANAGEMENT_FAILED,
  payload: error,
  error: true
});

export const getCMSManagement = (provider) => {
  return dispatch => {
    dispatch(getCMSManagementStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return cmsManagementService.getCMSManagement(provider,header).then(
      res => {
          dispatch(getCMSManagementSucceeded(res.data.data));
      },
      error => {
        dispatch(getCMSManagementFailed(error.response))
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};


// Get CMS Detail

const getCMSDetailStarted = () => ({
  type: types.GET_CMS_DETAIL_STARTED
});

const getCMSDetailSucceeded = data => ({
  type: types.GET_CMS_DETAIL_SUCCEEDED,
  payload: data
});

const getCMSDetailFailed = error => ({
  type: types.GET_CMS_DETAIL_FAILED,
  payload: error,
  error: true
});

export const getCMSDetail = (provider) => {
  return dispatch => {
    dispatch(getCMSDetailStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };
  
    return cmsManagementService.getCMSDetail(provider,header).then(
      res => {
        dispatch(getCMSDetailSucceeded(res.data.data));
      },
      error => {
        dispatch(getCMSDetailFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};


// Update CMS Detail

const updateCMSStarted = () => ({
  type: types.UPDATE_CMS_STARTED
});

const updateCMSSucceeded = data => ({
  type: types.UPDATE_CMS_SUCCEEDED,
  payload: data
});

const updateCMSFailed = error => ({
  type: types.UPDATE_CMS_FAILED,
  payload: error,
  error: true
});

export const updateCMS = (provider) => {
  return dispatch => {
    dispatch(updateCMSStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };
  
    return cmsManagementService.updateCMS(provider,header).then(
      res => {
        dispatch(updateCMSSucceeded(res.data.data));
      },
      error => {
        dispatch(updateCMSFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

// Create CMS

const createCMSStarted = () => ({
  type: types.CREATE_CMS_STARTED
});

const createCMSSucceeded = data => ({
  type: types.CREATE_CMS_SUCCEEDED,
  payload: data
});

const createCMSFailed = error => ({
  type: types.CREATE_CMS_FAILED,
  payload: error,
  error: true
});

export const createCMS = (provider) => {
  return dispatch => {
    dispatch(createCMSStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };
  
    return cmsManagementService.createCMS(provider,header).then(
      res => {
        dispatch(createCMSSucceeded(res.data.data));
      },
      error => {
        dispatch(createCMSFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

