import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import numberReducer from "../features/Numbers/numberSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    number: numberReducer,
  },
});
