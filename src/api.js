import axios from "axios";
import { Auth } from "./auth";
const storage = Auth.extractJwtFromStorage();
const apiFactory = baseUrl => {
  const service = axios.create({
    baseURL: baseUrl
  });

  return service;
};

export default apiFactory;
