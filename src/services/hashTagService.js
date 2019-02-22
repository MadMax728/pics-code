import { api } from "../api";
import {
  hashTagsEndPoint,
  addHashTagEndPoint
} from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

// hashTags API
export const hashTags = (payload, header = {}) =>
  api(baseUrl, header).get(hashTagsEndPoint);

// add hashTags API
export const addHashTag = (payload, header = {}) =>
  api(baseUrl, header).post(addHashTagEndPoint, payload);
