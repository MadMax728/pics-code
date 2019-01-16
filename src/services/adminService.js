import { api } from "../api";
import { getAdminsEndPoint, updateAdminEndPoint } from "../lib/constants";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

// BackOffice Get Admins API
export const getAdmins = (payload, header = {}) =>
  api(baseUrl, header).get(getAdminsEndPoint);

// BackOffice update Admin API
export const updateAdmin = (payload, header = {}) =>
  api(baseUrl, header).put(updateAdminEndPoint, payload);