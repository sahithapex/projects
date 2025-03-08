import React from "react";
import "./style.css";
import { useAppContext } from "./contextApi/contextApi";

const Header = () => {
  const { isDark,toggleTheme } = useAppContext();
  return (
  <div className="header">
    <h1>Creating Daily Habits & Routines</h1>
    <button onClick={toggleTheme}>{isDark? "light mode" : "Dark mode"}</button>
    </div>
  )
}
export default Header;

