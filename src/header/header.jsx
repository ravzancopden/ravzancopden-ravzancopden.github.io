import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
const Header = () => {
    return (
        <header>
            <img src="./icon.png" alt="header_logo" width="125" height="80"></img>
            <nav>
                <Link to="/" class="button">Home</Link> 
                <Link to="/about" class="button">About</Link>
                <Link to="/posts" class="button">Posts</Link>
                <Link to="/contact" class="button">Contact</Link>
            </nav>
        </header>
    );

}
export default Header;