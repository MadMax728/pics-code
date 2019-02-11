import axios from "axios";
import { Auth } from "./auth";

const apiFactory = baseUrl => {
  const service = axios.create({
    baseURL: baseUrl,
    transformResponse: [
      data => {
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {
            /* Ignore */
          }
        }

        if (data && (data.message === "Invalid credentials" || data.error === "Error: Invalid credentials")) {
          // Auth.logoutUser();
          // window.location.reload("/");
        }

        return data;
      }
    ]
  });

  return service;
};

export const api = (baseUrl, header = {}) => {
  const service = axios.create({
    baseURL: baseUrl,
    headers: buildHeader(header),
    transformResponse: [
      data => {
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {
            /* Ignore */
          }
        }

        if (data && (data.message === "Invalid credentials" || data.error === "Error: Invalid credentials")) {
          // Auth.logoutUser();
          // window.location.reload("/");
        }

        return data;
      }
    ]
  });

  return service;
};

const buildHeader = (obj = {}) => {
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  Object.assign(header, obj);
  return header;
};

export default apiFactory;
