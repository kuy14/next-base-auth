import { configureStore } from "@reduxjs/toolkit";

//Add Reducer
import userReducer from "./lib/slices/userSlice";
import eventReducer from "./lib/slices/eventSlice";
import chatReducer from "./lib/slices/chatSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
    chats: chatReducer,
  },
  devTools: true,
});
