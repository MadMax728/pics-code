import { api } from "../api";
import { usernamesEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

// Username API
export const usernames = (payload, header = {}) =>
  api(baseUrl, header).post(usernamesEndPoint);

  