import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/book-list/BookList';
import Navbar from './components/navbar/Navbar';
import Categories from './pages/Categories';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}
