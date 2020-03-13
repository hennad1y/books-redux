import React from "react";
import "./books-list.css";
import BookItem from "../book-item";

const BooksList = ({books}) => {

    if (!books.length) return <div>List Empty</div>;

    return books.map(bookItem => <BookItem bookItem={bookItem} key={bookItem.list_id}/>)
};

export default BooksList;