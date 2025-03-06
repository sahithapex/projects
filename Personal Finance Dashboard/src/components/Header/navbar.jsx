import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
 
      <div className="logo">💰 FinanceApp</div>

     
      <ul className="nav-links">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Budget</a></li>
        <li><a href="#">Transactions</a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Settings</a></li>
      </ul>

     
      <div className="profile">
        <img src="https://via.placeholder.com/40" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
