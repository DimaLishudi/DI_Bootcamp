import { useRef } from "react";
import { useGenreBooksSelector } from "../hooks";
import Book from "./Book"

const GENRES = [
  "fantasy",
  "horror",
  "science fiction"
];

export function BookList() {
  const genreRef = useRef();
  const books = useGenreBooksSelector(genreRef.current?.value);

  const bookComponents = books?.map((book) => (
    <Book key={"book/" + book.id} book={book}/>
  ));
  return (
    <>
    <h2>Books</h2>
    <select name="userSelect" ref={genreRef}>
      <option value="">All</option>
      {
        GENRES.map((genre, idx) => (
          <option value={genre} key={idx}>
            {genre}
          </option>
        ))
      }
    </select>
    <section>
      {
        bookComponents
      }
    </section>
    </>
  );
}

export default BookList;