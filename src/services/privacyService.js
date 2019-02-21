import { api } from "../api";
import {
  deactivateAccountEndPoint,
  deleteSearchHistoryEndPoint,
  setChangeInvoiceAddressEndPoint,
  setChangePasswordEndPoint,
  setChangeEmailEndPoint,
  setProfilePersonalizedAdvertiseEndPoint,
  setSocialShareEndPoint,
  setProfilePrivacyEndPoint
} from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

export const setProfilePrivacy = (payload, header = {}) =>
  api(baseUrl, header).put(setProfilePrivacyEndPoint, payload);

export const setSocialShare = (payload, header = {}) =>
  api(baseUrl, header).patch(setSocialShareEndPoint, payload);

export const setProfilePersonalizedAdvertise = (payload, header = {}) =>
  api(baseUrl, header).patch(setProfilePersonalizedAdvertiseEndPoint, payload);

export const setChangeEmail = (payload, header = {}) =>
  api(baseUrl, header).patch(setChangeEmailEndPoint, payload);

export const setChangePassword = (payload, header = {}) =>
  api(baseUrl, header).patch(setChangePasswordEndPoint, payload);

export const setChangeInvoiceAddress = (payload, header = {}) =>
  api(baseUrl, header).put(setChangeInvoiceAddressEndPoint, payload);

export const deleteSearchHistory = (payload, header = {}) =>
  api(baseUrl, header).put(deleteSearchHistoryEndPoint, payload);

export const deactivateAccount = (payload, header = {}) =>
  api(baseUrl, header).put(deactivateAccountEndPoint, payload);
