import * as types from "../lib/constants/actionTypes";
import * as communityService from "../services";
import { Auth } from "../auth";
import { logger } from "../loggers";

// get User Community
const getUserCommunityStarted = () => ({
  type: types.GET_USER_COMMUNITY_STARTED
});

const getUserCommunitySucceeded = data => ({
  type: types.GET_USER_COMMUNITY_SUCCEEDED,
  payload: data
});

const getUserCommunityFailed = error => ({
  type: types.GET_USER_COMMUNITY_FAILED,
  payload: error,
  error: true
});

export const getUserCommunity = params => {
  return dispatch => {
    dispatch(getUserCommunityStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    return communityService.getUserCommunity(params, header).then(
      res => {
        if (res.data && res.data.data) dispatch(getUserCommunitySucceeded(res.data.data));
      },
      error => {
        dispatch(getUserCommunityFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};