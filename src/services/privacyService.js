import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

export const setProfilePrivacy = (payload, header = {}) =>
  api(baseUrl, header).put("/users/private", payload);

export const setSocialShare = (payload, header = {}) =>
  api(baseUrl, header).put("/users/social-share", payload);

export const setProfilePersonalizedAdvertise = (payload, header = {}) =>
  api(baseUrl, header).put("/users/advertise", payload);

export const setChangeEmail = (payload, header = {}) =>
  api(baseUrl, header).put("/users/change-email", payload);

export const setChangePassword = (payload, header = {}) =>
  api(baseUrl, header).put("/users/change-password", payload);

export const setChangeInvoiceAddress = (payload, header = {}) =>
  api(baseUrl, header).put("/users/", payload);

export const deleteSearchHistory = (payload, header = {}) =>
  api(baseUrl, header).put("/users/deleteSearchHistory", payload);

export const deactivateAccount = (payload, header = {}) =>
  api(baseUrl, header).put("/users/active-deactive", payload);
