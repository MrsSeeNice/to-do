import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>To-Do App</h1>
      <ul className="nav-links">
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
