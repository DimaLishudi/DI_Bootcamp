import { memo } from "react";

function Book({book}) {
  const {title, author, genre} = book;
  return (
    <>
      <h3>{title}</h3>
      <h4>by {author}</h4>
      <h4><i>{genre}</i></h4>
    </>
  )
}

export default memo(Book);