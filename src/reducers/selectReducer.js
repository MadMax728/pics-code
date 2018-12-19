import * as types from "../lib/constants/actionTypes";
import initialState from "./initialState";

const selectReducer = (state = initialState.selectData, action) => {
  switch (action.type) {
    // Get Category
    case types.GET_CATEGORY_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_CATEGORY_SUCCEEDED:
      return {
        ...state,
        categories: action.payload,
        isLoading: false
      };
    case types.GET_CATEGORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Get Offer
    case types.GET_OFFER_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_OFFER_SUCCEEDED:
      return {
        ...state,
        offers: action.payload,
        isLoading: false
      };
    case types.GET_OFFER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Get Inquiry
    case types.GET_INQUIRY_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_INQUIRY_SUCCEEDED:
      return {
        ...state,
        inquirys: action.payload,
        isLoading: false
      };
    case types.GET_INQUIRY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Get Daily Budget
    case types.GET_DAILY_BUDGET_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_DAILY_BUDGET_SUCCEEDED:
      return {
        ...state,
        dailyBudgets: action.payload,
        isLoading: false
      };
    case types.GET_DAILY_BUDGET_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // Get Radius
    case types.GET_RADIUS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case types.GET_RADIUS_SUCCEEDED:
      return {
        ...state,
        radius_data: action.payload,
        isLoading: false
      };
    case types.GET_RADIUS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default selectReducer;
