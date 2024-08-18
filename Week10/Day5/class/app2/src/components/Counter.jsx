import { memo } from "react";
import { useState, useMemo, useEffect } from 'react'

function Counter({callback}) {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);

  const expensiveCalculation = (arg) => {
    console.log("called on", arg);
    // for ...
    return arg + arg;
  }

  // solution #1
  const res = useMemo(
    () => expensiveCalculation(count),
    [count]
  );

  // solution #2
  // const [res, setRes] = useState();
  // useEffect(
  //   () => {setRes(expensiveCalculation(count))},
  //   [count]
  // )

  // #2

  function F(uid) {
   useSelect(createSelector(
    state => state.reducer.posts
    // (state, id) => id]
    , (posts, id) => {
      return posts.filter(post => post.id === uid)
    }));
  }

  selector(id);


  // solution #2
  const arg = useSelector(selector1);
  const res = useMemo(callback, [arg]);

  console.log(res);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={add}>Increment</button>
    </>
  )
}

export default memo(Counter);
