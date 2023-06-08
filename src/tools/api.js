import axios from "axios";
import { useSelector } from "react-redux";
import { backendUrl } from "../config";

const Api = axios.create({
  baseURL: backendUrl,
});

export const ApiInterceptor = () => {
  const authToken = useSelector((state) => state.authToken);

  Api.interceptors.request.use(
    (config) => {
      console.log("22222222");
      console.log(config);
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
  return null;
};

export default Api;
