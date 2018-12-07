import apiFactory, { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;
/**
 *
 * @param {*} payload
 */

// Get Category
export const getCategory = (payload, header = {}) =>
  api(baseUrl, header).get("/categories", payload);

// Get Offer
export const getOffer = (payload, header = {}) =>
  api(baseUrl, header).get("/offers", payload);

// Get Inquiry
export const getInquiry = (payload, header = {}) =>
  api(baseUrl, header).get("/inquiries", payload);