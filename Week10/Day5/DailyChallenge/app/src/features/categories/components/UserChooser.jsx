import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchAllUsers, STATUS } from "../userSlice";
import { setAuthor } from "../../posts/postsSlice";

export function PostList() {
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status != null) {
      return;
    }
    dispatch(fetchAllUsers());
  });

  // TODO: make Loading/Error shared components
  if (status === STATUS.PENDING || status === null) {
    return (<h2>Loading...</h2>);
  }

  if (status === STATUS.REJECTED) {
    return null;
  }

  const setPostsAuthor = (event) => {
    const author = event.target.value;
    if (!author) {
      return dispatch(setAuthor({author: null}));
    }
    return dispatch(setAuthor({author}));
  };

  // Fulfilled
  return (
    <>
    <h2>Filter By User</h2>
    <select name="userSelect" onChange={setPostsAuthor}>
      <option value="">All</option>
      {
        users.map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))
      }
    </select>
    </>
  );
}

export default PostList;