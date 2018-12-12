import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// BackOffice Review Campaigns API
export const getBackOfficeReviewCampaigns = (payload, header = {}) =>
  api(baseUrl, header).get("/newsfeeds/news-feeds");

// BackOffice Review Ads API
export const getBackOfficeReviewAds = (payload, header = {}) =>
  api(baseUrl, header).get("/newsfeeds/news-feeds");