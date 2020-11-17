import { configureStore } from "@reduxjs/toolkit";

//Add Reducer
import userReducer from "./lib/slices/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
});
