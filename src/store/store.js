import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";

export const store = configureStore({
  reducer: {
    chatSlice,
  },
});
