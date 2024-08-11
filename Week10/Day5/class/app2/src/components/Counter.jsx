import { memo } from "react";
import { useState, useMemo, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  // const [res, setRes] = useState();

  const expensiveCalculation = (arg) => {
    console.log("called on", arg);
    // for ...
    return arg + arg;
  }

  // solution #1 (bad)
  // const res = expensiveCalculation(count);

  // solution #2 (memoized)
  const res = useMemo(
    () => expensiveCalculation(count),
    [count]
  );

  // solution #3 (memoized)
  // useEffect(
  //   () => {setRes(expensiveCalculation(count))},
  //   [count] 
  // )

  console.log(res);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={add}>Increment</button>
    </>
  )
}

export default Counter;
