import axios from "axios";
import {host} from "./url";

const defaultOptions = {

  baseURL: `${host}`,
  headers: {
    "Content-Type": "application/json",
  },
};

let API = axios.create(defaultOptions);

API.interceptors.request.use(function (config) {
  return config;
});

export default API;