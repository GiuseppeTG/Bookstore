import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import './BookList.scss';
import Book from '../book/Book';
import { getBooks } from '../../redux/books/books';

export default function BookList() {
  const books = useSelector((state) => state.books, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="book-list-container">

      <ul className="book-list">
        {books.map((book) => (
          <Book
            key={book.item_id}
            book={book}
          />
        ))}
      </ul>
    </div>
  );
}
