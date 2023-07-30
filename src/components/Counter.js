import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "../features/counterSlice";
function Counter() {
  const counter = useSelector(selectCounter);
  return <div>Counter is {counter}</div>;
}

export default Counter;
