import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='bg-gray-700 text-white font-bold p-3 text-xl header'>
            <Link to='/'>HOME</Link>
            <Link to='/reviews'>REVIEWS</Link>
            <Link to='/dashboard'>DASHBOARD</Link>
            <Link to='/blogs'>BLOGS</Link>
            <Link to='/about'>ABOUT</Link>
        </nav>
    );
};

export default Header;