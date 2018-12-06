import apiFactory, { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const apiAuth = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */
export const getSubscribers = (payload) =>
  apiAuth.get("/subscribe/get-subscriber", payload);