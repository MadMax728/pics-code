import { api } from "../api";
import {
  getSettingsAdsEndPoint,
  createAdEndPoint,
  getAdsDetailsEndPoint
} from "../lib/constants";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

// Ad Settings API
// Company Campaigns API
export const getSettingsAds = (payload, header = {}) =>
  api(baseUrl, header).get(getSettingsAdsEndPoint + payload);

// Ad Details
export const getAdDetails = (payload, header = {}) =>
  api(baseUrl, header).get(getAdsDetailsEndPoint + payload.id);

// Create Ad
export const createAd = (payload, header = {}) =>
  api(baseUrl, header).post(createAdEndPoint, payload);
