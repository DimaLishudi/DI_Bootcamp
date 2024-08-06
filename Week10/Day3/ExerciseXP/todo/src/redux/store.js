import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../components/ToDo/ToDoSlice"

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});

export default store;