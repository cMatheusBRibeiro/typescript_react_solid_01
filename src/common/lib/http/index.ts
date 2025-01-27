import axios, { CreateAxiosDefaults } from "axios";
import { Http } from "./http.interface";

export const createHttp = (
  config: CreateAxiosDefaults = {
    baseURL: "",
  }
): Http => {
  const _axios = axios.create(config);

  return {
    get: <T>(url: string): Promise<T> => {
      return _axios.get(url).then((response) => response.data);
    },
    post: <T, D>(url: string, body: D): Promise<T> => {
      return _axios.post(url, body).then((response) => response.data);
    },
    put: <T, D>(url: string, body: D): Promise<T> => {
      return _axios.put(url, body).then((response) => response.data);
    },
    delete: <T>(url: string): Promise<T> => {
      return _axios.delete(url).then((response) => response.data);
    },
  };
};

const http = createHttp();

export default http;
