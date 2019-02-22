import { api } from "../api";
import { getMessagesEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;
/**
 *
 * @param {*} payload
 */

function queryParams(payload = {}) {
  return Object.keys(payload)
    .map(key => payload[key] !== undefined && key + "=" + payload[key])
    .join("&");
}

// Get messages
export const getMessages = (payload, header = {}) =>
  api(baseUrl, header).get(`${getMessagesEndPoint}${queryParams(payload)}`);
