import apiFactory, { api } from "../api";


// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// // News Feed API
// export const getNewsFeedOwner = payload => api.get("/news-feed", payload);
// export const getNewsFeedOther = (payload, id) =>
//   api.get("/news-feed/" + id, payload);

// // Saved API
// export const getSavedOwner = payload => api.get("/saved", payload);
// export const getSavedOther = (payload, id) => api.get("/saved/" + id, payload);

// // About API
// export const getAboutOwner = payload => api.get("/about", payload);
// export const getAboutOther = (payload, id) => api.get("/about/" + id, payload);

// remove when actual API used
// News Feed API
export const getNewsFeedOwner = (payload, header = {}) =>  
  api(baseUrl, header).post("/newsfeeds/news-feeds");
export const getNewsFeedOther = (payload, header = {}) =>  
  api(baseUrl, header).post("/newsfeeds/news-feeds");

// Saved API
export const getSavedOwner = (payload, header = {}) =>  api(baseUrl, header).post("/newsfeeds/news-feeds");
export const getSavedOther = (payload, header = {}) =>  api(baseUrl, header).post("/newsfeeds/news-feeds");

// About API
export const getAbout = (payload, header = {}) =>
  api(baseUrl, header).get("/users/" + payload.username, payload);