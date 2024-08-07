import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers"

export const store = configureStore({
  reducer: {
    task: tasksReducer
  }
});

export default store;