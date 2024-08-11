import { createSelector } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";

import { books } from "./selectors";

export function useAllBooksSelector() {
  return useSelector(books);
}

// I store genre in the store and use 
export function useGenreBooksSelector() {
  return useSelector(createSelector([books, genre], (books, genre) => {
    if (!genre) {
      return books;
    }
    return books.filter(book => book.genre === genre);
  }));
}
