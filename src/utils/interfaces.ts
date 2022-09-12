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
