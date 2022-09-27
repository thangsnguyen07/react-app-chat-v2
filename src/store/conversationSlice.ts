import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversation } from "../utils/interfaces";

export interface ConversationState {
  conversations: Conversation[];
}

const initialState: ConversationState = {
  conversations: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    addConversation: (state, action: PayloadAction<Conversation>) => {
      state.conversations.push(action.payload);
    },
    updateConversations: (state, action: PayloadAction<Conversation[]>) => {
      state.conversations = action.payload;
    },
  },
});

export const { addConversation, updateConversations } =
  conversationSlice.actions;

export default conversationSlice.reducer;
