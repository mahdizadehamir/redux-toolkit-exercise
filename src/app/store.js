import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import numberReducer from "../features/numbers/numberSlice";
import logger from "redux-logger";
import userReducer from "../features/users/userslice";
import bookReducer from "../features/books/bookSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    number: numberReducer,
    users: userReducer,
    books:bookReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

console.log(store.getState())