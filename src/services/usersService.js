import apiFactory, { api } from "../api";


// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const apiAuth = apiFactory(baseUrl);


/**
 *
 * @param {*} payload
 */
export const getUserList = (payload, type='subscribed') => {
  let apiURL = "/subscribe/get-subscriber?isSubscribe=true";
  switch(type) {
    case 'subscribed':
      apiURL = "/subscribe/get-subscriber?isSubscribe=true";
      break;
    case 'unknown':
      apiURL = "/subscribe/get-subscriber?isSubscribe=false";
      break;
    case 'likes':
      apiURL = "/users/get-liked-user";
      break;
    case 'company':
      apiURL = "/users/get-companies";
      break;
  }
  return apiAuth.get(apiURL, payload) ;
}

