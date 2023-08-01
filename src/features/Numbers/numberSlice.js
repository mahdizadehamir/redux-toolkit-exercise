import { createSlice } from "@reduxjs/toolkit";

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
});

export default numberSlice.reducer;
export const { increment, decrement } = numberSlice.actions;
