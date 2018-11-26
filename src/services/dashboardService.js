import apiFactory, { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// Explore API
export const getNews = (payload, header = {}) =>
  api(baseUrl, header).post("/newsfeeds/news-feeds");

export const getExplore = (payload, header = {}) =>
  api(baseUrl, header).post("/newsfeeds/explore");

export const getParticipant = (payload, header = {}) =>
  api(baseUrl, header).post("/participants/get-all-participant");
export const getDashboardUser = payload => api.get("/user", payload);
export const getPic = payload => api.get("/pic", payload);
