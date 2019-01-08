import * as types from "../lib/constants/actionTypes";
import * as  backOfficeReportedContentService from "../services";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getBackOfficeReportedContentStarted = () => ({
  type: types.GET_BACK_OFFICE_REPORTED_CONTENT_STARTED
});

const getBackOfficeReportedContentSucceeded = (data, isFor) => ({
  type: types.GET_BACK_OFFICE_REPORTED_CONTENT_SUCCEEDED,
  payload: data,
  isFor
});

const getBackOfficeReportedContentFailed = (error, isFor) => ({
  type: types.GET_BACK_OFFICE_REPORTED_CONTENT_FAILED,
  payload: error,
  error: true,
  isFor
});

export const getBackOfficeReportedContent = (prop) => {
  return dispatch => {
    dispatch(getBackOfficeReportedContentStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return  backOfficeReportedContentService.getReportedContent(prop, prop.type, header).then(
      res => {
          dispatch(getBackOfficeReportedContentSucceeded(res.data.data, prop.reportContent));
      },
      error => {
        dispatch(getBackOfficeReportedContentFailed(error.response, prop.reportContent))
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};


// Get BackOffice Reported Statistics
const getBackOfficeReportedStatisticsStarted = () => ({
  type: types.GET_BACK_OFFICE_REPORTED_STATISTICS_STARTED
});

const getBackOfficeReportedStatisticsSucceeded = (data, isFor) => ({
  type: types.GET_BACK_OFFICE_REPORTED_STATISTICS_SUCCEEDED,
  payload: data,
  isFor
});

const getBackOfficeReportedStatisticsFailed = (error, isFor) => ({
  type: types.GET_BACK_OFFICE_REPORTED_STATISTICS_FAILED,
  payload: error,
  error: true,
  isFor
});

export const getBackOfficeReportedStatistics = (prop) => {
  return dispatch => {
    dispatch(getBackOfficeReportedStatisticsStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

      console.log("fndsjk");
      
    return  backOfficeReportedContentService.getReportedStatistics(prop, header).then(
      res => {
          dispatch(getBackOfficeReportedStatisticsSucceeded(res.data.data, prop.reportContent));
      },
      error => {
        dispatch(getBackOfficeReportedStatisticsFailed(error.response, prop.reportContent))
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};



//  Update Back Office Report
const updateBackOfficeReportStarted = () => ({
  type: types.UPDATE_BACK_OFFICE_REPORT_STARTED
});

const updateBackOfficeReportSucceeded = (data) => ({
  type: types.UPDATE_BACK_OFFICE_REPORT_SUCCEEDED,
  payload: data
});

const updateBackOfficeReportFailed = (error) => ({
  type: types.UPDATE_BACK_OFFICE_REPORT_FAILED,
  payload: error,
  error: true
});

export const updateBackOfficeReport = (prop) => {
  return dispatch => {
    dispatch(updateBackOfficeReportStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.adminAccessToken
    };

    return  backOfficeReportedContentService.updateBackOfficeReport(prop, header).then(
      res => {
          dispatch(updateBackOfficeReportSucceeded(res.data.data));
      },
      error => {
        dispatch(updateBackOfficeReportFailed(error.response))
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};