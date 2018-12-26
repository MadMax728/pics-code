import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const mediaReducer = (state = initialState.mediaData, action) => {
  switch (action.type) { 

    // Upload article
    case types.UPLOAD_MEDIA_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.UPLOAD_MEDIA_SUCCEEDED:
      return {
        ...state,
        media: action.payload,
        isLoading: false
      };
    case types.UPLOAD_MEDIA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default mediaReducer;
