import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// BackOffice Review Campaigns API 
export const Campaigns = (payload, header = {}) =>
  api(baseUrl, header).get("/campaigns/get-all-campaigns");

// BackOffice Review Ads API
export const Ads = (payload, header = {}) =>
  api(baseUrl, header).get("/advertisement/list");

// Get Reported Statistics
export const getReviewStatistics = (payload, header = {}) =>
  api(baseUrl, header).get("/reports/post-count?reportContent=" + payload.reportContent);


//   CampaignStatistics
// AdsStatistics