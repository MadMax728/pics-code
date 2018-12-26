import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// Username API
export const usernames = (payload, header = {}) =>
  api(baseUrl, header).post("/users/get-all-users");