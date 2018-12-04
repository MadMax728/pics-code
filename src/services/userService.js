import apiFactory, { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const apiAuth = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

export const submitLogin = payload => apiAuth.post("/auth/login", payload);

export const validateOTP = payload =>
  apiAuth.post("/auth/validate-otp", payload);

export const submitRegister = payload => apiAuth.post("/users", payload);

export const setNewPassword = payload =>
  apiAuth.put("/users/set-password", payload);

export const submitResetPassword = payload =>
  apiAuth.put("/users/forgot-password", payload);

export const getUser = (payload, header = {}) =>
  api(baseUrl, header).get("/users/" + payload.username, payload);

export const uploadProfilePicture = (payload, header = {}) =>
  api(baseUrl, header).post("/images/profile", payload);

export const updateUserProfile = (payload, header = {}) =>
  api(baseUrl, header).put("/users", payload);

export const getOfferTag = (payload, header = {}) =>
  api(baseUrl, header).get("/offertags", payload);

export const getInquiryTag = (payload, header = {}) =>
  api(baseUrl, header).get("/inquirytags", payload);

export const generateOTP = (payload, header = {}) =>
  api(baseUrl, header).get("/auth/generate-otp", payload);

export const addOfferTag = (payload, header = {}) =>
  api(baseUrl, header).post("/offertags", payload);

export const addInquiryTag = (payload, header = {}) =>
  api(baseUrl, header).post("/inquirytags", payload);

/**
 *
 * @param {*} payload
 */
export const logout = payload => apiAuth.get("/auth/logout", payload);

/**
 *
 * @param {*} payload
 */
export const getSocialNetwork = payload =>
  apiAuth.get("/auth/social-network-details", payload);

export const disconnectNetwork = (payload, provider) =>
  apiAuth.delete("/auth/" + provider + "/disconnect", payload);
