import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;
/**
 *
 * @param {*} payload
 */

// Get Category
export const categories = (payload, header = {}) =>
  api(baseUrl, header).get("/categories", payload);

// Get Offer
export const offers = (payload, header = {}) =>
  api(baseUrl, header).get("/offers", payload);

// Get Inquiry
export const inquiries = (payload, header = {}) =>
  api(baseUrl, header).get("/inquiries", payload);

// Get Daily Budget
export const dailyBudgets = (payload, header = {}) =>
  api(baseUrl, header).get("/dailybudgets", payload);

// Get Radius
export const radius = (payload, header = {}) =>
  api(baseUrl, header).get("/radius", payload);
  
// Get Call to Actions
export const callToActions = (payload, header = {}) =>
  api(baseUrl, header).get("/calltoactions", payload);
  