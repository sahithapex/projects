import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
      <div className='navbar'> 
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Product">Product</Link>
      <Link to="/AboutUs">About Us</Link>
      <Link to="/Cart">Cart</Link>
    </nav>
    </div>
  );
};

export default Navbar;
