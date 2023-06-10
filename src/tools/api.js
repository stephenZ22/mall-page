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

export default Api;
