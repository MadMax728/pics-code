import { api } from "../api";
import { numbersEndPoint, typesEndPoint, amountsEndPoint, periodsEndPoint, callToActionsEndPoint, radiusEndPoint, dailyBudgetsEndPoint, inquiriesEndPoint, offersEndPoint, categoriesEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;
/**
 *
 * @param {*} payload
 */

// Get Category
export const categories = (payload, header = {}) =>
  api(baseUrl, header).get( categoriesEndPoint, payload);

// Get Offer
export const offers = (payload, header = {}) =>
  api(baseUrl, header).get( offersEndPoint, payload);

// Get Inquiry
export const inquiries = (payload, header = {}) =>
  api(baseUrl, header).get(inquiriesEndPoint, payload);

// Get Daily Budget
export const dailyBudgets = (payload, header = {}) =>
  api(baseUrl, header).get(dailyBudgetsEndPoint, payload);

// Get Radius
export const radius = (payload, header = {}) =>
  api(baseUrl, header).get(radiusEndPoint, payload);
  
// Get Call to Actions
export const callToActions = (payload, header = {}) =>
  api(baseUrl, header).get(callToActionsEndPoint, payload);
  
// Get Call to Periods
export const periods = (payload, header = {}) =>
  api(baseUrl, header).get(periodsEndPoint);

// Get Call to Amounts
export const amounts = (payload, header = {}) =>
  api(baseUrl, header).get(amountsEndPoint);

// Get Call to Types
export const types = (payload, header = {}) =>
  api(baseUrl, header).get(typesEndPoint);

// Get Call to Numbers
export const numbers = (payload, header = {}) =>
  api(baseUrl, header).get(numbersEndPoint);
