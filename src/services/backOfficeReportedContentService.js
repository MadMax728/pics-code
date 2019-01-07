import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */

export const getReportedContent = (payload, type="get", header = {}) => {
  let apiURL;
  switch (type) {
    case "get":
      apiURL = `/reports?reportContent=${payload.reportContent}`;
      break;
    case "search":
      apiURL = `/reports?reportContent=${payload.reportContent}&searchType=${payload.searchType}`;
      break;
    default: 
      apiURL = "/reports?reportContent=Image";
      break;
  }
  return api(baseUrl, header).get(apiURL);
};


// Update BackOffice Report
export const updateBackOfficeReport = (payload, header = {}) =>
  api(baseUrl, header).put("/reports", payload );



// BackOffice VideoBO API
export const reportedContentVideos = (payload, header = {}) =>
  api(baseUrl, header).get("/newsfeeds/news-feeds");

// BackOffice Campaign API
export const reportedContentCampaigns = (payload, header = {}) =>
  api(baseUrl, header).get("/newsfeeds/news-feeds");

// BackOffice Pics API
export const reportedContentPics = (payload, header = {}) =>
  api(baseUrl, header).get("/newsfeeds/news-feeds");

// BackOffice Ads API
export const reportedContentAds = (payload, header = {}) =>
  api(baseUrl, header).get("/newsfeeds/news-feeds");

// BackOffice Comments API
export const reportedContentComments = (payload, header = {}) =>
  api(baseUrl, header).get("/comments");

// BackOffice User API
export const reportedContentUsers = (payload, header = {}) =>
  api(baseUrl, header).get("/users/get-all-users");
