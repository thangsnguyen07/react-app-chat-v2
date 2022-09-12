import { AxiosResponse } from "axios";

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  // console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};
