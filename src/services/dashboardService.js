import { api } from "../api";
import {
  picsEndPoint,
  usersEndPoint,
  participantsEndPoint,
  exploresEndPoint,
  newsEndPoint
} from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

// Explore API
export const news = (payload, header = {}) =>
  api(baseUrl, header).get(`${newsEndPoint}${payload}`);

export const explores = (payload, header = {}) =>
  api(baseUrl, header).get(`${exploresEndPoint}${payload}`);

export const participants = (payload, header = {}) =>
  api(baseUrl, header).get(`${participantsEndPoint}${payload}`);

export const users = (payload, header = {}) =>
  api(baseUrl, header).get(`${usersEndPoint}${payload}`);

export const pics = (payload, header = {}) =>
  api(baseUrl, header).get(picsEndPoint);
