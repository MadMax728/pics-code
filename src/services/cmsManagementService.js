import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// BackOffice Dashboard API
export const getCMSManagement = (payload, header = {}) =>
  api(baseUrl, header).get(payload);

export const getCMSDetail = (payload, header = {}) =>
  api(baseUrl, header).get("/cmspages/" + payload);

export const updateCMS = (payload, header = {}) =>
  api(baseUrl, header).put("/cmspages/" , payload);

export const createCMS = (payload, header = {}) =>
  api(baseUrl, header).post("/cmspages/", payload);