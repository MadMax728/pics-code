import { api } from "../api";
import { getUserCommunityEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

export const getUserCommunity = (payload, header = {}) =>
  api(baseUrl, header).get(getUserCommunityEndPoint + payload.id);
