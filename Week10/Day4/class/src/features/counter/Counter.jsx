import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByNum,
  incrementBy2Nums,
  incrementWithPrepare,
} from "./counterSlice";
import { useRef } from "react";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const numRef = useRef();

  const num1Ref = useRef();
  const num2Ref = useRef();

  const addNum = () => {
    const num = numRef.current.value;
    dispatch(incrementByNum(Number(num)));
  };

  const add2Nums = () => {
    const num1 = num1Ref.current.value;
    const num2 = num2Ref.current.value;
    // dispatch(incrementBy2Nums({ n1: Number(num1), n2: Number(num2) }));
    dispatch(incrementWithPrepare(Number(num1), Number(num2)));
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(reset())}> Reset </button>
      <div>
        <h2>Increment By Number</h2>
        <input ref={numRef} />
        <button onClick={() => addNum()}> Add Number</button>
      </div>
      <div>
        <h2>Increment By 2 Numbers</h2>
        <input ref={num1Ref} />
        <input ref={num2Ref} />
        <button onClick={() => add2Nums()}> Add 2 Numbers</button>
      </div>
    </>
  );
};
export default Counter;
