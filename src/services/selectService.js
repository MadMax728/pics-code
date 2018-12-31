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
  
// Get Call to Periods
export const periods = (payload, header = {}) =>
  api(baseUrl, header).get("/vouchers/?type=periodLists");

// Get Call to Amounts
export const amounts = (payload, header = {}) =>
  api(baseUrl, header).get("/vouchers/?type=amountLists");

// Get Call to Types
export const types = (payload, header = {}) =>
  api(baseUrl, header).get("/vouchers/?type=typeLists");

// Get Call to Numbers
export const numbers = (payload, header = {}) =>
  api(baseUrl, header).get("/vouchers/?type=numberLists");
