import apiFactory from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// Explore API
export const getNewsFeed = payload => api.get("/newsFeed", payload);
export const getExplore = payload => api.get("/explore", payload);
export const getParticipant = payload => api.get("/participant", payload);
// export const getUser = payload => api.get("/user", payload);
// export const getPic = payload => api.get("/pic", payload);
