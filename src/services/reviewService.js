import { api } from "../api";
import { updateBackOfficeReviewEndPoint, AdsEndPoint, CampaignsEndPoint, getReviewStatisticsEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// BackOffice Review Campaigns API 
export const Campaigns = (payload, header = {}) =>
  api(baseUrl, header).get(CampaignsEndPoint);

// BackOffice Review Ads API
export const Ads = (payload, header = {}) =>
  api(baseUrl, header).get(AdsEndPoint);

// Get Reported Statistics
export const getReviewStatistics = (payload, header = {}) =>
  api(baseUrl, header).get(`/${payload.reportContent}${getReviewStatisticsEndPoint}`);
  
// Update BackOffice Review
export const updateBackOfficeReview = (payload, header = {}) =>
  api(baseUrl, header).put(`/${payload.reportContent}${updateBackOfficeReviewEndPoint}`, payload );