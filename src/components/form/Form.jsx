import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

export default function Form() {
  const dispatch = useDispatch();
  const titleInput = useRef();
  const authorInput = useRef();
  return (
    <div className="form-container">
      <h2>ADD A NEW BOOK</h2>
      <form
        action="#"
        onSubmit={() => {
          dispatch(addBook(
            {
              title: titleInput.current.value,
              author: authorInput.current.value,
              id: uuidv4(),
            },
          ));
        }}
      >
        <input ref={titleInput} type="text" className="title-input" placeholder="Book title" />
        <input ref={authorInput} type="text" className="author-input" placeholder="Book author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
