import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <p className="logo-text">
        Bookstore CMS
      </p>
      <ul className="links">
        <li><Link to="/" className="link">BOOKS</Link></li>
        <li><Link to="/categories" className="link">CATEGORIES</Link></li>
      </ul>
    </nav>
  );
}
