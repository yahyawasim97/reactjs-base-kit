import axios from "axios";
import Idx from "idx";

const AxiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 1000 * 60 * 10
});

// Add a request interceptor
AxiosInstance.interceptors.request.use(config => config, error => Promise.reject(error));

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (Idx(error, _ => _.response.data)) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  }
);

export default AxiosInstance;
