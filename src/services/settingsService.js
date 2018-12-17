import { api } from "../api";


// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;


/**
 *
 * @param {*} payload
 */

// News Feed API
export const getNewsFeedOwner = (payload, header = {}) =>  
  api(baseUrl, header).get("newsfeeds/own-news-feeds");
export const getNewsFeedOther = (payload, header = {}) =>  
  api(baseUrl, header).get("/newsfeeds/own-news-feeds?id="+ payload);

// Get Saved API
export const getSavedOwner = (payload, header = {}) =>  api(baseUrl, header).get("/saveposts");

// About API
export const getAbout = (payload, header = {}) =>
  api(baseUrl, header).get("/users/" + payload.username, payload);

// Set Saved API
export const setSavedPost = (payload, header = {}) =>
  api(baseUrl, header).post("/saveposts/", payload);
  