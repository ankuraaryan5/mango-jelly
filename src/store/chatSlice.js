import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      id: 1,
      text: "Hello, how are you?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: 2,
      text: "I'm fine, and you?",
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: 3,
      text: "I'm also fine, how can I help?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString(),
    },
  ],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        id: state.messages.length + 1,
        text: action.payload.message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString(),
      });
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        id: state.messages.length + 1,
        text: action.payload.message,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString(),
      });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
