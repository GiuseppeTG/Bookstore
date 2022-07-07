import React from 'react';
import './BookList.scss';
import Book from '../book/Book';

export default function BookList() {
  const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      title: 'Caoital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];

  return (
    <div className="book-list-container">

      <ul className="book-list">
        {books.map((book) => (
          <Book
            title={book.title}
            key={book.id}
            book={book}
            author={book.author}
          />
        ))}
      </ul>

    </div>
  );
}
