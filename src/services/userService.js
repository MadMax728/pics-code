import apiFactory from "../api";

// Developers can override this with an env.local file
const baseUrl = process.env.REACT_APP_API_BASEURL;

const api = apiFactory(baseUrl);

export const submitLogin = payload => api.post("/auth/login", payload);
export const logout = payload => api.get("/auth/logout", payload);
