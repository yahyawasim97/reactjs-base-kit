import axios from "axios";
import { BASE_URL_OFFLINE_SERVICE } from "../config/connection";

class FileUpload {
  static post = async (url, data, token = "", progressCallBack) => {
    try {
      const response = await axios({
        baseURL: `${BASE_URL_OFFLINE_SERVICE}api/`,
        data,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-authorization": token
        },
        method: "post",
        onUploadProgress: progressEvent => {
          if (typeof progressCallBack === "function") {
            let progress = 0;

            if (progressEvent.total !== 0) {
              progress = parseInt((progressEvent.loaded / progressEvent.total) * 100, 10);
            }

            progressCallBack(progress);
          }
        },
        timeout: 1000 * 60 * 10,
        url
      });

      return response;
    } catch (error) {
      return error;
    }
  };
}

export default FileUpload;
