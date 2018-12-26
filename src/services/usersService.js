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
