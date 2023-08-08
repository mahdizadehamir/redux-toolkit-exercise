import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../features/books/bookSlice";

function Books() {
  const dispatch = useDispatch();
  const bookState = useSelector((state) => state.books);
  console.log(bookState)
  return <div>
    <button onClick={() => dispatch(addBook({id:"1" , title:"TOM and Jerry"}))}>ADD TOM AND JERRY BOOK</button>
  </div>;
}

export default Books;
