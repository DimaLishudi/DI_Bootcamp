import { createSelector } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";

import { posts, author, status } from "./postsSlice";

// export const getAuthor = (state) => (state.posts.author);
// export const getPosts = (state) => (state.posts.posts);
// export const state = (state) => (state.posts);

export function usePostsSelector() {
  return useSelector(createSelector([posts, author], (posts, author) => {
    if (author === null) {
      return posts
    }
    return posts.filter(post => post.userId == author);
  }));
}

export function useStatusSelector() {
  // const selector = createSelector([status], status => status);
  return useSelector(status);
}
