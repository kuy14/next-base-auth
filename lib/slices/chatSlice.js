import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const endpoint = "";

const initialState = {
  chat: [
    {
      group1: {
        roomId: "group1",
        chatTitle: "Group Chat 1",
        chatPerson: [
          {
            userId: 1,
            name: "john",
            profileImage: "https://placeimg.com/640/480/people",
          },
          {
            userId: 2,
            name: "jenny",
            profileImage: "https://placeimg.com/640/480/people",
          },
          {
            userId: 3,
            name: "danny",
            profileImage: "https://placeimg.com/640/480/people",
          },
        ],
        chatContent: [
          {
            timestamp: "2020-11-24T02:05:22.865Z",
            userId: 1,
            message: "Halloo, I'm user number 1",
            chatType: "text",
          },
          {
            timestamp: "2020-11-24T02:06:04.365Z",
            userId: 2,
            message: "Halloo, I'm user number 2",
            chatType: "text",
          },
        ],
      },
    },
  ],
};

const chatSlice = createSlice({
  name: "chatState",
  initialState: initialState,
  reducers: {
    setChat: (state, action) => {
      state.chat[0].group1.chatContent = [
        ...state.chat[0].group1.chatContent,
        action.payload,
      ];
    },
  },
});

export const { setChat } = chatSlice.actions;

export default chatSlice.reducer;
