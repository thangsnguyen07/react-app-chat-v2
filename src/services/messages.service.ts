import { axiosClient } from "../api/axiosClient";
import { API } from "../utils/constants";
import { CreateMessageParams, Message } from "../utils/interfaces";

export const getConversationMessages = (conversationId: number) =>
  axiosClient.get<Message[]>(`${API.MESSAGES}/${conversationId}`);

export const sendMessage = (data: CreateMessageParams) =>
  axiosClient.post(`${API.MESSAGES}`, data);
