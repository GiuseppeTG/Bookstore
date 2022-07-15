import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import './Form.scss';

export default function Form() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const titleInput = useRef();
  const authorInput = useRef();
  const categoryInput = useRef();

  const handleTitle = (e) => {
    setBookTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setBookAuthor(e.target.value);
  };
  const handleCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const dispatch = useDispatch();

  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form
        onSubmit={(e) => {
          dispatch(addBook(
            {
              item_id: uuidv4(),
              title: bookTitle,
              author: bookAuthor,
              category: bookCategory,
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
          required
        />

        <input
          ref={authorInput}
          type="text"
          className="author-input"
          placeholder="Book author"
          value={bookAuthor}
          onChange={(e) => handleAuthor(e)}
          required
        />

        <input
          ref={categoryInput}
          type="text"
          className="category-input"
          placeholder="Book category"
          value={bookCategory}
          onChange={(e) => handleCategory(e)}
          required
        />
        <button className="add-button" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
