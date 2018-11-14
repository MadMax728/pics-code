import axios from "axios";
import { Auth } from "./auth";
const storage = Auth.extractJwtFromStorage();
const apiFactory = baseUrl => {
  const service = axios.create({
    baseURL: baseUrl
  });

  return service;
};

export const apiAuth = (baseUrl, header = {}) => {
  const service = axios.create({
    baseURL: baseUrl,
    headers: buildHeader(header)
  });

  return service;
};

const buildHeader = (obj = {}) => {
  let header = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  Object.assign(header, obj);
  return header;
};

export default apiFactory;
