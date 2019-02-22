import { api } from "../api";
import {
  getDownloadDataEndPoint,
  getBillsEndPoint,
  activateBusinessProfileEndPoint
} from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

export const activateBusinessProfile = (payload, header = {}) =>
  api(baseUrl, header).post(activateBusinessProfileEndPoint, payload);

export const getBills = (payload, header = {}) =>
  api(baseUrl, header).post(getBillsEndPoint, payload);

export const getDownloadData = (payload, header = {}) =>
  api(baseUrl, header).post(getDownloadDataEndPoint, payload);
