import { api } from "../api";
import { getBackOfficeDashboardEndPoint } from "../lib/constants";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

// BackOffice Dashboard API
export const getBackOfficeDashboard = (payload, header = {}) =>
  api(baseUrl, header).get(getBackOfficeDashboardEndPoint);
