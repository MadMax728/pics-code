import { api } from "../api";
import { getNotificationEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

export const getNotification = (payload, header = {}) =>
  api(baseUrl, header).get(getNotificationEndPoint, payload);
