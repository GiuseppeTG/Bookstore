import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import './Book.scss';
import 'react-circular-progressbar/dist/styles.css';

export default function book({ book }) {
  const chapters = 50;

  function randomChapter() {
    return Math.floor(Math.random() * (chapters + 1));
  }

  const [chaptersCompleted, setChaptersCompleted] = useState(() => randomChapter());

  function incrementCount() {
    setChaptersCompleted((prevCount) => {
      if (prevCount === 50) return prevCount;
      return prevCount + 1;
    });
  }
  const dispatch = useDispatch();

  const done = (100 / chapters) * chaptersCompleted;

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
      <div className="progress" style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={done}
          text={`${done}%`}
          styles={buildStyles({
            pathColor: '#0290ff',
            textColor: 'black',
          })}
        />
      </div>
      <span />
      <div className="chapter-info">
        <h3>CURRENT CHAPTER</h3>
        <h2>{chaptersCompleted.toString()}</h2>
        <button
          className="blue-button"
          type="button"
          onClick={incrementCount}
        >
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}
