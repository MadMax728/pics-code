import * as types from "../lib/constants/actionTypes";
import * as mediaService from "../services/mediaService";
import { logger } from "../loggers";
import { Auth } from "../auth";


const uploadMediaStarted = () => ({
  type: types.UPLOAD_MEDIA_STARTED
});

const uploadMediaSucceeded = data => ({
  type: types.UPLOAD_MEDIA_SUCCEEDED,
  payload: data
});

const uploadMediaFailed = error => ({
  type: types.UPLOAD_MEDIA_FAILED,
  payload: error,
  error: true
});

export const uploadMedia = (provider) => {
  return dispatch => {
    dispatch(uploadMediaStarted());
    const storage = Auth.extractJwtFromStorage();
    const header = {
      Authorization: storage.accessToken
    };

    return mediaService.uploadMedia(provider, header).then(
      res => {
        console.log(res);
        dispatch(uploadMediaSucceeded(res.data.data));
      },
      error => {
      
        dispatch(
          uploadMediaFailed(error.response)
        );
        logger.error({
          description: error.toString(),
          fatal: true
        });
      }
    );
  };
}; 
