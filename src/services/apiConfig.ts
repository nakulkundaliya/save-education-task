import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://my-json-server.typicode.com/SolveEducation/accounts";

export const ApiRequest = async (config: AxiosRequestConfig) => {
  const newConfig = {
    baseURL: BASE_URL,
    ...config
  };
  const res: AxiosRequestConfig = await axios(newConfig);
  return res;
};
