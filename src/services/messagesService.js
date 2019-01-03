import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;
/**
 *
 * @param {*} payload
 */

// Get messages
export const getMessages = (payload, header = {}) =>
  api(baseUrl, header).get(
    "/messages?senderId=" + payload.senderId + "&strict=false&recipientId=" + payload.recipientId
);
