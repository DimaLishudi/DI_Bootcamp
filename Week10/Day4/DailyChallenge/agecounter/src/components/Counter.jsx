import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { ageDownAsync, ageUpAsync } from "./counterSlice"

export function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const amountRef = useRef();

  const down = () => dispatch(ageDownAsync(amountRef.current.value));
  const up = () => dispatch(ageUpAsync(amountRef.current.value));

  return (
    <>
      <h2>{count}</h2>

      <button onClick={down}>
        AgeDown
      </button>
      <input type="number" ref={amountRef}/>
      <button onClick={up}>
        AgeUp
      </button>
    </>
  );
}

export default Counter;