import apiFactory, { api } from "../api";
import { 
  submitLoginEndPoint,
  validateOTPEndPoint,
  submitRegisterEndPoint,
  setNewPasswordEndPoint,
  submitResetPasswordEndPoint,
  getUserEndPoint,
  uploadProfilePictureEndPoint,
  updateUserProfileEndPoint,
  generateOTPEndPoint,
  logoutEndPoint,
  getSocialNetworkEndPoint,
} from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const apiAuth = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */

export const submitLogin = payload => apiAuth.post(submitLoginEndPoint, payload);

export const validateOTP = payload =>
  apiAuth.post(validateOTPEndPoint, payload);

export const submitRegister = payload => apiAuth.post(submitRegisterEndPoint, payload);

export const setNewPassword = payload =>
  apiAuth.put(setNewPasswordEndPoint, payload);

export const submitResetPassword = payload =>
  apiAuth.put(submitResetPasswordEndPoint, payload);

export const getUser = (payload, header = {}) =>
  api(baseUrl, header).get(getUserEndPoint + payload.username, payload);

export const uploadProfilePicture = (payload, header = {}) =>
  api(baseUrl, header).post(uploadProfilePictureEndPoint, payload);

export const updateUserProfile = (payload, header = {}) =>
  api(baseUrl, header).put(updateUserProfileEndPoint, payload);

export const generateOTP = (payload, header = {}) =>
  api(baseUrl, header).get(generateOTPEndPoint, payload);

/**
 *
 * @param {*} payload
 */
export const logout = payload => apiAuth.get(logoutEndPoint, payload);

/**
 *
 * @param {*} payload
 */
export const getSocialNetwork = payload =>
  apiAuth.get(getSocialNetworkEndPoint, payload);

export const disconnectNetwork = (payload, provider) =>
  apiAuth.delete("/auth/" + provider + "/disconnect", payload);
