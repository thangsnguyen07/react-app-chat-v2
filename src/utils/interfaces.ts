export interface Conversation {
  id: number;
  creator: User;
  recipient: User;
  lastMessage: Message;
  createdAt: Date;
}

export interface Message {
  id: number;
  content: string;
  author: User;
  createdAt: string;
}

export interface RegisterParams {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface MessageEventPayload {
  id: number;
  content: string;
  conversation: Conversation;
  author: User;
  createdAt: string;
}
