import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

// Ad Settings API
// Company Campaigns API
export const getSettingsAds = (payload, header = {}) =>
  api(baseUrl, header).get("/advertisement/get-user-advertise" + payload);

// Ad Details
export const getAdDetails = (payload, provider) =>
  api.get("/ad/" + provider, payload);

// Create Ad
export const createAd = (payload, header = {}) =>
  api(baseUrl, header).post("/advertisement", payload);
