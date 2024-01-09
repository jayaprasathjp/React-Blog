import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useThemeContext } from './../../hooks/useThemeContext';

export default function Navbar() {

  const {theme} = useThemeContext()

  return (
    <header className={`${theme}header`}>
      <div className="container">
        <Link to="/">
          <h1>Blog</h1>
        </Link>
        <nav>
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/create">
            <h4>Create Post</h4>
          </Link>
        </nav>
      </div>
    </header>
  );
}
