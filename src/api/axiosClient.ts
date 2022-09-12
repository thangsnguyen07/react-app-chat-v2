import axios from "axios";
import { onRequest, onRequestError } from "./request";
import { onResponse, onResponseError } from "./response";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(onRequest, onRequestError);
axiosClient.interceptors.response.use(onResponse, onResponseError);
