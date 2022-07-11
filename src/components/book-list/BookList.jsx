import React from 'react';
import './BookList.scss';
import { useSelector, shallowEqual } from 'react-redux';
import Book from '../book/Book';

export default function BookList() {
  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <div className="book-list-container">

      <ul className="book-list">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        ))}
      </ul>

    </div>
  );
}
