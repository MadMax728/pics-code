import apiFactory from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const api = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */
export const submitLogin = payload => api.post("/auth/login", payload);

export const submitRegister = payload => api.post("/users", payload);

export const setNewPassword = payload =>
  api.put("/users/set-password", payload);

export const submitResetPassword = payload =>
  api.put("/users/forgot-password", payload);

/**
 *
 * @param {*} payload
 */
export const logout = payload => api.get("/auth/logout", payload);

/**
 *
 * @param {*} payload
 */
export const getSocialNetwork = payload =>
  api.get("/auth/social-network-details", payload);
