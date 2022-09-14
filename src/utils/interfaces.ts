export interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
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
