import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

export default function book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <h5 className="category">Category</h5>
      <h3 className="title">{book.title}</h3>
      <h4 className="author">{book.author}</h4>
      <ul className="actions">
        <li>
          <button
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
            type="button"
            className="remove-btn"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
}
