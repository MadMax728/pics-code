import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

// const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

// BackOffice Get Admins API
export const getAdmins = (payload, header = {}) =>
  api(baseUrl, header).get("/users/admin/list?type=adminDashBoard");

// BackOffice update Admin API
export const updateAdmin = (payload, header = {}) =>
  api(baseUrl, header).put("/users/set-isadmin", payload);