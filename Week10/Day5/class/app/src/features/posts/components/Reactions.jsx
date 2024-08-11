import { memo } from "react";
import { useDispatch } from "react-redux";
import { incrementReaction } from "../postsSlice";

const reactionsEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function Reaction({reaction, post_id}) {
  const [name, counter] = reaction;
  const symbol = reactionsEmoji[name];

  const dispatch = useDispatch();
  const increment = () => dispatch(incrementReaction({post_id, reaction: name}));

  return (
    <button className="reactionButton" onClick={increment}>{symbol} {counter}</button>
  )
}

export function Reactions({post}) {
  // We have to pass at least post_id to Reactions component
  // We could get post with useSelector using post_id, but it would be slower, compared to simple passing post
  // const emojiCounters = useSelector((state) => state.posts.posts.find((post) => post.id === post_id).emoji);
  return (
    <div>
      {
      Object.entries(post.reactions).map((reaction, index) => (
        <Reaction reaction={reaction} post_id={post.id} key={"reaction/" + index}/>
      ))
      }
    </div>
  )
}

export default memo(Reactions);