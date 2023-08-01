import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/Numbers/numberSlice";

function Numbers() {
  const number = useSelector((state) => state.number.numberValue);
  const dispatch = useDispatch();
  return (
    <div>
      MY Number is {number}
      <button onClick={() => dispatch(increment())}>increment num</button>
      <button onClick={() => dispatch(decrement())}>decrement num</button>
    </div>
  );
}

export default Numbers;
