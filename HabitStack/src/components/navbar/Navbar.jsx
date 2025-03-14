import React from "react";
import "./Navbar.css";
import { useAppContext } from "../contextApi/contextApi";
import 

const Navbar = () => {
  const { toggleTheme } = useAppContext();
  return (
 <nav>
  <img src="" alt="" />
 </nav>
  )
}
export default Navbar;

<button onClick={toggleTheme}>Toggle Theme</button>