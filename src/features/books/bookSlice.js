import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const booksAdapter = createEntityAdapter();

export const {
  selectAll:selectAllBooks,
  selectById:selectBooksById,
  selectTotal:selectTotalBooks
} = booksAdapter.getSelectors(state => state.books)

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
