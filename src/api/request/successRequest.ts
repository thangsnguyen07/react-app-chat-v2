import { AxiosRequestConfig } from "axios";

export const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
};
