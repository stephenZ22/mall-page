import axios from "axios";
import { backendUrl } from "../config";

const authToken = localStorage.getItem("authToken");
const Api = axios.create({
  baseURL: backendUrl,
});

Api.interceptors.request.use(
  (config) => {
    console.log(authToken);
    if (authToken) {
      config.headers.Authorization = `${authToken}`;
    }
    config.headers["Content-Type"] = "application/json";

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response) => {
    if (response.status && response.status === 200) {
      return response;
    }

    // FIXME
    return response;
  },

  (err) => {
    console.error(err);
    if (err.response.status === 401) {
      window.location.href = "login";
    }
    return Promise.resolve(err);
  }
);

export default Api;
