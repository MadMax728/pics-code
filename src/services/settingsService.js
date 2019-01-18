import { api } from "../api";
import { setSavedPostEndPoint, getAboutEndPoint, getSavedOwnerEndPoint, getNewsFeedOtherEndPoint, getNewsFeedOwnerEndPoint } from "../lib/constants/endPoints";


// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;


/**
 *
 * @param {*} payload
 */

// News Feed API
export const getNewsFeedOwner = (payload, header = {}) =>  
  api(baseUrl, header).get(getNewsFeedOwnerEndPoint);
export const getNewsFeedOther = (payload, header = {}) =>  
  api(baseUrl, header).get(`${getNewsFeedOtherEndPoint}${payload}`);

// Get Saved API
export const getSavedOwner = (payload, header = {}) =>  api(baseUrl, header).get(getSavedOwnerEndPoint);

// About API
export const getAbout = (payload, header = {}) =>
  api(baseUrl, header).get(getAboutEndPoint + payload.username, payload);

// Set Saved API
export const setSavedPost = (payload, header = {}) =>
  api(baseUrl, header).post(setSavedPostEndPoint, payload);
  