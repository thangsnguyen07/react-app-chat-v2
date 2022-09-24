export interface Conversation {
  id: number;
  creator: User;
  recipient: User;
  lastMessage: Message;
  createdAt: number;
}

export interface Message {
  id: number;
  content: string;
  author: User;
  createdAt: number;
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
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}
