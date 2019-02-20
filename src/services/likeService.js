import { api } from "../api";
import { likeEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

export const like = (payload, header = {}) =>
  api(baseUrl, header).post(likeEndPoint, payload);
