import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import numberReducer from "../features/numbers/numberSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    number: numberReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
