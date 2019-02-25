import * as types from "../lib/constants/actionTypes";
import * as messagesService from "../services/messagesService";
import { logger } from "../loggers";
import { Auth } from "../auth";
import * as _ from "lodash";
import moment from "moment";

const getMessagesListStarted = () => ({
  type: types.GET_MESSAGES_STARTED
});

const getMessagesListSucceeded = (data, lastEvaluatedKeys = null) => ({
  type: types.GET_MESSAGES_SUCCEEDED,
  payload: data,
  lastEvaluatedKeys
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
export const getMessages = (
  senderId,
  recipientId,
  lastEvaluatedKeys = undefined
) => {
  return dispatch => {
    dispatch(getMessagesListStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const lastEvaluatedKey =
      lastEvaluatedKeys && lastEvaluatedKeys.id
        ? lastEvaluatedKeys.id
        : undefined;
    const params = {
      senderId,
      recipientId,
      strict: true,
      lastEvaluatedKey
    };

    return messagesService.getMessages(params, headers).then(
      res => {
        const messages = _.orderBy(res.data.data, o => moment(o.createdAt));
        dispatch(
          getMessagesListSucceeded(messages, res.data.lastEvaluatedKeys)
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
