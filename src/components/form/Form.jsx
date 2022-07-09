import React from 'react';

export default function Form() {
  return (
    <div className="form-container">
      <h2>ADD A NEW BOOK</h2>
      <form action="#">
        <input type="text" className="title-input" placeholder="Book title" />
        <input type="text" className="author-input" placeholder="Book author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
