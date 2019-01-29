import { api } from "../api";
import {
  getCompanyCampaignsEndPoint,
  getCreatorCampaignsEndPoint,
  getNewsFeedCampaignsEndPoint,
  getUserProfileCampaignsEndPoint,
  getSavedCampaignsEndPoint,
  getSettingsCampaignsEndPoint,
  getCampaignTypeEndPoint,
  getCampaignDetailsEndPoint,
  getFavouriteCampaignsEndPoint,
  createCampaignEndPoint,
  addParticipantsEndPoint,
  editCampaignEndPoint,
  removeParticipantsEndPoint
} from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

// Company Campaigns API
export const getCompanyCampaigns = payload =>
  api.get(getCompanyCampaignsEndPoint, payload);

// Creator Campaigns API
export const getCreatorCampaigns = payload =>
  api.get(getCreatorCampaignsEndPoint, payload);

// News Feed Campaigns API
export const getNewsFeedCampaigns = payload =>
  api.get(getNewsFeedCampaignsEndPoint, payload);

// User Profile Campaigns API
export const getUserProfileCampaigns = payload =>
  api.get(getUserProfileCampaignsEndPoint, payload);

// Saved Campaigns API
export const getSavedCampaigns = payload =>
  api.get(getSavedCampaignsEndPoint, payload);

// Settings Campaign
export const getSettingsCampaigns = (payload, header = {}) =>
  api(baseUrl, header).get(getSettingsCampaignsEndPoint + payload);

// Campaign Type Creator and Company
export const getCampaignType = (payload, header = {}) =>
  api(baseUrl, header).get(`${getCampaignTypeEndPoint}${payload.userType}`);

// Campaign Informatin API
export const getCampaignDetails = (payload, header = {}) =>
  api(baseUrl, header).get(getCampaignDetailsEndPoint + payload.id);

// Favourite Campaigns API
export const getFavouriteCampaigns = (payload, header = {}) =>
  api(baseUrl, header).get(getFavouriteCampaignsEndPoint + payload);

// Create Campaign
export const createCampaign = (payload, header = {}) =>
  api(baseUrl, header).post(createCampaignEndPoint, payload);

// Update Campaign
export const updateCampaign = (payload, header = {}) =>
  api(baseUrl, header).put(editCampaignEndPoint, payload);

// Add Participant
export const addParticipants = (payload, header = {}) =>
  api(baseUrl, header).post(addParticipantsEndPoint, payload);

// Remove Participant
export const removeParticipants = (payload, header = {}) =>
  api(baseUrl, header).delete(removeParticipantsEndPoint + payload);
