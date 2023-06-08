import axios from "axios";
import { useSelector } from "react-redux";
import { backendUrl } from "../config";

const Api = axios.create({
  baseURL: backendUrl,
});

Api.interceptors.request.use(
  (config) => {
    const authToken = useSelector((state) => state.authToken);

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
