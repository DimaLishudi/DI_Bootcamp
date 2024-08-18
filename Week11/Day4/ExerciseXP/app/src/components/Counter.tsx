import { useCallback, useState } from "react"

// Exercise 3: Using useState Hook with TypeScript in React
// What You Will Learn:

// Instructions
// Create a functional React component that uses the useState hook to manage a counter. The component should display the current count and have buttons to increment and decrement the count.

export function Counter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(oldCount => oldCount + 1), []);
  const decrement = useCallback(() => setCount(oldCount => oldCount - 1), []);
  return (
    <>
    
    <button onClick={increment}>+</button>
    <h3>Counter: {count}</h3>
    <button onClick={decrement}>-</button>
    </>
  )
}

export default Counter;
