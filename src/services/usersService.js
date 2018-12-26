import apiFactory, { api } from "../api";


// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const apiAuth = apiFactory(baseUrl);


/**
 *
 * @param {*} payload
 */
export const getUserList = (payload, type='subscribed', header = {}) => {
  let apiURL = "/subscribe/get-subscriber?isSubscribe=true";
  let call = true;
  switch(type) {
    case 'subscribed':
      call = true;
      apiURL = "/subscribe/get-subscriber?isSubscribe=true";
      break;
    case 'unknown':
      call = true;
      apiURL = "/subscribe/get-subscriber?isSubscribe=false";
      break;
    case 'likes':
      call = false;
      apiURL = "/users/get-liked-user";
      break;
    case 'company':
      call = false;
      apiURL = "/users/get-companies";
      break;
  }
  return call ? apiAuth.get(apiURL, payload) : api(baseUrl, header).post(apiURL, payload) ;
}

