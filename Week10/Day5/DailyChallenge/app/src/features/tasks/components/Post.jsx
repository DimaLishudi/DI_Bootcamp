import Reactions from "./Reactions"

export function Post({post}) {
  return (
    <article>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <Reactions post={post}/>
    </article>
  );
}

export default Post;