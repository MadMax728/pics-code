import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

export const getComments = (payload, header = {}) =>
  api(baseUrl, header).post("/comments/get-comment", payload);

export const addComment = (payload, header = {}) =>
  api(baseUrl, header).post("/comments", payload);

export const deleteComment = (payload, header = {}) =>
  api(baseUrl, header).delete("/comments?id=" + payload.id);

export const editComment = (payload, header = {}) =>
  api(baseUrl, header).put("/comments", payload);