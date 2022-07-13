import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

export default function Form() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const titleInput = useRef();
  const authorInput = useRef();

  const handleTitle = (e) => {
    setBookTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <h2>ADD A NEW BOOK</h2>
      <form
        onSubmit={(e) => {
          dispatch(addBook(
            {
              item_id: uuidv4(),
              title: bookTitle,
              author: bookAuthor,
              category: 'action',
            },
          ));
          e.preventDefault();
        }}
      >

        <input
          ref={titleInput}
          type="text"
          className="title-input"
          placeholder="Book title"
          value={bookTitle}
          onChange={(e) => handleTitle(e)}
        />

        <input
          ref={authorInput}
          type="text"
          className="author-input"
          placeholder="Book author"
          value={bookAuthor}
          onChange={(e) => handleAuthor(e)}
        />

        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
