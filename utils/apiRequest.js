import axios from "axios";
import { API_URL } from "./api_url";

const apiRequest = async (method, url, data) => {
  const config = {
    method,
    url,
    data: data ? data : undefined,
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
    timeout: 10000,
  };

  try {
    const response = await axios(config);
    return response?.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      console.log(JSON.stringify(error, null, 2));
      throw "No response received from server";
    } else {
      console.log("API Request Error:", error.message);
      throw error.message;
    }
  }
};

export default apiRequest;
