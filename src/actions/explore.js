import * as types from "../lib/constants/actionTypes";
import * as dashboardService from "../services";
import { Auth } from "../auth";
import { logger } from "../loggers";

// get Explore
const getExploreStarted = () => ({
  type: types.GET_EXPLORES_STARTED
});

const getExploreSucceeded = data => ({
  type: types.GET_EXPLORES_SUCCEEDED,
  payload: data
});

const getExploreFailed = error => ({
  type: types.GET_EXPLORES_FAILED,
  payload: error,
  error: true
});

export const getExplore = params => {
  return dispatch => {
    dispatch(getExploreStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = { Authorization: storage.accessToken };
    const queryString = Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&");
    return dashboardService.explores(queryString, header).then(
      res => {
        if (res.data && res.data.data)
          dispatch(getExploreSucceeded(res.data));
      },
      error => {
        dispatch(getExploreFailed(error.response));
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
