import { api } from "../api";
import { getCommentsEndPoint, addCommentEndPoint, deleteCommentEndPoint, editCommentEndPoint } from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

export const getComments = (payload, header = {}) =>
  api(baseUrl, header).get(`${getCommentsEndPoint}${payload.typeId}`);

export const addComment = (payload, header = {}) =>
  api(baseUrl, header).post(addCommentEndPoint, payload);

export const deleteComment = (payload, header = {}) =>
  api(baseUrl, header).delete(deleteCommentEndPoint + payload.id);

export const editComment = (payload, header = {}) =>
  api(baseUrl, header).put(`${editCommentEndPoint}${payload.id}`, payload);