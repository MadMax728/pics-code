import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

export const like = (payload, header = {}) =>
  api(baseUrl, header).post("/likes", payload);
