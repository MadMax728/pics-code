import apiFactory, { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const apiAuth = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */
export const getUserList = (payload, type = "subscribed", header = {}) => {
  let apiURL = "/messages/userlist?type=subscriber";
  let call = true;
  switch (type) {
    case "subscriber":
      call = true;
      apiURL = "/messages/userlist?type=subscriber";
      break;
    case "unknown":
      call = true;
      apiURL = "/messages/userlist?type=unknown";
      break;
    case "likeYou":
      call = true;
      apiURL = "/messages/userlist?type=likeYou";
      break;
    case "company":
      call = true;
      apiURL = "/messages/userlist?type=company";
      break;
  }
  return call
    ? apiAuth.get(apiURL, payload)
    : api(baseUrl, header).post(apiURL, payload);
};

export const sendRequest = (payload, header = {}) =>
  api(baseUrl, header).post("/subscribe/send-request", payload);

export const getUnsubscribe = (payload, id, header = {}) =>
  api(baseUrl, header).delete("/subscribe/" + id, payload);

// export const getFollowUserList = (payload, header = {}) =>
//   api(baseUrl, header).get(
//     "/subscribe/" + payload.id + "?type=" + payload.type
//   );

export const getPendingUserList = (payload, header = {}) =>
  api(baseUrl, header).get("/subscribe");

export const acceptRequest = (payload, header = {}) =>
  api(baseUrl, header).put("/subscribe/accept-request", payload);
