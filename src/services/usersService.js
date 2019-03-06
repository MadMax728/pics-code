import apiFactory, { api } from "../api";
import {
  unblockUserRequestEndPoint,
  blockUserRequestEndPoint,
  acceptRequestEndPoint,
  getPendingUserListEndPoint,
  getUnsubscribeEndPoint,
  sendRequestEndPoint,
  getUserListCompanyEndPoint,
  getUserListLikeYouEndPoint,
  getUserListUnknownEndPoint,
  getUserListSubscriberEndPoint,
  searchUsersEndpoint
} from "../lib/constants/endPoints";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const apiAuth = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */
export const getUserList = (payload, type = "subscribed", header = {}) => {
  let apiURL = getUserListSubscriberEndPoint;
  let call = true;
  switch (type) {
    case "subscriber":
      call = true;
      apiURL = getUserListSubscriberEndPoint;
      break;
    case "unknown":
      call = true;
      apiURL = getUserListUnknownEndPoint;
      break;
    case "likeYou":
      call = true;
      apiURL = getUserListLikeYouEndPoint;
      break;
    case "company":
      call = true;
      apiURL = getUserListCompanyEndPoint;
      break;
    default:
      call = true;
      apiURL = getUserListSubscriberEndPoint;
      break;
  }
  return call
    ? apiAuth.get(apiURL, payload)
    : api(baseUrl, header).post(apiURL, payload);
};

export const sendRequest = (payload, header = {}) =>
  api(baseUrl, header).post(sendRequestEndPoint, payload);

export const getUnsubscribe = (payload, id, header = {}) =>
  api(baseUrl, header).delete(`${getUnsubscribeEndPoint}${id}`, payload);

export const getPendingUserList = (payload, header = {}) =>
  api(baseUrl, header).get(getPendingUserListEndPoint);

export const acceptRequest = (payload, header = {}) =>
  api(baseUrl, header).put(acceptRequestEndPoint, payload);

export const blockUserRequest = (payload, header = {}) =>
  api(baseUrl, header).put(blockUserRequestEndPoint, payload);

export const unblockUserRequest = (payload, id, header = {}) =>
  api(baseUrl, header).delete(unblockUserRequestEndPoint + id, payload);

export const searchUsers = (keyword, page, limit, header = {}) => {
  return api(baseUrl, header.headers).get(
    `${searchUsersEndpoint}?page=${page}&limit=${limit}&keyword=${keyword}`
  );
};

export const searchSubscribedUsers = (keyword, page, limit, header = {}) => {
  return api(baseUrl, header.headers).get(
    `${sendRequestEndPoint}?requestType=following&page=${page}&limit=${limit}&q=${keyword}`
  );
};
