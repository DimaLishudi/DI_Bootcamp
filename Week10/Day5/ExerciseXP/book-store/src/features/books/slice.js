import { createSlice } from "@reduxjs/toolkit";
import initial_books from "../../assets/initial_books.json";

const initialState = {
  books: initial_books,
  genre: null,
};  

export const booksSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      return state;
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;