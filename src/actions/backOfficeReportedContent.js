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

    return  backOfficeReportedContentService.reportedContent(prop, prop.type, header).then(
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