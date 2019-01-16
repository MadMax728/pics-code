import { api } from "../api";
import { updateBackOfficeReportEndPoint, addReportEndPoint, getReportedStatisticsEndPoint } from "../lib/constants/endPoints";

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
  api(baseUrl, header).put( updateBackOfficeReportEndPoint, payload );

// Add Report
export const addReport = (payload, header = {}) =>
  api(baseUrl, header).post( addReportEndPoint, payload );

// Get Reported Statistics
export const getReportedStatistics = (payload, header = {}) =>
  api(baseUrl, header).get( getReportedStatisticsEndPoint + payload.reportContent);

