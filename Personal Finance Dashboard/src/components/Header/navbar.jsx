import React, { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import "./nav.css";

const Navbar = () => {
  const { finance, toggleDarkMode } = useContext(FinanceContext);

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

     
      <label className="switch">
        <input type="checkbox" checked={finance.darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>

      <div className="profile">
        <img src="https://via.placeholder.com/40" alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
