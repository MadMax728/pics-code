import apiFactory, { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const apiMock = apiFactory(baseUrl);
// const apiAuth = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// Company Campaigns API
export const getCompanyCampaigns = payload =>
  apiMock.get("/campaigns/get-all-company-campaigns", payload);

// Creator Campaigns API
export const getCreatorCampaigns = payload =>
  apiMock.get("/campaigns/get-all-creator-campaigns", payload);

// News Feed Campaigns API
export const getNewsFeedCampaigns = payload =>
  apiMock.get("/campaigns/get-all-news-feed-campaigns", payload);

// User Profile Campaigns API
export const getUserProfileCampaigns = payload =>
  apiMock.get("/campaigns/get-all-user-profile-campaigns", payload);

// Saved Campaigns API
export const getSavedCampaigns = payload =>
  apiMock.get("/campaigns/get-all-saved-campaigns", payload);

// Settings Campaign
export const getSettingsCampaigns = payload =>
  apiMock.get("/campaigns/get-settings-campaigns", payload);

// Campaign Type Creator and Company
// export const getCampaignType = (payload, type) =>
//   apiMock.post("/campaigns/get-typewise-campaigns/" + type, payload);

export const getCampaignType = (payload, header = {}) =>
  api(baseUrl, header).post("/campaigns/get-typewise-campaigns", payload);

// Campaign Informatin API
export const getCampaignDetails = (payload, provider) =>
  apiMock.get("/campaigns/" + provider, payload);
