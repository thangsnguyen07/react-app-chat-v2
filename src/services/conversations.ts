import { axiosClient } from "../api/axiosClient";
import { API } from "../utils/constants";
import { Conversation } from "../utils/interfaces";

export const getConversations = () =>
  axiosClient.get<Conversation[]>(API.CONVERSATIONS);
