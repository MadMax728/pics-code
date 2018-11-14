import apiFactory from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */
export const getCampaigns = payload =>
  api.get("/campaigns/get-all-campaigns", payload);
