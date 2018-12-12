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
  isFor: isFor
});

const getBackOfficeReportedContentFailed = error => ({
  type: types.GET_BACK_OFFICE_REPORTED_CONTENT_FAILED,
  payload: error,
  error: true
});

export const getBackOfficeReportedContent = (prop, provider) => {
  return dispatch => {
    dispatch(getBackOfficeReportedContentStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return  backOfficeReportedContentService[prop](provider, header).then(
      res => {
          dispatch(getBackOfficeReportedContentSucceeded(res.data.data, prop));
      },
      error => {
        dispatch(getBackOfficeReportedContentFailed(error.response))
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};