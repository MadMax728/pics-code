import apiFactory, { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

export const setProfilePrivacy = (payload, header = {}) =>
  api(baseUrl, header).post("/users/private", payload);
