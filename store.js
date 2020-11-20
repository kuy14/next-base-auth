import { configureStore } from "@reduxjs/toolkit";

//Add Reducer
import userReducer from "./lib/slices/userSlice";
import eventReducer from "./lib/slices/eventSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
  },
  devTools: true,
});
