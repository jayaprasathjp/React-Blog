import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <header>
        <div className="container ">
            <Link to="/"><h1>Blog</h1></Link>
            <nav>
                <Link to="/"><h4>Home</h4></Link>
                <Link to="/create"><h4> +POST</h4></Link>
            </nav>
        </div>
    </header>
  )
}
