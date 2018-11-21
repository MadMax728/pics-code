import apiFactory from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// Company Campaigns API
export const getCompanyCampaigns = payload =>
  api.get("/campaigns/get-all-company-campaigns", payload);

// Creator Campaigns API
export const getCreatorCampaigns = payload =>
  api.get("/campaigns/get-all-creator-campaigns", payload);

// News Feed Campaigns API
export const getNewsFeedCampaigns = payload =>
  api.get("/campaigns/get-all-news-feed-campaigns", payload);

// User Profile Campaigns API
export const getUserProfileCampaigns = payload =>
  api.get("/campaigns/get-all-user-profile-campaigns", payload);

// Saved Campaigns API
export const getSavedCampaigns = payload =>
  api.get("/campaigns/get-all-saved-campaigns", payload);

// Settings Campaign
export const getSettingsCampaigns = payload =>
  api.get("/campaigns/get-settings-campaigns", payload);

// Campaign Type Creator and Company
export const getCampaignType = (payload, type) =>
  api.get("/campaign/" + type, payload);

// Campaign Informatin API
export const getCampaignDetails = (payload, provider) =>
  api.get("/campaigns/" + provider, payload);
