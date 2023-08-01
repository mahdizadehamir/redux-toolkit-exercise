import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import numberReducer from "../features/numbers/numberSlice";
import logger from "redux-logger";
import userReducer from "../features/users/userslice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    number: numberReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
