import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import './Book.scss';

export default function book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div className="book-info">
        <h5 className="category">
          {book.category}
        </h5>
        <h3 className="title">{book.title}</h3>
        <h4 className="author">{book.author}</h4>
        <ul className="actions">
          <li>
            <button className="book-button" type="button">Comments</button>
          </li>
          <li>
            <button
              onClick={() => {
                dispatch(removeBook(book.item_id));
              }}
              type="button"
              className="book-button remove-button"
            >
              Remove
            </button>
          </li>
          <li>
            <button className="book-button" type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="progress">
        <div className="circle" />
        <div className="progress-info">
          <p className="completed-number">75%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <span />
      <div className="chapter-info">
        <h3>CURRENT CHAPTER</h3>
        <h2>Chapter 7</h2>
        <button className="blue-button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}
