import apiFactory, { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

export const setProfilePrivacy = (payload, header = {}) =>
  api(baseUrl, header).post("/users/private", payload);

export const setProfilePersonalizedAdvertise = (payload, header = {}) =>
  api(baseUrl, header).post("/users/advertise", payload);

export const setChangeEmail = (payload, header = {}) =>
  api(baseUrl, header).post("/users/changeEmail", payload);

export const setChangePassword = (payload, header = {}) =>
  api(baseUrl, header).post("/users/changePassword", payload);

export const setChangeInvoiceAddress = (payload, header = {}) =>
  api(baseUrl, header).post("/users/changeInvoiceAddress", payload);

export const deleteSearchHistory = (payload, header = {}) =>
  api(baseUrl, header).post("/users/deleteSearchHistory", payload);

export const deactivateAccount = (payload, header = {}) =>
  api(baseUrl, header).post("/users/deactivateAccount", payload);
