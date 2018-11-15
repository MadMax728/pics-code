import apiFactory from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// Landing/News Campaigns API
export const getCampaigns = payload =>
  api.get("/campaigns/get-all-campaigns", payload);

// Company Campaigns API
export const getCompanyCampaigns = payload =>
  api.get("/campaigns/get-all-company-campaigns", payload);

// Creator Campaigns API
export const getCreatorCampaigns = payload =>
  api.get("/campaigns/get-all-creator-campaigns", payload);

// Participant Campaigns API
export const getParticipantCampaigns = payload =>
  api.get("/campaigns/get-all-participant-campaigns", payload);

// Explore Campaigns API
export const getExploreCampaigns = payload =>
  api.get("/campaigns/get-all-explore-campaigns", payload);

// Participants Campaigns API
export const getParticipantsCampaigns = payload =>
  api.get("/campaigns/get-all-participants-campaigns", payload);

// News Feed Campaigns API
export const getNewsFeedCampaigns = payload =>
  api.get("/campaigns/get-all-news-feed-campaigns", payload);

// User Profile Campaigns API
export const getUserProfileCampaigns = payload =>
  api.get("/campaigns/get-all-user-profile-campaigns", payload);

// Saved Campaigns API
export const getSavedCampaigns = payload =>
  api.get("/campaigns/get-all-saved-campaigns", payload);

// Campaign Informatin API
export const getCampaignDetails = (payload, provider) =>
  api.get("/campaigns/" + provider + "/information", payload);
