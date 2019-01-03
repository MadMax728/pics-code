import * as types from "../lib/constants/actionTypes";
import * as messagesService from "../services/messagesService";
import { logger } from "../loggers";
import { Auth } from "../auth";

const getMessagesListStarted = () => ({
  type: types.GET_MESSAGES_STARTED
});

const getMessagesListSucceeded = data => ({
  type: types.GET_MESSAGES_SUCCEEDED,
  payload: data
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
export const getMessages = (senderId, recipientId) => {
  return dispatch => {
    dispatch(getMessagesListStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { 
        senderId : senderId,
        recipientId: recipientId
    };

    return messagesService.getMessages(params, headers).then(
      res => {
        dispatch(getMessagesListSucceeded(res.data.data));
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
