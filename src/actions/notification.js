import * as types from "../lib/constants/actionTypes";
import * as notificationService from "../services";
import { Auth } from "../auth";
import { logger } from "../loggers";

const getNotificationStarted = () => ({
  type: types.GET_NOTIFICATION_STARTED
});

const getNotificationSucceeded = data => ({
  type: types.GET_NOTIFICATION_SUCCEEDED,
  payload: data
});

const getNotificationFailed = error => ({
  type: types.GET_NOTIFICATION_FAILED,
  payload: error,
  error: true
});

export const getNotification = () => {
  return dispatch => {
    dispatch(getNotificationStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return notificationService.getNotification(null, header).then(
      res => {
        dispatch(getNotificationSucceeded(res.data.data));
      },
      error => {
        dispatch(getNotificationFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
