import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
