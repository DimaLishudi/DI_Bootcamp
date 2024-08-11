import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAllPosts, STATUS } from "../postsSlice";
import { Loading } from "./Loading"
import { Post } from "./Post"
import { usePostsSelector, useStatusSelector } from "../postsHooks";

export function PostList() {
  const posts = usePostsSelector();

  const status = useStatusSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status != null) {
      return;
    }
    dispatch(fetchAllPosts());
  });

  if (status === STATUS.PENDING || status === null) {
    return Loading();
  }

  if (status === STATUS.REJECTED) {
    return Error();
  }

  const postComponents = posts?.map((post) => (
    <Post key={"post/" + post.id} post={post}/>
  ));

  // Fulfilled
  return (
    <>
    <h2>Posts</h2>
    <section>
      {
        postComponents
      }
    </section>
    </>
  );
}

export default PostList;