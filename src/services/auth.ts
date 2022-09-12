import { axiosClient } from "../api/axiosClient";
import { RegisterParams } from "../utils/interfaces";

export const registerUser = async (data: RegisterParams) => {
  axiosClient.post("auth/register", data);
};
