import { api } from "../api";
import {
  updateVerificationEndPoint,
  getUnverifiedUsersEndPoint,
  getVerificationsEndPoint
} from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// getVerifications API
export const getVerifications = (payload, header = {}) =>
  api(baseUrl, header).get(getVerificationsEndPoint);

// unverifiedUser API
export const getUnverifiedUsers = (payload, header = {}) =>
  api(baseUrl, header).get(getUnverifiedUsersEndPoint);

// BackOffice update Verification API
export const updateVerification = (payload, header = {}) =>
  api(baseUrl, header).put(updateVerificationEndPoint, payload);
