import * as types from "../lib/constants/actionTypes";
import * as exploreService from "../services/exploreService";
import { logger } from "../loggers";
import { Auth } from "../auth";
// remove when no need
import { exploreList } from "../mock-data";

// Get Explores
const getExploresStarted = () => ({
  type: types.GET_EXPLORES_STARTED
});

const getExploresSucceeded = data => ({
  type: types.GET_EXPLORES_SUCCEEDED,
  payload: data
});

const getExploresFailed = error => ({
  type: types.GET_EXPLORES_FAILED,
  payload: error,
  error: true
});

export const getExplores = (prop, provider) => {
  return dispatch => {
    dispatch(getExploresStarted());
    const storage = Auth.extractJwtFromStorage();
    const headers = {
      Authorization: storage.accessToken
    };
    const params = { headers };

    return exploreService.getExplores(params, provider).then(
      res => {
        dispatch(getExploresSucceeded(res.data.data));
      },
      error => {
        dispatch(
          // getExploresFailed(error.response)
          // remove below code after API working, this is just for set mock data.
          getExploresSucceeded(exploreList)
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
};
