import React from 'react';

export default function book({ title, author }) {
  return (
    <div className="book-container">
      <h5 className="category">Category</h5>
      <h3 className="title">{title}</h3>
      <h4 className="author">{author}</h4>
      <ul className="actions">
        <li>
          <button type="button" className="remove-btn">Remove</button>
        </li>
      </ul>
    </div>
  );
}
