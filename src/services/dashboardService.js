import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// Explore API
export const news = (payload, header = {}) =>
  api(baseUrl, header).get("/newsfeeds/news-feeds" + payload);

export const explores = (payload, header = {}) =>
  api(baseUrl, header).post("/newsfeeds/explore" + payload);

export const participants = (payload, header = {}) =>
  api(baseUrl, header).post("/participants/get-all-participant");

export const users = (payload, header = {}) =>
  api(baseUrl, header).post("/users/get-all-users");

export const pics = (payload, header = {}) =>
  api(baseUrl, header).post("/pics");
