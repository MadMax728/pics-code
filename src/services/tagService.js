import { api } from "../api";
import { addInquiryTagEndPoint, addOfferTagEndPoint, getInquiryTagEndPoint, getOfferTagEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

export const getOfferTag = (payload, header = {}) =>
  api(baseUrl, header).get(getOfferTagEndPoint, payload);

export const getInquiryTag = (payload, header = {}) =>
  api(baseUrl, header).get(getInquiryTagEndPoint, payload);

export const addOfferTag = (payload, header = {}) =>
  api(baseUrl, header).post(addOfferTagEndPoint, payload);

export const addInquiryTag = (payload, header = {}) =>
  api(baseUrl, header).post(addInquiryTagEndPoint, payload);