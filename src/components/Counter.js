import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCounter,
} from "../features/counterSlice";
function Counter() {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();
  const [value, setValue] = useState(2);
  return (
    <div>
      <h2>Counter is {counter}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(+value))}>
        IncrementByAmount
      </button>
    </div>
  );
}

export default Counter;
