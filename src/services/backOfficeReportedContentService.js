import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// BackOffice ImageBO API
export const images = (payload, header = {}) =>
  api(baseUrl, header).get("/newsfeeds/news-feeds");
