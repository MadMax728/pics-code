import apiFactory from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const apiAuth = apiFactory(baseUrl);

/**
 *
 * @param {*} payload
 */
export const getUserList = (payload, type='subscribed') => {
  let api = "/subscribe/get-subscriber?isSubscribe=true";
  switch(type) {
    case 'subscribed':
      api = "/subscribe/get-subscriber?isSubscribe=true";
      break;
    case 'unknown':
      api = "/subscribe/get-subscriber?isSubscribe=false";
      break;
    case 'likes':
      api = "/users/get-liked-user";
      break;
    case 'company':
      api = "/users/get-companies";
      break;
  }
  return apiAuth.get(api, payload);
}

