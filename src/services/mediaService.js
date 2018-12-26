import { api } from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

/**
 *
 * @param {*} payload
 */ 

// Saved Campaigns API
// export const getCategories = payload => api.get("/categories", payload);

export const uploadMediaImage = (payload, header = {"Content-Type":"multipart/form-data"}) =>
  api(baseUrl, header).post("/images/profile", payload);

export const uploadMediaVideo = (payload, header = {"Content-Type":"multipart/form-data"}) =>
  api(baseUrl, header).post("/videos", payload);
