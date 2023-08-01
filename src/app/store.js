import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import numberReducer from "../features/Numbers/numberSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    number: numberReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
