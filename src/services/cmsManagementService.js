import { api } from "../api";
import { getCMSManagementEndPoint, getCMSDetailEndPoint, updateCMSEndPoint, createCMSEndPoint, getWebCMSDetailEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

// BackOffice Dashboard API
export const getCMSManagement = (payload, header = {}) =>
  api(baseUrl, header).get(`${getCMSManagementEndPoint}${payload}`);

export const getCMSDetail = (payload, header = {}) =>
  api(baseUrl, header).get(`${getCMSDetailEndPoint}${payload}`);

export const updateCMS = (payload, header = {}) =>
  api(baseUrl, header).put(`${updateCMSEndPoint}/${payload.id}`, payload);

export const createCMS = (payload, header = {}) =>
  api(baseUrl, header).post(createCMSEndPoint, payload);

export const getWebCMSManagement = (payload, header = {}) =>
  api(baseUrl, header).get(`${getWebCMSDetailEndPoint}?title = ${payload.title}& language=${payload.language} `);
