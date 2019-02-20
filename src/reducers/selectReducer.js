import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const selectReducer = (state = initialState.selectData, action) => {
  switch (action.type) {
    // Get Select
    case types.GET_SELECT_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_SELECT_SUCCEEDED:
      return {
        ...state,
        [action.isFor]: action.payload,
        isLoading: false
      };
    case types.GET_SELECT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Static Data for Target Group,  In future would remove as when require
    case types.GET_TARGET_GROUP_SUCCEEDED:
      return {
        ...state,
        targetGroups: action.payload,
        isLoading: false
      };

    // Static Data for Offer,  In future would remove as when require
    case types.GET_OFFER_SUCCEEDED:
      return {
        ...state,
        offers: action.payload,
        isLoading: false
    };  
    
    // Static Data for Inquiry,  In future would remove as when require
    case types.GET_INQUIRY_SUCCEEDED:
      return {
        ...state,
        inquiries: action.payload,
        isLoading: false
      };
    
    // Static Data,  In future would remove as when require
    case types.GET_AGE_SUCCEEDED:
      return {
        ...state,
        age: action.payload,
        isLoading: false
      };

    // Static Data,  In future would remove as when require
    case types.GET_LANGUAGE_SUCCEEDED:
      return {
        ...state,
        languages: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export default selectReducer;
