import React from "react";
import "./header.css";
import { useAppContext } from "../contextApi/contextApi";

const Header = () => {
  const { toggleTheme } = useAppContext();
  return (
  <div className="header">
    <h1>Creating Daily Habits & Routines</h1>
    <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
export default Header;

