import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

export const activateBusinessProfile = (payload, header = {}) =>
  api(baseUrl, header).post("/users/activate-business-profile", payload);

export const getBills = (payload, header = {}) =>
  api(baseUrl, header).post("/users/get-bills", payload);

export const getDownloadData = (payload, header = {}) =>
  api(baseUrl, header).post("/users/download-data", payload);
