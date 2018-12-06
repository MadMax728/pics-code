import apiFactory, { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

export const getOfferTag = (payload, header = {}) =>
  api(baseUrl, header).get("/offertags", payload);

export const getInquiryTag = (payload, header = {}) =>
  api(baseUrl, header).get("/inquirytags", payload);

export const addOfferTag = (payload, header = {}) =>
  api(baseUrl, header).post("/offertags", payload);

export const addInquiryTag = (payload, header = {}) =>
  api(baseUrl, header).post("/inquirytags", payload);