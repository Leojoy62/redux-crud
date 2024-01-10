import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../Features/Books/BookSlice";

const store = configureStore({
  reducer: {
    bookReducer: BookReducer,
  },
});

export default store;
