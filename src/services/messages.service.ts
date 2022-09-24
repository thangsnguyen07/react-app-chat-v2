import { axiosClient } from "../api/axiosClient";
import { API } from "../utils/constants";
import { Message } from "../utils/interfaces";

export const getConversationMessages = (conversationId: number) =>
  axiosClient.get<Message[]>(`${API.MESSAGES}/${conversationId}`);
