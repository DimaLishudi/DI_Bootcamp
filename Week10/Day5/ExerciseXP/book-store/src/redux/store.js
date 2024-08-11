import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "../features/books/slice"

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});
