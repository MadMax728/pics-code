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

// Add Report
export const addReport = (payload, header = {}) =>
  api(baseUrl, header).post("/reports", payload );

// Get Reported Statistics
export const getReportedStatistics = (payload, header = {}) =>
  api(baseUrl, header).get("/reports/post-count?reportContent=" + payload.reportContent);

