import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const tagsReducer = (state = initialState.tags, action) => {
  switch (action.type) {
    case types.GET_OFFER_TAG_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_OFFER_TAG_SUCCEEDED:
      return {
        ...state,
        offerTags: action.payload,
        isLoading: false
      };
    case types.GET_OFFER_TAG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.ADD_OFFER_TAG_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.ADD_OFFER_TAG_SUCCEEDED:
      return {
        ...state,
        addedOfferTags: action.payload,
        isLoading: false
      };
    case types.ADD_OFFER_TAG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.GET_INQUIRY_TAG_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_INQUIRY_TAG_SUCCEEDED:
      return {
        ...state,
        inquiryTags: action.payload,
        isLoading: false
      };
    case types.GET_INQUIRY_TAG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case types.ADD_INQUIRY_TAG_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.ADD_INQUIRY_TAG_SUCCEEDED:
      return {
        ...state,
        addedInquiryTags: action.payload,
        isLoading: false
      };
    case types.ADD_INQUIRY_TAG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default tagsReducer;
