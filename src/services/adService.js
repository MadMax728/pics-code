import apiFactory from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// Ad Settings API
export const getSettingsAds = payload => api.get("/newsfeeds/news-feeds", payload);

// Ad Details
export const getAdDetails = (payload, provider) =>
  api.get("/ad/" + provider, payload);
