import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const booksAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.title.localCompare(b.title),
});

const bookSelector = booksAdapter.getSelectors(state => state.books)


const bookSlice = createSlice({
  name: "book",
  initialState: booksAdapter.getInitialState({
    loading: "idle",
  }),
  reducers: {
    addBook: booksAdapter.addOne
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
