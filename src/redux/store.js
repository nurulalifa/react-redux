// src/features/todo/todoSlice.js

import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./slices/TodoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// export store
export default store;