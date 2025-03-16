import React from "react";
import { NavLink } from "react-router-dom";
import NavbarItems from "./Navitems";

const Headbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {NavbarItems.map(({ text, icon, path }) => (
          <li key={path} className="nav-item">
            <NavLink to={path} className="nav-link">
              {icon}
              <span>{text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Headbar;

