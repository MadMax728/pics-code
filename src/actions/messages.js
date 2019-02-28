import * as types from "../lib/constants/actionTypes";
import * as messagesService from "../services/messagesService";
import { logger } from "../loggers";
import { Auth } from "../auth";
import * as _ from "lodash";
import moment from "moment";

const getMessagesListStarted = () => ({
  type: types.GET_MESSAGES_STARTED
});

const getMessagesListSucceeded = (data, fromTime, toTime) => ({
  type: types.GET_MESSAGES_SUCCEEDED,
  payload: data,
  fromTime,
  toTime
});

const getMessagesListFailed = error => ({
  type: types.GET_MESSAGES_FAILED,
  payload: error,
  error: true
});

/**
 *  GET MESSAGES
 *  @returns {dispatch} getMessages.
 */
export const getMessages = (senderId, recipientId, fromTime, toTime) => {
  return dispatch => {
    dispatch(getMessagesListStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = {
      senderId,
      recipientId,
      strict: true,
      fromTime,
      toTime
    };

    return messagesService.getMessages(params, headers).then(
      res => {
        const messages = _.orderBy(res.data.data, o => moment(o.createdAt));
        dispatch(
          getMessagesListSucceeded(messages, res.data.fromTime, res.data.toTime)
        );
      },
      error => {
        dispatch(getMessagesListFailed([]));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};

/**
 *  DELETE MESSAGES FOR ME
 *
 */
export const deleteMessages = (userId, otherUserId) => {
  return dispatch => {
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };

    const params = {
      userId,
      otherUserId
    };

    return messagesService.deleteMessages(params, headers).then(
      res => {
        //For this nothing to update in redux
      },
      error => {
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
