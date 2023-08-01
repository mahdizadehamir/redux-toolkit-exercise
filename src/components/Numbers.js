import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/numbers/numberSlice";

function Numbers() {
  const number = useSelector((state) => state.number.numberValue);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>MY Number is {number}</h2>
      <button onClick={() => dispatch(increment())}>increment num</button>
      <button onClick={() => dispatch(decrement())}>decrement num</button>
    </div>
  );
}

export default Numbers;
