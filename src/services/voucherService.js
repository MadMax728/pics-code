import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// BackOffice Dashboard API
export const getVouchers = (payload, header = {}) =>
  api(baseUrl, header).get("/vouchers/?type=voucherLists");

// BackOffice Dashboard API
export const addVoucher = (payload, header = {}) =>
  api(baseUrl, header).post("/vouchers", payload);