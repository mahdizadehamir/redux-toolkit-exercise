import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter } from "../counter/counterSlice";
const initialState = {
  numberValue: 2,
};

const numberSlice = createSlice({
  name: "number",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.numberValue++;
    },
    decrement: (state, action) => {
      state.numberValue--;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(incrementCounter, (state, action) => {
      state.numberValue++;
    }),
});

export default numberSlice.reducer;
export const { increment, decrement } = numberSlice.actions;
