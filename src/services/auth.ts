import { axiosClient } from "../api/axiosClient";
import { API } from "../utils/constants";
import { UserCredentials, RegisterParams, User } from "../utils/interfaces";

export const registerUser = (data: RegisterParams) =>
  axiosClient.post(API.REGISTER, data);

export const loginUser = (data: UserCredentials) =>
  axiosClient.post(API.LOGIN, data);

export const getAuthUser = () => axiosClient.get<User>(API.AUTH);
