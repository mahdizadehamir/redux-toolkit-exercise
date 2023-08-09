import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../features/books/bookSlice";
import { selectAllBooks , selectTotalBooks , selectBooksById } from "../features/books/bookSlice";

function Books() {
  const bookId = useSelector(selectBooksById)
  
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks)
  console.log(books)
  const TotalBooks = useSelector(selectTotalBooks)
  console.log(TotalBooks)
  const bookState = useSelector((state) => state.books);
  console.log(bookState)
  return <div>
    <button onClick={() => dispatch(addBook({id:"1" , title:"TOMMYdss and Jerry"}))}>ADD TOM AND JERRY BOOK</button>
    <button onClick={() => dispatch(addBook({id:"2" , title:"TOMMYsddss and sdfsdf"}))}>ADD TOM AND JERRY BOOK</button>
  </div>;
}

export default Books;
