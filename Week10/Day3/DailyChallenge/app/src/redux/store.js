import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../components/TaskSlice"

export const store = configureStore({
  reducer: {
    task: tasksReducer
  }
});

export default store;