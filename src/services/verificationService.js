import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// getVerifications API
export const getVerifications = (payload, header = {}) =>
  api(baseUrl, header).get("/users/admin/list?type=verifiedUser");


// unverifiedUser API
export const getUnverifiedUsers = (payload, header = {}) =>
  api(baseUrl, header).get("/users/admin/list?type=UnverifiedUser");

// BackOffice update Verification API
export const updateVerification = (payload, header = {}) =>
  api(baseUrl, header).put("/users/admin/verify-user", payload);
  