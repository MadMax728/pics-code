import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;
/**
 *
 * @param {*} payload
 */

// Get Subscriber
export const subscriber = (payload, header = {}) =>
  api(baseUrl, header).get(
    "/subscribe/" + payload.id + "?type=" + payload.type
  );

// Get subscribed
export const subscribed = (payload, header = {}) =>
  api(baseUrl, header).get(
    "/subscribe/" + payload.id + "?type=" + payload.type
  );
